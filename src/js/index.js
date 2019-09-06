//index.js
const testAddon = require('../../build/Release/nodejs_mmbl.node');
console.log('addon',testAddon);
console.log(testAddon.hello());
module.exports = testAddon;