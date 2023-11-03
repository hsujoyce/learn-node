// this prints out location of node, file path, and hello i am an argument
// const args = process.argv;
// if (args.length > 0) {
//     args.forEach((v, i) => console.log(`${v}`));
// }
// else {
//     console.log('Args not found');
// }


// now Modify "basics/foo.js" such that all arguments
//except the Node path and the script path are logged.

const args = process.argv;
if (args.length > 0) {
    args.forEach((v, i) => 
    { if (i > 1) 
        console.log(`${v}`)
});
}
else {
    console.log('Args not found');
}
