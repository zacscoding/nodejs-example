## __filename  
; the filename of the code being executed  

```
console.log('Test __filename\n', __filename);
// Test __filename
// C:\git\zaccoding\nodejs-example\tutorial\tutorialspoint\10.Global_Objects\main.js
```  

## __dirname  
; the name of the directory that the currently executing script resides in  

```
console.log('Test __dirname\n', __dirname);
// Test __dirname
// C:\git\zaccoding\nodejs-example\tutorial\tutorialspoint\10.Global_Objects  
```  

## setTimeout(cb, ms)  
; global function is used to run callback cb after at least ms milliseconds  

```
function printHello() {
    console.log('Hello World', new Date().getTime());
}
console.log('before print hello : ' + new Date().getTime());
setTimeout(printHello, 1000);
// before print hello : 1534583737830
// Hello World 1534583738832
```  

## clearTimeout(t)  
; global function is used to stop a timer that was previously created with setTimeout()  

```
function printHello() {
    console.log('Hello World', new Date().getTime());
}

var t = setTimeout(printHello, 2000);
clearTimeout(t);

// no output
```  

## setInterval(cb, ms)
; global function is used to run callback cb repeatedly after at least ms milliseconds  


```
function printHello() {
    console.log('Hello World', new Date().getTime());
}

setInterval(printHello, 2000);

// Hello World 1534583878739
// Hello World 1534583880740
// Hello World 1534583882741
// Hello World 1534583884743
// Hello World 1534583886759
// Hello World 1534583888760
```  

## Global Objects  

- Console  
; Used to print information on stdout and stderr  
- Process  
; Used to get information on current process. Provides multiple events related to process activities.


---  

https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm