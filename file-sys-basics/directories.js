const fs = require("fs")

//RENAME DIR
//renames a file, takes 2 args
  //1 name of dir to change
  //2 new name 
fs.renameSync("./storage-files", "./storage")


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

//DELETE DIR
//waits 4 seconds, deletes temp
setTimeout(() => {
  fs.rmdir("./temp", err => {
    console.log("error deleting dir")
    throw err
  })
  console.log("Directory deleted successfully")
}, 4000)