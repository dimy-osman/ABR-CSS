const fs = require('fs');
const path = require('path');

const inputCssPaths = [
  path.resolve(__dirname, '../../ABR-U/ABR-U.css'),
  path.resolve(__dirname, '../../ABR-U/colors-named.css')
];
const outJsonPath = path.resolve(__dirname, '../src/data/classes.json');

// Breakpoint mappings
const breakpoints = {
  'xs': '426px',
  's': '769px',
  'm': '1025px',
  'l': '1441px',
  'xl': '1921px'
};

const css = inputCssPaths.filter(p => fs.existsSync(p)).map(p => fs.readFileSync(p, 'utf8')).join('\n');
const classRegex = /\.([a-z0-9_\-@\\%!]+)\s*\{([^}]+)\}/gi;

const classes = {};
let match;
while ((match = classRegex.exec(css)) !== null) {
  const rawName = match[1];
  // remove escapes like \! or \@
  const name = rawName.replace(/\\/g, '');
  let body = match[2].trim().replace(/\s+/g, ' ');
  
  // Ensure body ends with semicolon
  if (!body.endsWith(';')) {
    body += ';';
  }
  
  // Check if class has breakpoint modifier (@xs, @s, @m, @l, @xl)
  const breakpointMatch = name.match(/@(xs|s|m|l|xl)(!)?$/);
  let fullCss = body;
  let description = body.split(';')[0] || '';
  
  if (breakpointMatch) {
    const bp = breakpointMatch[1];
    const minWidth = breakpoints[bp];
    // Wrap in media query
    fullCss = `@media (min-width: ${minWidth}) { ${body} }`;
    description = `@media (min-width: ${minWidth}) { ${description} }`;
  }
  
  classes[name] = {
    css: fullCss,
    description: description
  };
}

fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
fs.writeFileSync(outJsonPath, JSON.stringify(classes, null, 2));
console.log(`Generated ${Object.keys(classes).length} classes to`, outJsonPath);

