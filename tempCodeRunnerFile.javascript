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

// ---------------- Menu System ----------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Choose a program:");
console.log("1. Grade Calculator");
console.log("2. Prime Checker (+10)");
console.log("3. Star Pattern (+2)");
console.log("4. Multiplication Table");

rl.question("Enter your choice (1-4): ", (choice) => {
  switch (choice) {
    case "1": // Grade Calculator
      rl.question("Enter your score (0-100): ", (input) => {
        let score = Number(input);
        if (isNaN(score) || score < 0 || score > 100) {
          console.log("Please enter a valid number between 0 and 100.");
        } else {
          let grade = calculateGrade(score);
          console.log("Your grade is:", grade);
        }
        rl.close();
      });
      break;

    case "2": // Prime Checker
      rl.question("Enter a number: ", (answer) => {
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
      break;

    case "3": // Star Pattern
      rl.question("Enter your base number: ", (answer) => {
        let number = parseInt(answer);
        if (!isNaN(number)) {
          number = number + 2; // add 2
          console.log(`\nUsing base number: ${number}`);
          showStar(number);
        } else {
          console.log("Please enter a valid number.");
        }
        rl.close();
      });
      break;

    case "4": // Multiplication Table
      rl.question("Enter your base number: ", (answer) => {
        const num = parseInt(answer);
        if (!isNaN(num)) {
          multiplicationTable(num);
        } else {
          console.log("Please enter a valid number.");
        }
        rl.close();
      });
      break;

    default:
      console.log("Invalid choice. Please run the program again.");
      rl.close();
  }
});
