## Creating Buffers  

> an uninitiated Buffer of 10 octets  

```
var buf = new Buffer(10);
```  

> Buffer from a given array  

```
var buf = new Buffer([10,20,30,40,50]);
```  

> Buffer from a given string and optionally encoding type  

```
var buf = new Buffer('Simply Easy Learning', 'utf-8');
```  

---  

## Writing to buffers  

> buf.write(string[, offset][, length][, encoding])  
default :: offset(0), length(buf.length), encoding('utf8')


```
var buf = new Buffer(256);
var len = buf.write('Simply Easy Learning');

console.log('Octets written : ' + len);
```  

```
Octets written : 20
```  

---  

## Reading from buffers  

> buf.toString([encoding][, start][, end])  
default :: encoding('utf8'), start(0), end(complete buffer)  


```
var readBuffer = new Buffer(26);
for (var i = 0; i < 26; i++) {
    readBuffer[i] = i + 97;
}

console.log(readBuffer.toString('ascii'));          // abcdefghijklmnopqrstuvwxyz
console.log(readBuffer.toString('ascii', 0, 5));    // abcde
console.log(readBuffer.toString('utf8', 0, 5));     // abcde
console.log(readBuffer.toString(undefined, 0, 5));  // abcde
```  

---  

## Convert Buffer to JSON  

```
var jsonBuffer = new Buffer('Simply Easy Learning');
var json = jsonBuffer.toJSON(jsonBuffer);
```  

```

{ type: 'Buffer',
  data:
   [ 83,
     105,
     109,
     112,
     108,
     121,
     32,
     69,
     97,
     115,
     121,
     32,
     76,
     101,
     97,
     114,
     110,
     105,
     110,
     103 ] }
```  

---  

## Concatenate Buffers  

> Buffer.concat(list[, totalLength])  

```
var concatBuffer1 = new Buffer('TutorialsPoint ');
var concatBuffer2 = new Buffer('Simply Easy Learning');
var concatBuffer = Buffer.concat([concatBuffer1, concatBuffer2]);

console.log(concatBuffer.toString()); //TutorialsPoint Simply Easy Learning
```  

---  

## Compare Buffers  

> buf.compare(otherBuffer);

```
var buffer1 = new Buffer('ABC');

var buffer2 = new Buffer('ABC');
var buffer3 = new Buffer('ABD');
var buffer4 = new Buffer('ABB');

console.log(buffer1.compare(buffer2));  // 0
console.log(buffer1.compare(buffer3));  // -1
console.log(buffer1.compare(buffer4));  // 1
```  

---  

## Copy Buffer  

> buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])  

```
var sourceBuffer = new Buffer('ABCD');

var targetBuffer = new Buffer(3);
sourceBuffer.copy(targetBuffer);

console.log('copy : ', targetBuffer.toString());    // copy :  ABC
```  

---  

## Slice Buffer  

> buf.slice([start][, end])  

```
var sliceBuffer = new Buffer('TutorialsPoint');

var slicedBuffer = sliceBuffer.slice(0, 3);
console.log('Slice : ', slicedBuffer.toString()); // Slice :  Tut
```  

---  

## Buffer length  

```
var lengthBuffer = new Buffer('zaccoding');

console.log('buff len : ', lengthBuffer.length); // buff len :  9
```  

---  

## Class Methods  

- Buffer.isEncoding(encoding)  
- Buffer.isBuffer(obj)  
- Buffer.byteLength(string[, encoding])  
- Buffer.concat(list[, totalLength])  
- Buffer.compare(buf1, buf2)