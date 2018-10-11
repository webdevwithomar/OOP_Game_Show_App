class Game {
	constructor (missed, thePhrases) {
		this.missed = missed;
		this.phrases = [];
		thePhrases.forEach(phrase => this.phrases.push(new Phrase(phrase)));
	}

	// The function below randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase () {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}
	// The function below checks to see if the button clicked by the player matches a letter in the phrase.
	handleInteraction (letter,phrase) {
		if (phrase.checkLetter(letter)) {
			phrase.showMatchedLetter(letter);
			this.gameOver();
		} else {
			this.removeLife();
		}
	}
	// The function below removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
	removeLife () {
		if (this.missed===4) {
			this.missed++;
			this.gameOver();
		} else if (this.missed===5) {

		} else {
			this.missed += 1;
			let tries = document.querySelectorAll('.tries');
			for(let i = 0; i < tries.length; i++){
				if (tries[i].style.display === 'none') {
				
				} else {
					tries[i].style.display='none'
					break;
				}
			}
		}
	}
	// The function below, checks to see if the player has selected all of the letters.
	checkForWin () {
		if (this.missed === 5) {
			return false;
		} else {
			let remaining = document.querySelectorAll('.hide.letter');
			if (remaining.length === 0) {
				return true;
			} else {
				return false;
			}
		}
	}
	// The method below, displays a message if the player wins or a different message if they lose.
	gameOver () {
		if (this.checkForWin()) {
			document.querySelector('#game-over-message').innerText='You win !';
			document.querySelector('#overlay').class = 'win';
			document.querySelector('#overlay').style.display = '';
		} else if (this.missed === 5) {
			document.querySelector('#game-over-message').innerText='Sorry, try again next time !';
			document.querySelector('#overlay').class = 'lose'
			document.querySelector('#overlay').style.display = '';
		}
	}
// The function below, calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
	startGame () {
		let thePhrase = this.getRandomPhrase();
		this.thePhrase = thePhrase;
		thePhrase.addPhraseToDisplay();
	}
}