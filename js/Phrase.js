class Phrase {
	constructor (newPhrase) {
	  this.phrase = newPhrase;
  }
  /*
    The method below, splits the phrase and turns it into an array of characters. Then it creates the necessary DOM elements that have to be rendered in the HTML.
  */
	addPhraseToDisplay () {
		let phraseChars = this.phrase.split('');
		let myList = document.querySelector('#phrase ul');

		for (let i = 0; i < phraseChars.length; i++) {
			if (phraseChars[i] === ' ') {
				myList.innerHTML += `<li class="hide space"></li>`;
			} else {
				myList.innerHTML += `<li class="hide letter ${phraseChars[i]}">${phraseChars[i]}</li>`;
			}
		}
	}
	// The method below returns a boolean, depending on whether the letter selected by player matches a letter in the phrase.
	checkLetter (letter) {
		return this.phrase.includes(letter);
	}
	// The method below, reveals the letter(s) on the board that matches player's selection.
	showMatchedLetter(letter) {
		let elements = document.querySelectorAll(`.${letter}`);
		elements.forEach(element => element.className = `show letter ${letter}`);
	}
}