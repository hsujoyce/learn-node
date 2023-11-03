// prints out:
// someAsyncOperation
// 100ms have passed since I was scheduled
// 

const fs = require('fs');

// file reading will finish before 100mm, node will check the poll phase which has the callback
// and then the timer prints
function someAsyncOperation(callback) {
  fs.readFile('./data/test.txt', callback);
}

const timeoutScheduled = Date.now();

// the timer will block 100mm here
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
// this is the "callback" parameter
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('someAsyncOperation');
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
