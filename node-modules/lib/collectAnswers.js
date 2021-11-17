const readline = require("readline")

//creates interface and sets input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



 //collectAnswers takes in an array of quesitons and will 
 // done f arrow f makes it optional
 
module.exports = (questions, done = f => f) => {
  //create answers array
  const answers = []
  //destructure firstQuestion from question
  const [firstQuestion] = questions

  //runs after first question is asked, taking given answer as arg
  const questionAnswered = answer => {
    //pushes answer to answers arr
    answers.push(answer)
    //if  length of answers arr is less than length of questions arr
    if (answers.length < questions.length) {
      //readline will ask the next question
      rl.question(questions[answers.length], questionAnswered);
    } else {
      //
      done(answers)
    }
  }

  rl.question(firstQuestion, questionAnswered)
}

