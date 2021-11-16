/**
 * Timing functions setTimeOut clearTimeOut setInterval and clearInterval
 * work like they do in the browser and are available globally. here we
 * have written a program that will log done to the console after a 3 second delay
 * 
 * improved upon this using setInterval and clearInterval 
 * to show how long we've been waiting every 500 milliseconds (1/2 second)
 */

//declare waitTime to be 3 seconds
const waitTime = 3000
const waitInterval = 500
let currentTime = 0

// adds waitInterval to currentTime and logs out how long we've been waiting
const incrementTime = () => {
  currentTime += waitInterval
  console.log(`waiting ${currentTime / 1000} seconds`)
}
//logs that we're setting a 3 second delay
console.log(`setting a ${waitTime / 1000} second delay`)

// clears interval from running and logs done to the console
const timerFinished = () => {
  clearInterval(interval)
  console.log('done')
}

//declare var as setInterval which takes function you want to run 
//as the first arg and how often you want to run it as the second arg
const interval = setInterval(incrementTime, waitInterval)

//setTimeout takes the function you want to run as the first argument
// and it takes the amount of time to wait before running it as the second
setTimeout(timerFinished, waitTime)