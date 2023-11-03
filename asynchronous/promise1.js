//promise run before event loop
// promise gets resolved and then event loop

const fs = require('fs');

//io operation
fs.readFile('./data/test.txt', (err, data) => {
 if (err) console.log('Read Error');
 else console.log('Data: ' + data);
});

// promise
function getName(i) {
  let names = ['Jane', 'Jonny', 'Kim', 'Bali'];
  return new Promise((resolve, reject) => {
    if (i < 0 || i >= names.length) {
      reject('Bad index rejected');
      console.log('found bad index');
      return;
    }
    resolve(names[i]);
    console.log('do more stuff');
  });
}

function main() {
  getName(2)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    console.log('in main');
}

main();
console.log('processing ... ');
