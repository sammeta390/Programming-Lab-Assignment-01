const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
