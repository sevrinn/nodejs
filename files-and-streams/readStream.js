const fs = require("fs")

//creates a readStream for lorum-ipsum.md
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8")

//creates fileText string
let fileText = ""

//reads out the data in chunks, logging their character amount to console
readStream.on("data", data => {
  console.log(`I read ${data.length -1} characters of text`)
  //adds data to the fileText string
  fileText += data;
})

//this will log the very first bit of content
readStream.once("data", data => {
  console.log(data)
})

//when it's finished reading the chunks, it logs that its finished
// and the string saying how many total characters there were
readStream.on("end", () => {
  console.log("Finished reading file")
  console.log(`In total I read ${fileText.length -1} characters of text`)
})

