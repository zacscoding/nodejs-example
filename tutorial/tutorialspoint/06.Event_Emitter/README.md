## EventEmitter Class  

```
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```  

- faces any error ==> it emits an 'error' event  
- a new listener added ==> 'newListener' event is fired  
- listener removed ==> 'removeListener' event is fired  

## Methods  
https://nodejs.org/api/events.html#events_class_eventemitter  
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

> Example(event-emitter-main.js)  

```
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1() {
    console.log('listener1 executed');
};

// listener #2
var listener2 = function listener1() {
    console.log('listener2 executed');
};

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function 
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
console.log('>> Fire')
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log('>> Listener1 will not listen now');

// Fire the connection event
console.log('>> Fire')
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log('Program Ended.');
```  

> Result  

```
2 Listner(s) listening to connection event
>> Fire
listener1 executed
listener2 executed
>> Listener1 will not listen now
>> Fire
listener2 executed
1 Listner(s) listening to connection event
Program Ended.
```





---  
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm