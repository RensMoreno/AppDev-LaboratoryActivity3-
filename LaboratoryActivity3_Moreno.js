// Combined Program: Grade Calculator, Prime Checker, Star Pattern, Multiplication Table

const readline = require('readline');

// ---------------- Functions ----------------

// Grade Calculator
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Prime Checker (+10)
function isPrime(number) {
  if (number < 2) return false;
  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

// Star Pattern (+2)
function showStar(number) {
  for (let i = 1; i <= number; i++) {
    console.log('*'.repeat(i));
  }
}

// Multiplication Table
function multiplicationTable(n) {
  console.log(`Multiplication Table of ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// ---------------- Main Program ----------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your base number: ", (answer) => {
  let base = parseInt(answer);

  if (!isNaN(base)) {
    console.log("\n--- Grade Calculator ---");
    let score = (base * 10) + 5;  // new formula
    console.log(`Computed score = (${base} * 10) + 5 = ${score}`);
    if (score >= 0 && score <= 100) {
      console.log(`Grade: ${calculateGrade(score)}`);
    } else {
      console.log("Score is out of grade range (0–100).");
    }

    console.log("\n--- Prime Checker (+10) ---");
    let primeCheck = base + 10;
    console.log(`Checking ${primeCheck} (base + 10)...`);
    console.log(isPrime(primeCheck) ? `${primeCheck} is Prime` : `${primeCheck} is NOT Prime`);

    console.log("\n--- Star Pattern (+2) ---");
    let stars = base + 2;
    console.log(`Using base + 2 = ${stars}`);
    showStar(stars);

    console.log("\n--- Multiplication Table ---");
    multiplicationTable(base);
  } else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});
