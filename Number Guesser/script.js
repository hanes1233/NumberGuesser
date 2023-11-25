let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(currentHumanGuess,computerGuess,secretTarget) {
    let user = Math.abs(secretTarget - currentHumanGuess);
    let pc = Math.abs(secretTarget - computerGuess);
    if(currentHumanGuess < 0 || currentHumanGuess > 9) {
        alert('Wrong number. Try again!');
    }
    if(user <= pc) {
        return true;
    }else {
        return false;
    }
}

function updateScore(winner) {
  switch(winner) {
    case 'human':
    humanScore++;
    break;
    case 'computer':
    computerScore++;
    break;
    default:
    return 'Something went wrong';
  }
}
function advanceRound() {
    currentRoundNumber++;
}
