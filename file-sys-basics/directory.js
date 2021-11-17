//directory creation

const fs = require("fs")

fs.mkdir("storage-files", err => {
  if (err) {
    console.log("err with creating directory")
    throw err
  }
  console.log("Directory created successfully!")
})