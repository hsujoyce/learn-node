//Why does the script "eventloop/eventemit.js" not log the event message?
// the object is not created??

//Change it such that the event message gets logged.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.emit('event')
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});


///after the change
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => this.emit('event'));
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});