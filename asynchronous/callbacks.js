let k = [];
function someAsyncOperation() {
  setTimeout(function() {
    k = k.concat([1,2,3]);
  }, 0);
};
someAsyncOperation();
let sum = 0
k.forEach((item, i) => {
  sum = sum + item;
});
console.log(sum);


/// change below:
let k = [];
function someAsyncOperation() {
  setTimeout(function() {
    k = k.concat([1,2,3]);

    let sum = 0
    k.forEach((item, i) => {
      sum = sum + item;
    });
    console.log(sum);
  }, 0);
};
someAsyncOperation();

