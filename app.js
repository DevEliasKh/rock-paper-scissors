function playRound(playerSelction, computerSelction) {
	let choice = ['ROCK', 'PAPER', 'SCISSORS'];
	let computerSelection = getComputerChoice();

	function getComputerChoice() {
		let randomNum = Math.floor(Math.random() * 3);
		let computerChoice = choice[randomNum];
		return computerChoice;
	}
	// console.log(computerSelection);

	let playerSelection = prompt(
		'Choose between Rock, Paper and Secissors'
	).toLocaleUpperCase();
	// console.log(playerSelection);

	if (playerSelection === computerSelection) {
		console.log('Tie game');
	} else if (
		(computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
		(computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
		(computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
	) {
		console.log(
			`oh ${computerSelection} beats ${playerSelection} you lose this time!, try another round`
		);
	} else if (
		(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
		(playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
		(playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
	) {
		console.log(
			`YES ${playerSelection} beats ${computerSelection} you win this time!, try another round`
		);
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
	}
}
game();
