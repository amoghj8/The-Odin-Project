const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    computerChoice = options[Math.floor(Math.random()*options.length)];
    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection==playerSelection)
        return "Draw";
    switch (playerSelection) {
        case "rock":
            if(computerSelection=='paper') {
                return "You loose, take a 'L' ";
            }
            else {
                return "You got lucky, W"
            }
            break;
        
        case "paper":
            if(computerSelection=='scissors') {
                return "You loose, take a 'L' ";
            }
            else {
                return "You got lucky, W"
            }
            break;
        
        case "scissors":
            if(computerSelection=='rock') {
                return "You loose, take a 'L' ";
            }
            else {
                return "You got lucky, W"
            }
            break;
        
        default: return "You had to choose rock/paper/scissors"
            break;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));