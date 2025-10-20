import { writeFileSync } from "fs";
import { resolve } from "path";

// Simplified base colors only (no light/dark/medium variants)
// Using the knownColors list as our base
const namedColors = [
	"black",
	"blue",
	"brown",
	"cyan",
	"gold",
	"gray",
	"green",
	"khaki",
	"magenta",
	"orange",
	"orchid",
	"pink",
	"purple",
	"red",
	"salmon",
	"silver",
	"tan",
	"teal",
	"turquoise",
	"violet",
	"white",
	"yellow",
].sort();

const outPath = resolve("ABR-U/colors-named.css");

// ABR-U naming algorithm: For each word, take first letter + next 2 consonants
// Words with 3 letters or less stay as-is
function abbreviate(color) {
	const lower = color.toLowerCase();

	// If 3 letters or less, return as-is (ABR-U rule)
	if (lower.length <= 3) {
		return lower;
	}

	// For simple single-word colors, just treat as one word
	const words = [lower];

	const parts = words.map((word) => {
		let abbr = word[0]; // First letter always included
		let consonantCount = 0;
		let prevChar = word[0];
		let vowelsSinceLastConsonant = [];

		// Collect up to 2 more consonants (skip consecutive duplicates)
		for (let i = 1; i < word.length && consonantCount < 2; i++) {
			const char = word[i];
			// Skip if it's the same as the previous character (consecutive duplicate)
			if (char === prevChar) {
				continue;
			}
			if (!"aeiou".includes(char)) {
				abbr += char;
				consonantCount++;
				prevChar = char;
				// Don't clear, we want to remember vowels before this consonant
			} else {
				vowelsSinceLastConsonant.push(char);
				prevChar = char;
			}
		}

		// If we have less than 3 chars and only found 1 consonant
		// Insert the LAST vowel that came before that consonant
		// Examples:
		// - "teal" (t-e-a-l): t + l -> needs vowel -> insert 'a' (last before 'l') -> "tal"
		// - "blue" (b-l-u-e): b + l -> needs vowel -> but vowels are AFTER l, so pad with 'u' -> "blu"
		if (abbr.length < 3) {
			// Try to get vowels that appeared between L1 and the last consonant
			let vowelToInsert = null;

			// Check if we have exactly 1 consonant and vowels appeared before it
			if (consonantCount === 1) {
				// Get vowels from the original word between first char and the consonant position
				const consonantPos = word.indexOf(abbr[1], 1);
				const vowelsBefore = [];
				for (let i = 1; i < consonantPos; i++) {
					if ("aeiou".includes(word[i]) && word[i] !== word[i - 1]) {
						vowelsBefore.push(word[i]);
					}
				}
				if (vowelsBefore.length > 0) {
					vowelToInsert = vowelsBefore[vowelsBefore.length - 1];
					// Insert before the consonant
					abbr = abbr[0] + vowelToInsert + abbr[1];
				}
			}

			// If still not 3 chars, pad with remaining letters
			if (abbr.length < 3) {
				for (let i = 1; i < word.length && abbr.length < 3; i++) {
					if (!abbr.includes(word[i])) {
						abbr += word[i];
					}
				}
			}
		}

		return abbr;
	});

	return parts.join("");
}

function generate() {
	const used = new Set();
	const colorMap = new Map();

	// First pass: generate abbreviations
	for (const name of namedColors) {
		let abbr = abbreviate(name);
		let original = abbr;
		let attempt = 1;

		// Handle conflicts by extending with consonants
		while (used.has(abbr)) {
			const consonants = name.replace(/[aeiou]/gi, "");
			if (attempt < consonants.length) {
				abbr = original + consonants.charAt(attempt);
				attempt++;
			} else {
				// Fallback: use full name if all else fails
				abbr = name;
				break;
			}
		}

		used.add(abbr);
		colorMap.set(name, abbr);
	}

	const lines = [];

	// Create unique abbreviation map (prefer "gray" over "grey")
	const uniqueColors = new Map();
	for (const name of namedColors) {
		const abbr = colorMap.get(name);
		// Use gray spelling for CSS values
		const cssValue = name.replace(/grey/g, "gray");
		// Only add if this abbreviation hasn't been seen yet
		if (!uniqueColors.has(abbr)) {
			uniqueColors.set(abbr, cssValue);
		}
	}

	// Generate .bc- classes (background-color)
	for (const [abbr, cssValue] of uniqueColors) {
		lines.push(`.bc-${abbr}{background-color:${cssValue};}`);
	}

	// Generate .c- classes (color)
	for (const [abbr, cssValue] of uniqueColors) {
		lines.push(`.c-${abbr}{color:${cssValue};}`);
	}

	// Generate .brdc- classes (border-color)
	for (const [abbr, cssValue] of uniqueColors) {
		lines.push(`.brdc-${abbr}{border-color:${cssValue};}`);
	}

	const content = lines.join("\n");
	writeFileSync(outPath, content, "utf8");
	console.log(
		`Wrote ${namedColors.length * 3} named color classes to ${outPath}`
	);
}

generate();
