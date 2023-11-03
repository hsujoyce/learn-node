//In "eventloop/timer.js", what will be the order of execution?
// foo, (add setTimeout to timer) ,baz, foo, baz, (event queue gets call) 2:bar, 1: bar

const bar = (x) => console.log(`${x} : bar`);
const baz = () => console.log('baz');

const foo = (a) => {
  console.log('foo');
  setTimeout(function() {
    bar(a);
  }, 0);
  baz();
}

foo(2);
foo(1);
