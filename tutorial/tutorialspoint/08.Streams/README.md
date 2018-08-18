- Readable  
; Stream which is used for read operation.  
- Writable  
; Stream which is used for write operation.  
- Duplex  
; Stream which can be used for both read and write operation.
- Transform  
; A type of duplex stream where the output is computed based on input.  

=> Each type of Stream is an EventEmitter instance and throws several events  
at different instance of times  

- data  
; This event is fired when there is data is available to read. 
- end  
; This event is fired when there is no more data to read.  
- error  
; This event is fired when there is any error receiving or writing data.
- finish  
; This event is fired when all the data has been flushed to underlying system.


## Reading from a Stream  

```
var fs = require('fs');
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, error
readerStream.on('data', function (chunk) {
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('Program Ended');
```

```
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```  


## Write to a Stream  

```
var fs = require('fs');
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function () {
    console.log('Write complete.');
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('Program Ended');
```  

```
Program Ended
Write complete.
```

---  

## Piping the Streams  

```
var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('pipe-output.txt');

// read input.txt and write data to pipe-output.txt
readerStream.pipe(writerStream);

console.log('Program Ended');
```  

---  

## Chaining the Streams  

```
var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz  
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File compressed');
```  

```
var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");
```

