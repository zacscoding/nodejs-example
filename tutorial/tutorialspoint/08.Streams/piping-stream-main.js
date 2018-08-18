var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('pipe-output.txt');

// read input.txt and write data to pipe-output.txt
readerStream.pipe(writerStream);

console.log('Program Ended');