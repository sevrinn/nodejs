//rename, move and remove files
const fs = require("fs")

//renames colors.json file to colorData.json
  //renameSync takes 2 args
  //1 path to file to rename
  //2 path to file with new name
fs.renameSync("./assets/colors.json", "./assets/colorData.json")

//moves notes.md from assets dir to storage-files dir
  //rename can also be used to move files, here asynchronously rename takes 3 args
  //1 path to file to move
  //2 path where we want to move the file 
  //2 callback
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
  if (err) {
    console.log("error moving file")
    throw err
  }
})

//waits 4 seconds and then deletes alex.jpg
setTimeout(() => {
  fs.unlinkSync("./assets/alex.jpg")
}, 4000)