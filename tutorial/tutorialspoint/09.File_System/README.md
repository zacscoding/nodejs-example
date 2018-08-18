## Synchronous vs Asynchronous

> example : sync-async-main.js 

```
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read\n" + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read\n" + data.toString());

console.log("Program Ended");
```  

> output  

```
Synchronous read
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
Asynchronous read
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```

---  

## Open a File  

> fs.open(path, flags[, mode], callback)  

- path : file name including path  
- flags : the behavior of the file to be opened  
r, r+, rs, rs+ .. 
see : https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
- mode : file mode  
- callback (err,fd)  

```
var fs = require('fs');

console.log('Going to open file');
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('File opend successfully');
});
```  

```
Going to open file
File opend successfully
```

---  

## Get File Information  

> fs.stat(path, callback)  

- path : file name including path  
- callback : gets two args (err, stats)  

- stats.isFile()
- stats.isDirectory()
- stats.isBlockDevice()
- stats.isCharacterDevice()
- stats.isSymbolicLink()
- stats.isFIFO()
- stats.isSocket()  

> Example : file-info-main.js  

```
var fs = require('fs');

console.log('Going to get file info!');

fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }

    console.log(stats);

    console.log('isFile : ', stats.isFile());
    console.log('isDirectory : ', stats.isDirectory());
});
```

> Result  

```
Going to get file info!
Stats {
  dev: 3204267832,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 4785074604999884,
  size: 95,
  blocks: undefined,
  atimeMs: 1534580024888.141,
  mtimeMs: 1534580028388.1604,
  ctimeMs: 1534580028388.1604,
  birthtimeMs: 1534580024888.141,
  atime: 2018-08-18T08:13:44.888Z,
  mtime: 2018-08-18T08:13:48.388Z,
  ctime: 2018-08-18T08:13:48.388Z,
  birthtime: 2018-08-18T08:13:44.888Z }
isFile :  true
isDirectory :  false
```

---  

## Writing a file  

> fs.writeFile(filename, data[, options], callback)  
file-handle-main.js :: writeTest();

- options : {encoding, mode, flag}. By default. encoding is utf8, mode is octal value 0666. and flag is 'w'  

## Reading a file  

> fs.read(fd, buffer, offset, length, position, callback)  
file-handle-main.js :: readTest();

- fd : the file descriptor returned by fs.open()
- buffer : the data will be written to
- offset : offset in the buffer to start writing at
- length : an integer specifying the number of bytes to read
- position : an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position 
- callback − gets the three arguments, (err, bytesRead, buffer)  

## Closing a file  

> fs.close(fd, callback)  
file-handle-main.js :: closeTest();


- fd : file descriptor returned by file fs.open() method
- callback : No arguments other than a possible exception are given to the completion callback  

## Truncate a file  

> fs.ftruncate(fd, len, callback)  
file-handle-main.js :: truncateTest();

- fd : file descriptor returned by fs.open()
- len : the length of the file after which the file will be truncated
- callback : No arguments other than a possible exception are given to the completion callback  

## Delete a file  

> fs.unlink(path, callback)  
file-handle-main.js :: deleteFileTest();

- path : the file name including path
- callback : No arguments other than a possible exception are given to the completion callback  

## Create a directory  

> fs.mkdir(path[, mode], callback)  
file-handle-main.js :: createDirTest();

- path : the directory name including path
- mode : the directory permission to be set. Defaults to 0777
- callback : No arguments other than a possible exception are given to the completion callback  

## Read a directory  

> fs.readdir(path, callback)  
file-handle-main.js :: readDirTest();  

- path : the directory name including path
- callback : gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'

## Remove a directory  

> fs.rmdir(path, callback)  
file-handle-main.js :: removeDirTest();  

- path : the directory name including path
- callback : No argume nts other than a possible exception are given to the completion callback  








