/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
  // Get the start time
  const startTime = new Date().getTime();

  // Calculate the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Get the end time
  const endTime = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeTaken = endTime - startTime;

  // Convert milliseconds to seconds
  const timeInSeconds = timeTaken / 1000;

  return {
    sum: sum, // Returning the sum just to verify correctness
    time: timeInSeconds,
  };
}

// Test the function with different values of n
console.log("Sum from 1 to 100:", calculateSumTime(100));
console.log("Sum from 1 to 100000:", calculateSumTime(100000));
console.log("Sum from 1 to 1000000000:", calculateSumTime(1000000000));
