// the call back is continue to schedule the callback on nextTick,
// this means setTimeout will never execute
// blocking the event loop

const cb = () => {
    // do Something
    process.nextTick(cb);
};

setTimeout(() => console.log('setTimeout executed'), 5);

process.nextTick(cb);

console.log('Start');
