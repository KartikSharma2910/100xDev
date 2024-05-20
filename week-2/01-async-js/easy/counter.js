let count = 0;

function increaseCounter() {
  setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}

increaseCounter();
