const fs = require("fs")
const colorData = require("./assets/colors.json")

colorData.colorList.forEach(c => {
  //fs.appendFile will create a file if it doesnt exist
  // and append to id
  //it will just append it already existing files
  //appendFile takes file path, what you want to append, and then the callback
  fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
    if (err) {
      throw err;
    }
    
  })
})