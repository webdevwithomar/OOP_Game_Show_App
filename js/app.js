// Array of Phrases
let thePhrases = ['love is blind','silver bullet','kith and kin','picture perfect','fall guy'];

// Declaring startNewGame variable
let startNewGame;

// Hides the overlay
const resetDisplay = () => {
	document.querySelector('#overlay').style.display = 'none';
}

/*
The Event Listener below :-

1- Calls resetDisplay() to hide the overlay and display the game.

2- The conditional checks to see if there's a previous
game. If there is, then it removes the word blanks for the previous phrase and enables all of the previously selected letters
and removes the chosen class from any selected letters.
*/

const resetBtn = document.querySelector('#btn__reset');

resetBtn.addEventListener('click', () => {
	resetDisplay();
	let previousGame = document.querySelectorAll('ul li');
	if(previousGame.length > 0) {
		previousGame.forEach(letter => letter.remove());
		let keys = document.querySelectorAll('.key');
		keys.forEach(key => {
			key.disabled = false;
			key.classList.remove('chosen');
		})
		let hearts = document.querySelectorAll('.tries');
		hearts.forEach(heart => heart.style.display = '');
	}
	startNewGame = new Game(0, thePhrases);
	startNewGame.startGame();
});

/*
The function below disables the passed letter and gives it the chosen class. Then it calls the handleInteraction.
*/
const markButton=(letter)=>{
	let buttons=document.querySelectorAll('.key');
	for(let i=0;i<buttons.length;i++){
		if(buttons[i].textContent===letter){
			buttons[i].disabled=true;
			buttons[i].className+=' chosen'
		}
	}
	startNewGame.handleInteraction(letter, startNewGame.thePhrase);
}

let keys=document.querySelectorAll('.key')
keys.forEach(key=>{
	key.addEventListener('click', (event) => {
		markButton(event.target.textContent);
	})
})

// Event listener for keyboard
window.addEventListener('keypress', (event) => {
	let keyCode = event.code;
	if (keyCode.includes('Key')) {
		markButton(event.key);
	}
})