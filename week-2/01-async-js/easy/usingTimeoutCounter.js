let count = 0;

function increaseCounter() {
  console.log(count);
  count++;

  // Schedule the next call to increaseCounter after 1000ms (1 second)
  setTimeout(increaseCounter, 1000);
}

increaseCounter();
