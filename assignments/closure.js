// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Simple
let name = 'Roland Deschain'
function character() {
  console.log(`${name}: Character from Stephen King Novel`)
}
character()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0
const counter = () => {
  count++
  console.log(count)
}
// Example usage:
const newCounter = counter
newCounter() // 1
newCounter() // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0
  let tally = {
    increment() {
      return count += 1 
    },
    decrement() {
      return count -= 1
    }
  }
  return tally
}

let keepTrack = counterFactory()
console.log('***** START OF KEEPING TALLY *****')
console.log(keepTrack.increment())
console.log(keepTrack.increment())
console.log(keepTrack.increment())
console.log(keepTrack.increment())
console.log('***** LETS DECREMENT NOW *****')
console.log(keepTrack.decrement())
console.log(keepTrack.decrement())
console.log(keepTrack.decrement())
console.log('***** END OF KEEPING TALLY *****')
