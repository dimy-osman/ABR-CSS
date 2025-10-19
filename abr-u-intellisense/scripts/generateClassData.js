const fs = require('fs');
const path = require('path');

const inputCssPath = path.resolve(__dirname, '../../ABR-U/ABR-U.css');
const outJsonPath = path.resolve(__dirname, '../src/data/classes.json');

const css = fs.readFileSync(inputCssPath, 'utf8');
const classRegex = /\.([a-z0-9_\-@\\%!]+)\s*\{([^}]+)\}/gi;

const classes = {};
let match;
while ((match = classRegex.exec(css)) !== null) {
  const rawName = match[1];
  // remove escapes like \! or \@
  const name = rawName.replace(/\\/g, '');
  const body = match[2].trim().replace(/\s+/g, ' ');
  const firstDecl = body.split(';')[0] || '';
  classes[name] = {
    css: body.endsWith(';') ? body : body + ';',
    description: firstDecl.replace(/;$/, '')
  };
}

fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
fs.writeFileSync(outJsonPath, JSON.stringify(classes, null, 2));
console.log(`Generated ${Object.keys(classes).length} classes to`, outJsonPath);

