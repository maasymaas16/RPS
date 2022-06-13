function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt('Please enter your selection: ')
    computerSelection = computerPlay();
    playerInput = playerSelection.toLowerCase();
    
    if (playerInput === computerSelection) {
        console.log('You tied!')
        return;
    } else if (playerInput === 'rock'){
            if (computerSelection === 'paper'){
                console.log('You Lose! Paper beats Rock')
                return ('Computer')
            } else {
                console.log('You Win! Rock beats Scissors')
                return ('Player')
            }
    } else if (playerInput === 'paper'){
        if (computerSelection === 'scissors'){
            console.log('You Lose! Scissors beats paper')
            return ('Computer')
        } else {
            console.log('You Win! Paper beats Rock')
            return ('Player')
        }
    } else if (playerInput === 'scissors'){
        if (computerSelection === 'rock'){
            console.log('You Lose! Rock beats Scissors')
            return ('Computer')
        } else {
            console.log('You Win! Scissors beats Paper')
            return ('Player')
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++){
        let winner = playRound();
        if(winner === 'Computer'){
            computerScore++;
        } else if (winner === 'Player'){
            playerScore++;
        }
    }

    if (computerScore > playerScore){
        return ('Game over: you lose, ' + computerScore + ' to ' + playerScore)
    } else if (playerScore > computerScore){
        return ('Game over: you win, ' + playerScore + ' to ' + computerScore)
    } else {
        return('Game over: you tied!')
    }
}

console.log(game());