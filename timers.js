/**
 * Timing functions setTimeOut clearTimeOut setInterval and clearInterval
 * work like they do in the browser and are available globally. here we
 * have written a program that will log done to the console after a 3 second delay
 */

//declare waitTime to be 3 seconds
const waitTime = 3000;


console.log(`setting a ${waitTime / 1000} second delay`)

const timerFinished = () => console.log('done')
//setTimeout takes the function you want to run as the first argument
// and it takes the amount of time to wait before running it as the second
setTimeout(timerFinished, waitTime)