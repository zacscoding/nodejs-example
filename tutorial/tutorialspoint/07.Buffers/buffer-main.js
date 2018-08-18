console.log('------------------------------------------------------');
console.log('write buffer test\n\n');

var buf = new Buffer(256);
var len = buf.write('Simply Easy Learning');

console.log('Octets written : ' + len); //Octets written : 20
console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Read buffer test\n\n');

var readBuffer = new Buffer(26);
for (var i = 0; i < 26; i++) {
    readBuffer[i] = i + 97;
}

console.log(readBuffer.toString('ascii'));          // abcdefghijklmnopqrstuvwxyz
console.log(readBuffer.toString('ascii', 0, 5));    // abcde
console.log(readBuffer.toString('utf8', 0, 5));     // abcde
console.log(readBuffer.toString(undefined, 0, 5));  // abcde
console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Convert json test\n\n');

var jsonBuffer = new Buffer('Simply Easy Learning');
var json = jsonBuffer.toJSON(jsonBuffer);

console.log(json);

console.log('------------------------------------------------------\n\n');


console.log('------------------------------------------------------');
console.log('Concatenate buffers test\n\n');

var concatBuffer1 = new Buffer('TutorialsPoint ');
var concatBuffer2 = new Buffer('Simply Easy Learning');
var concatBuffer = Buffer.concat([concatBuffer1, concatBuffer2]);

console.log(concatBuffer.toString()); //TutorialsPoint Simply Easy Learning

console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Compare buffers test\n\n');

var buffer1 = new Buffer('ABC');

var buffer2 = new Buffer('ABC');
var buffer3 = new Buffer('ABD');
var buffer4 = new Buffer('ABB');

console.log(buffer1.compare(buffer2));  // 0
console.log(buffer1.compare(buffer3));  // -1
console.log(buffer1.compare(buffer4));  // 1

console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Copy buffers test\n\n');

var sourceBuffer = new Buffer('ABCD');

var targetBuffer = new Buffer(3);
sourceBuffer.copy(targetBuffer);

console.log('copy : ', targetBuffer.toString());    // copy :  ABC

console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Slice buffers test\n\n');

var sliceBuffer = new Buffer('TutorialsPoint');

var slicedBuffer = sliceBuffer.slice(0, 3);
console.log('Slice : ', slicedBuffer.toString()); // Slice :  Tut

console.log('------------------------------------------------------\n\n');

console.log('------------------------------------------------------');
console.log('Buffer length test\n\n');

var lengthBuffer = new Buffer('zaccoding');

console.log('buff len : ', lengthBuffer.length); // buff len :  9

console.log('------------------------------------------------------\n\n');