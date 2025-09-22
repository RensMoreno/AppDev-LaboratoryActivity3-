const readline = require('readline');

function multiplicationTable(n) {
  console.log(`Multiplication Table of ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your base number: ", (answer) => {
  const limit = parseInt(answer);
  if (!isNaN(limit)) {
    multiplicationTable(limit);
  } else {
    console.log("Please enter a valid number.");
  }
  rl.close();
});