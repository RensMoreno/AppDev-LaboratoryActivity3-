const readline = require('readline');

function isPrime(number) {
  if (number < 2) return false; 
  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let num = parseInt(answer);

  if (!isNaN(num)) {
    num = num + 10; // add 10 to user input
    console.log(`\nWe will check ${num} (your input + 10).`);

    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is NOT a prime number.`);
    }
  } else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});
