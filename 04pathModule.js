const path = require('path');


console.log(path.sep);

const filepath =path.join('/javaschit1','text.txt');
console.log(filepath);

const base =path.basename(filepath);
console.log(base);

const abs=path.resolve(__dirname,'javaschit1','text.txt');
console.log(abs);