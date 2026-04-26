const fs = require('fs');

// Read original file
let html = fs.readFileSync('index.html', 'utf8');

// Replace ALL ../assets/ → assets/
html = html.replace(/\.\.\/assets\//g, 'assets/');

// Replace any remaining ../ (safety cleanup)
html = html.replace(/\.\.\//g, '');

// Save new file
fs.writeFileSync('index-fixed.html', html);

console.log('✅ index-fixed.html created');