//write and append files

const fs = require("fs")

const md = `
  # This is a new file

  I can write text to a file with fs.writeFile

  I've learned so far:
  * fs.readdir
  * fs.readFile
  * fs.writeFile
`
//writeFile takes 3 args
//1. where you want the file to go (file path)
//2. the file itself 
//3. the callback that only takes an error because theres no data to pass to it
fs.writeFile("./assets/notes.md", md.trim(), err => {
  if (err) {
    console.log("There was an error writing this file")
    throw err;
  }
  console.log("Saved successfully!")
})