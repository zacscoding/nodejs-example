console.log('Test __filename\n', __filename);
// Test __filename
// C:\git\zaccoding\nodejs-example\tutorial\tutorialspoint\10.Global_Objects\main.js

console.log('Test __dirname\n', __dirname);
// Test __dirname
// C:\git\zaccoding\nodejs-example\tutorial\tutorialspoint\10.Global_Objects

function printHello() {
    console.log('Hello World', new Date().getTime());
}
console.log('before print hello : ' + new Date().getTime());
setTimeout(printHello, 1000);
// before print hello : 1534583737830
// Hello World 1534583738832

var t = setTimeout(printHello, 2000);
clearTimeout(t);

setInterval(printHello, 2000);
// Hello World 1534583878739
// Hello World 1534583880740
// Hello World 1534583882741
// Hello World 1534583884743
// Hello World 1534583886759
// Hello World 1534583888760
