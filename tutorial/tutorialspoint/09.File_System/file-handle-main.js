var fs = require('fs');


function writeTest() {
    console.log('---------------------------------------------');
    console.log('Write file test..\n');
    fs.writeFile('write-test.txt', 'Simply Easy Learning', function (err) {
        if (err) {
            return console.error(err);
        }

        console.log('Data written successfully');
        fs.readFile('write-test.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }

            console.log('Read after writing : ', data.toString());
            console.log('\n---------------------------------------------');
        });
    });
}

function readTest() {
    console.log('---------------------------------------------');
    console.log('Read file test..\n');
    fs.open('input.txt', 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
            console.log('\n---------------------------------------------');
        }

        var buf = new Buffer(1024);

        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                return console.error(err);
                console.log('\n---------------------------------------------');
            }

            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
                console.log('\n---------------------------------------------');
            }
        });
    });
}

function closeTest() {
    console.log('---------------------------------------------');
    console.log('Close file test..\n');

    var buf = new Buffer(1024);
    var file = 'input.txt';
    console.log('Going to open an ', file);

    fs.open(file, 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }

        console.log('File opened successfully');
        console.log('Going to read ', file);

        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                return console.error(err);
            }

            if (bytes > 0) {
                console.log(buf.slice(0, bytes.length).toString());
            }

            fs.close(fd, function (err) {
                if (err) {
                    return console.error(err);
                }

                console.log('File closed successfully');
                console.log('\n---------------------------------------------');
            });
        });

    });
}

function truncateTest() {
    console.log('---------------------------------------------');
    console.log('Truncate file test..\n');

    var buf = new Buffer(1024);
    console.log('Going to open an existing file');

    fs.open('input.txt', 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }

        console.log('File opened successfully');
        console.log('Going to truncate the file after 10 bytes');

        // Truncate the opened file
        fs.truncate(fd, 10, function (err) {
            if (err) {
                return console.error(err);
            }

            console.log('File truncate successfully');
            console.log('Going to read the same file.');

            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                if (err) {
                    console.log(err);
                }

                // Print only read bytes to avoid junk.
                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }

                // Close the opened file.
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("File closed successfully.");
                    console.log('\n---------------------------------------------');
                });
            });
        });
    });
}

function deleteFileTest() {
    console.log('---------------------------------------------');
    console.log('Delete file test..\n');

    console.log("Going to delete an existing file");
    fs.unlink('input.txt', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("File deleted successfully!");
        console.log('\n---------------------------------------------');
    });
}

function createDirTest() {
    console.log('---------------------------------------------');
    console.log('Create directory test..\n');

    console.log('Going to create a directory : ', 'temp-dir');
    fs.mkdir('temp-dir', function (err) {
        if (err) {
            return console.error(err);
        }

        console.log('Success to create a dir.');
        console.log('\n---------------------------------------------');
    });
}

function readDirTest() {
    console.log('---------------------------------------------');
    console.log('Read directory test..\n');

    console.log('Going to read a directory : ', 'temp-dir');
    fs.readdir('temp-dir', function (err, files) {
        if (err) {
            return console.error(err);
        }

        console.log('Success to read a dir.');
        console.log('Going to read file in temp-dir');

        if (files.length > 0) {
            files.forEach(function (file) {
                console.log(file);
            });
        } else {
            console.log('empty file');
        }

        console.log('\n---------------------------------------------');
    });
}

function removeDirTest() {
    console.log('---------------------------------------------');
    console.log('Remove directory test..\n');

    console.log('Going to remove a directory : ', 'temp-dir');
    fs.rmdir('temp-dir', function (err) {
        if (err) {
            return console.error(err);
        }

        console.log('Success to remove dir');
        console.log('Going to read directory temp-dir');
        
        fs.readdir('temp-dir', function (err, files) {
            if (err) {                
                return console.error(err);
            }
        });
    });    
}


// writeTest();
// readTest();
// closeTest();
// truncateTest();
// deleteFileTest();
// createDirTest();
// readDirTest();
removeDirTest();





