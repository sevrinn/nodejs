//NODE globals
//Global object contains all the objects, methods, and values that we can 
//use on a js file without having to import any functionality

const path = require("path")

//prints full path to directory name of current module
console.log(__dirname)

//logs full path to directory of current module including current module
console.log(__filename)

//plucks the file name from the end and logs
// 'The file name is global.js'
console.log(`The file name is ${path.basename(__filename)}`)