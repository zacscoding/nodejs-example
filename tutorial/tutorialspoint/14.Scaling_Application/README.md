## child_process  

- exec : runs a command in a shell/console and buffers the output
- spawn : launches a new process with a given command
- fork : a special case of the spawn() to create child processes  

## exec() method  
;child_process.exec method runs a command in a shell and buffers the output

> child_process.exec(command[, options], callback)  

- command : (String) The command to run, with space-separated arguments  
- options : (Object) may comprise one or more of the following options  
    - cwd : (String) Current working directory of the child process
    - env : (Object) Environment key-value pairs  
    - encoding : (String) (Default: 'utf8')  
    - shell : Shell to execute the command with (Default '/bash/sh', 'cmd.exe' ..)
    - timeout : (Number) (Default: 0)
    - maxBuffer : (Number) (Default: 200*1024)
    - killSignal : (String) (Default: 'SIGTERM')
    - uid : (Number) Sets the user identity of the process
    - gid : (Number) Sets the group identity of the process
- callback : gets three arguments error, stdout, and stderr which are called with the output when the process terminates


> exec-support.js  

```
console.log('Child Process' + process.argv[2] + ' executed');
```

> exec-master.js  

```
const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var command = 'node support.js ' + i;
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
```

> result  

```
Child process exited with exit code :  0
stdout :  Child Process1 executed

stderr :
Child process exited with exit code :  0
stdout :  Child Process0 executed

stderr :
Child process exited with exit code :  0
stdout :  Child Process2 executed

stderr :
```  

---  

## spawn() method  
;child_process.spawn method launches a new process with a given command. 

> child_process.spawn(command[, args][, options])  

- command : (String) The command to run
- args : (Array) List of string arguments
- options : (Object) may comprise one or more of the following options  
    - cwd : (String) Current working directory of the child process
    - env : (Object) Environment key-value pairs
    - stdio : (Array) String Child's stdio configuration
    - customFds : (Array) Deprecated File descriptors for the child to use for stdio
    - detached : (Boolean) The child will be a process group leader
    - uid : (Number) Sets the user identity of the process
    - gid : (Number) Sets the group identity of the process

> spawn-support.js  

```
console.log("Child Process " + process.argv[2] + " executed.");
```  

> spawn-master.js  

```
const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['spawn-support.js', i]);

    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });
}
```

> result  

```
stdout: Child Process 0 executed.

child process exited with code 0
stdout: Child Process 2 executed.

stdout: Child Process 1 executed.

child process exited with code 0
child process exited with code 0
```

---  

## fork() method  
; child_process.fork method is a special case of spawn() to create Node processes

> child_process.fork(modulePath[, args][, options])  

- modulePath : (String) The module to run in the child
- args : (Array) List of string arguments
- options (Object) may comprise one or more of the following options
    - cwd : (String) Current working directory of the child process
    - env : (Object) Environment key-value pairs
    - execPath : (String) Executable used to create the child process
    - execArgv : (Array) List of string arguments passed to the executable (Default: process.execArgv)    
    - silent : (Boolean) If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for spawn()'s stdio for more details (default is false)
    - uid : (Number) Sets the user identity of the process
    - gid : (Number) Sets the group identity of the process


> fork-support.js  

```
console.log('Child Process ', process.argv[2], ' Executed..');
```  

> fork-master.js  

```
const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork('fork-support.js', [i]);

    worker_process.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });
}
```

> result  

```
Child Process  0  Executed..
Child Process  1  Executed..
child process exited with code 0
child process exited with code 0
Child Process  2  Executed..
child process exited with code 0
```




---  

https://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm