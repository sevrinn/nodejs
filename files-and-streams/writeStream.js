//require fs
const fs = require("fs")

//creates writeStream to myFile.txt
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8")

// //uses write stream to write the data i type into myFile.txt
// process.stdin.on("data", data => {
//   writeStream.write(data)
// })

// //pipes what is typed in the terminal to the writeStream on myFile.txt
// process.stdin.pipe(writeStream)

//creates readStream of lorum-ipsum.md file
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8")

// //uses readStream to write the data to myFile.txt
// readStream.on("data", data => {
//   writeStream.write(data)
// })

//pipes readStream of lorum-ipsum.md to writeStream on myFile.txt
readStream.pipe(writeStream)



