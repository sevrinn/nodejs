const readline = require("readline")

//creates interface and sets input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//creates a list of questions
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with node js?"
];

 //collectAnswers takes in an array of quesitons and will 
 
const collectAnswers = (questions, done) => {
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

collectAnswers(questions, answers => {
  console.log("Thank you for your answers")
  console.log(answers)
  process.exit()
})