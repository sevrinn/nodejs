// // global process contains information about the process and lets
// // us interact with that process.

// // while it is available as global, explicitly requiring/importing
// // is reccommended

// //we can get the process id
// console.log(process.pid)

// //or we can grab the version of node thats running the process
// console.log(process.versions.node)

//we use a function to pass these arguments in because
// the user can pass in any arguments the code will still run
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1
  return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)