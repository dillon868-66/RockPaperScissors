console.log("Hello World!")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // generate number between 0 and 2
    return choices[randomNumber]; //  assigns the number and returns the pick
  }