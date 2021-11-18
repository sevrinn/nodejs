const fs = require("fs")
const path = require("path")

//RENAME DIR
//renames a file, takes 2 args
  //1 name of dir to change
  //2 new name 
fs.renameSync("./storage", "./storage-files")


//CREATE TEMP DIR
//check if a dir already exists
if (fs.existsSync("temp")) {
  console.log("Already exists")
} else {
  //fs.mkdir takes desired name of dir as 1st arg and the callback and the second
  //only has err since there is no data to pass back
  fs.mkdir("temp", err => {
    if (err) {
      console.log("err with creating directory")
      throw err
    }
    console.log("Directory created successfully!")
  })
}

//ADD FILES TO TEMP DIR
fs.writeFileSync(path.join(__dirname, "temp", "newfile1.js"), "//newfile1.js", "UTF-8")
fs.writeFileSync(path.join(__dirname, "temp", "newfile2.js"), "//newfile2.js", "UTF-8")

//DELETE TEMP DIR
//waits 4 seconds, deletes temp
setTimeout(() => {
  //returns array of every file name in dir
  //for each loops through each fileName, removing them 1 by 1 
  fs.readdirSync("./temp").forEach(fileName => {
    //removes file
    fs.unlinkSync(`./temp/${fileName}`)
  })
  //when all files are removed, we can remove the directory
  fs.rmdir("./temp", err => {
    if(err) {
      console.log("error deleting dir")
      throw err
    }
    console.log("Directory deleted successfully")
  })
  
}, 6000)