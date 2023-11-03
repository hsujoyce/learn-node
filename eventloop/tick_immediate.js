//Explain the order of execution 
//in terms of the messages logged.

//prints out:
// main = 0
// nextTick = 1
// Run Immediately = 1

// next tick runs before the event loop
// in the event loop, set immediate runs

let count = 0;
setImmediate(() => {
    console.log(`Run Immediately = ${count}`)
});

process.nextTick(() => {
    count++;
    console.log(`nextTick = ${count}`)
});
console.log(`main = ${count}`);