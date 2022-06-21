let playerScore = 0;
let computerScore = 0;


function compWin() {
    computerScore++;
}

function playerWin(){
    playerScore++;
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.pscore').innerHTML = "Your Score: " + playerScore;
    document.querySelector('.cscore').innerHTML = "Computer Score: " + computerScore;
}

function isWinner (pScore, cScore) {
    if (pScore === 5 ){
        alert("You have won!")
        gameReset();
    } else if ( cScore === 5){
        alert("Oh no! The Machine has won...")
        gameReset()
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log('You tied!')
        return;
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
                console.log('You Lose! Paper beats Rock')
                compWin();
        } else {
                console.log('You Win! Rock beats Scissors')
                playerWin();

        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            console.log('You Lose! Scissors beats paper')
            compWin();
        } else {
            console.log('You Win! Paper beats Rock')
            playerWin();

        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            console.log('You Lose! Rock beats Scissors')
            compWin();
        } else {
            console.log('You Win! Scissors beats Paper')
            playerWin();

        }
    }
    document.querySelector('.cscore').innerHTML = "Computer Score: " + computerScore;
    document.querySelector('.pscore').innerHTML = "Your Score: " + playerScore;
    isWinner(playerScore, computerScore);
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
