const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/\.\.\/assets\//g, 'assets/');
html = html.replace(/\.\.\//g, '');
fs.writeFileSync('index-fixed.html', html);
console.log('index-fixed.html created');