const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var command = 'node exec-support.js ' + i;
    var workerProcess = child_process.exec(command, function (error, stdout, stderr) {

        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }

        console.log('stdout : ', stdout);
        console.log('stderr : ', stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('Child process exited with exit code : ', code);
    });
}