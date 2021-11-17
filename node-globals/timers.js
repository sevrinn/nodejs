//declare waitTime to be 3 seconds
const waitTime = 5000
const waitInterval = 500
let currentTime = 0

// adds waitInterval to currentTime, calculates percentage, clears terminal line, sets cursor to 0
// and overwrites the message with the new percentage
const incrementTime = () => {
  currentTime += waitInterval
  const percentage = Math.floor((currentTime/waitTime) * 100)
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`waiting...${percentage}%`)
}
//logs that we're setting a 3 second delay
console.log(`setting a ${waitTime / 1000} second delay`)

// stops interval from running, clears current terminal line, moves cursor back to zero
// and overwrites percentages with 'done'
const timerFinished = () => {
  clearInterval(interval)
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log('done')
}

//declare var as setInterval which takes function you want to run 
//as the first arg and how often you want to run it as the second arg
const interval = setInterval(incrementTime, waitInterval)

//setTimeout takes the function you want to run as the first argument
// and it takes the amount of time to wait before running it as the second
setTimeout(timerFinished, waitTime)

/**
 * Timing functions setTimeOut clearTimeOut setInterval and clearInterval
 * work like they do in the browser and are available globally. here we
 * have written a program that will log done to the console after a 5 second delay
 * 
 * 
 * we have the const Interval on line 27 calls the incrementTime func on line 7 every 
 * waitInterval (500ms). And everytime that is run we add waitTime to currentTime, set a
 * the percentage using the currentTime vs the waitTime which is the percentage. 
 * using process standard output, we clear the line, move cursor back to zero and then
 * overwrite the last percentage with new value.
 * after the waitTime is complete, the timerFinished func runs online 18, which stops the interval 
 * from running, process.stdout clears the line and moves the cursor back to zero, logging 'done' in
 * place of the percentage!
 * 
 */