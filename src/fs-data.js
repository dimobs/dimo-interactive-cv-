const fs = require('fs');


const data = JSON.parse(fs.readFileSync('./data.json'));
console.log(data);
data.price++;

fs.writeFileSync('./data.json', JSON.stringify(data))