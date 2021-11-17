
const { POINT_CONVERSION_COMPRESSED } = require("constants")
const events = require("events")

//create instance of event emitter
const emitter = new events.EventEmitter()

//handles events
//first arg is the event
//secon arg is a callback
  //the call back takes in the message as the first arg and the user as the second
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`)
})

// //raises events
// //first arg is string name of event, you can name it what you like but it should make sense, duh. lol
// //next two args are the data we want to pass to the handler
// //second ar is the message
// //third arg is the user
// emitter.emit("customEvent", "Hello World", "Computer")
// emitter.emit("customEvent", "Thats pretty cool huh?", "Sev")

process.stdin.on("data", data => {
  const input = data.toString().trim()

  if(input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process")
    process.exit()
  }

  emitter.emit("customEvent", input, "terminal")
})

/**
 * Event emitter give us a way to raise and handle custom events.
 * It's asyncronous.
 */