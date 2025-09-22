const readline = require('readline');

// Function to calculate grade
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

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("Enter your score (0-100): ", function(input) {
    let score = Number(input);

    // Validate score
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Please enter a valid number between 0 and 100.");
    } else {
        let grade = calculateGrade(score);
        console.log("Your grade is:", grade);
    }

    rl.close(); // close the program
}
);