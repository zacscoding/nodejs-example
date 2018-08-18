## Blocking Code Example  

> input.txt  

```
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```  

> main.js  

```
var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('Program Ended...');

/*
The first example shows that the program blocks until it reads the file and  then only it proceeds to end the program.
*/
```  

> Run  

```
$ node blocking-main.js
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended...
```  

## Non-Blocking Code Example  

> input.txt  

```
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```  

> nonblocking-main.js  

```
var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
console.log('Program Ended...');  

/*
this example shows that the program does not wait for file reading and 
proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.
*/
```

> Run  

```
$ node nonblocking-main.js
Program Ended...
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```






---  

https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm