const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("How do you like Node? ", answer => {
  console.log(`Your answer: ${answer}`)
  process.exit()
})

/**
 * readline can help us build an application to ask questions to a terminal user.
 * its an interface around readable and writeable streams, allowing us to easily
 * prompt user and collect their answers.
 * 
 * first we load readline function using the require module (which is available)
 * 
 * line 1: we create an interface called rl and we have to provide createInterface with
 * and object that tells it which stream to use for input/output
 * 
 * line 8: we can use the question func available to us on the interface. the first arg is the string
 * of the question, and the second arg is the callback function that takes the users answer in as its 
 * arg
 * 
 * line 9: consoles a string with your answer passed in as a template literal
 * line 10: exit out of the process
 */