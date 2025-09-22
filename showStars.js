const readline = require('readline');

function showStar(number) {
    for (let i = 1; i <= number; i++) {
        console.log('*'.repeat(i));
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ask the user for an input number
rl.question('Enter your base number: ', (answer) => {
    let number = parseInt(answer);   // convert input to integer

    if (!isNaN(number)) {
        number = number + 2;         // add 2 to the given number
        console.log(`\nUsing base number: ${number}`);
        showStar(number);
    } else {
        console.log("Please enter a valid number.");
    }

    rl.close();
});