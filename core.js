const path = require('path')
//if we wanted to create a path to the uploads directory we can join __dirname, 
//which gets us to our current directory, and then reference the three files within
const dirUploads = path.join(__dirname, "www", "files", "uploads")

//logs the full path to the uploads "/Users/sarawelker/Documents/Tutorials/nodejs/www/files/uploads"
console.log(dirUploads)