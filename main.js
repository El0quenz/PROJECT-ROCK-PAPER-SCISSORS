function computerPlay() {
	var symbols = [ 'Rock', 'Paper', 'Scissor' ];
	var randomizer = Math.floor(Math.random() * symbols.length);
	var randomSymbol = symbols[randomizer];

	return randomSymbol;
}

const playerSelection = 'Paper';
const computerSelection = computerPlay();

console.log('computer: ' + computerSelection);
console.log('player: ' + playerSelection);

console.log(playRound(playerSelection, computerSelection));
function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection) {
		return 'Draw';
	} else if (computerSelection == 'Rock' && playerSelection == 'Scissor') {
		return 'You Lose! Rock beats Scissor';
	} else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
		return 'You Lose! Paper beats Rock';
	} else if (computerSelection == 'Scissor' && playerSelection == 'Paper') {
		return 'You Lose! Scissor beats Paper';
	} else if (computerSelection == 'Rock' && playerSelection == 'Scissor') {
		return 'You Lose! Rock beats Scissor';
	} else {
		return 'You win! ' + playerSelection + ' beats ' + computerSelection;
	}
}
