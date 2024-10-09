//Number Guessing Game
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessnumber",
        type: "number",
        message: "Enter your guess number between 1 to 8:",
    }
]);
console.log(answer);
if (answer.guessnumber === randomnumber) {
    console.log("Congratulation you guess right number");
}
else {
    console.log("Sorry your guess number is wrong try again");
}
