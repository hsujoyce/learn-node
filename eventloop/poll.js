//which phase of the event loop will
//contain callback functions? What will they be?
//main event loop has foo(), console.log('done')
//poll phase: someAsyncOperation()

// order: foo(), done, someAsyncOperation()

const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function(err, data) {
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

someAsyncOperation();
foo();
console.log('done');
