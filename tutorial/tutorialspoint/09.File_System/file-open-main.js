var fs = require('fs');

function openFile(path, flags) {
    fs.open(path, flags, function (err, fd) {
        console.log('GOing to open file : ', path);
        if (err) {
            return console.error(err);
        }
        console.log('File opend successfully');
    });
}

openFile('input.txt', 'r+');
openFile('input2.txt', 'r+');