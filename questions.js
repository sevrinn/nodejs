/**
 * standard input/output allows us to communicate with process while its
 * running
 * process.stdin
 * process.stdout is a writable stream that implements a write program that
 * we can use to send info out of the program. console.log does the same thing
 * but with process.stdout we have more control over our string
 */

//declare questions array
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
]

//declare answers array
const answers = []

//ask function takes a parameter and if no argument is given
//it will start at the first index of the array
const ask = (i=0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`)
  process.stdout.write(` > `)
}

ask()

//when you enter your answer to the question and hit enter

process.stdin.on('data', data => {
  //your answer is pushed to the answers array
  answers.push(data.toString().trim())

  // if length of answers arr is less than length of questions arr
  if (answers.length < questions.length) {
    //ask the next question
    ask(answers.length)
  
  //and if that aint the case
  } else {
    //GTFO
    process.exit()
  }
})