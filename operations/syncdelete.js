// Identify and fix the runtime error in "operations/syncdelete.js"
// the data.txt does not exist?

//original:
// const fs = require("fs");
// fs.readFile("./operations/data.txt", (err, data) => {
//   if (err) console.log(err.message);
//   else console.log(data);
// });
// fs.unlinkSync("./operations/data.txt");		// delete the file

// new:
// the readFile will be off load to worker thread,
//so the main thread delets a file that does not exit
// the fix is to put everthing in the worker thread
const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {
  console.log(data);
  fs.unlinkSync("./operations/data.txt");		// delete the file
  }
});



