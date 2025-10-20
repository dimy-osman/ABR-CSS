import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";

const SOURCE = "ABR-U/ABR-U.css";
const OUT_MIN = "ABR-U/ABR-U.min.css";

function deriveVersion() {
	try {
		const readme = readFileSync("README.md", "utf8");
		const m = readme.match(/ABR-CSS@v(\d+\.\d+\.\d+)/);
		if (m) return `v${m[1]}`;
	} catch {}
	const now = new Date();
	const pad = (n) => String(n).padStart(2, "0");
	return `dev-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
		now.getDate()
	)}_${pad(now.getHours())}${pad(now.getMinutes())}`;
}

function formatLocalTimestamp() {
	const d = new Date();
	const pad = (n) => String(n).padStart(2, "0");
	const year = d.getFullYear();
	const month = pad(d.getMonth() + 1);
	const day = pad(d.getDate());
	const hour = pad(d.getHours());
	const minute = pad(d.getMinutes());
	const second = pad(d.getSeconds());
	const offsetMin = -d.getTimezoneOffset(); // positive for east of UTC
	const sign = offsetMin >= 0 ? "+" : "-";
	const abs = Math.abs(offsetMin);
	const offH = pad(Math.floor(abs / 60));
	const offM = pad(abs % 60);
	const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local";
	return `${year}-${month}-${day} ${hour}:${minute}:${second} ${sign}${offH}:${offM} (${tz})`;
}

function minifyCss() {
	const banner = `/*! ABR-U.min.css | ${deriveVersion()} | ${formatLocalTimestamp()} */`;
	// Use clean-css-cli via npx
	const cmd = `npx --yes cleancss -O2 ${SOURCE}`;
	const min = execSync(cmd, { encoding: "utf8" });
	if (!min || typeof min !== "string") {
		console.error("Minification failed");
		process.exit(1);
	}
	writeFileSync(OUT_MIN, `${banner}\n${min}`, { encoding: "utf8" });
	console.log(`Minified ${SOURCE} -> ${OUT_MIN}`);
}

minifyCss();
