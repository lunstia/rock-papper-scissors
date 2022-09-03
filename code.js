"use strict";
const CHOICES = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;


function getComputerChoice() {
    return  CHOICES[Math.floor(Math.random(0,2) + .5)]
}

function playRound(choice) {
    let computerChoice = getComputerChoice();

    switch(true) {
        case choice === "rock" && computerChoice === "scissors":
        case choice === "paper" && computerChoice === "rock":
        case choice === "scissors" && computerChoice === "paper":
            console.log(`You chose: ${choice} | ${choice} beats ${computerChoice}`);
            return "player";

        case choice === "scissors" && computerChoice === "rock":
        case choice === "rock" && computerChoice === "paper":
        case choice === "paper" && computerChoice === "scissors":
            console.log(`You chose: ${choice} | ${choice} loses to ${computerChoice}`);
            return "computer";

        default:
            console.log(`You chose: ${choice} | The Computer also chose ${choice}`);
            return "tie";
    }
    
    
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', (e) => {
    playRound(button.id);
}))

function playGame() {
    let winner;
    for (let i = 0; i < 5; i++) {
        winner = playRound()

        if (winner === "player") {
            player++;
            console.log("You won!.");
        } else if (winner === "computer") {
            computer++;
            console.log("You lost.");
        } else {
            console.log("It is a draw, no winner!");
        }
    } 
}

