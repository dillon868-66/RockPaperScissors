console.log("Hello World!")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // generate number between 0 and 2
    return choices[randomNumber]; //  assigns the number and returns the pick
  }

function getHumanChoice() {
    const userInput = prompt("Enter rock paper or scissors:");
    return userInput.toLowerCase(); // I think we need this later to make good comparison
    
    
}
let humanScore = 0;
    let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    //check for a tie/scratch
    if (humanChoice === computerChoice){
        console.log("Scratch!");
        return;
    }
    //check if human wins
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        ){console.log(`You win! ${humanChoice} beats ${computerChoice} !`);
                humanScore++
            // this says if you win and increments humanscore by 1
        
        }
    else {
        // this only runs if the win condition was not satisfied
        console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
        
    

  }
  


  function playGame(){
   
 
    // make it run for 5 rounds
    for (let i = 0; i < 5; i++) {
    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log(`Round ${i+1}`);
    console.log(`human score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    
    }
  
  
  if (humanScore > computerScore) {
    console.log("you won!")
  }
  else if (computerScore > humanScore) {
    console.log("you lose")
  }}
  playGame()