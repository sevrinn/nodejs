//directory creation

const fs = require("fs")

//to check if a dir already exists
if (fs.existsSync("storage-files")) {
  console.log("Already exists")
} else {
  //fs.mkdir takes desired name of dir as 1st arg and the callback and the second
  //only has err since there is no data to pass back
  fs.mkdir("storage-files", err => {
    if (err) {
      console.log("err with creating directory")
      throw err
    }
    console.log("Directory created successfully!")
  })
}
