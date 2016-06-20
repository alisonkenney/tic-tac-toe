window.onload = function() {
	
	var body = document.querySelector('body');
	var gameBoard = [];
	var turns = 0;
	var playerText = body.querySelector('.playerTurn');
	
	function makeGameBoard() {
		for (var i=0; i<9; i++) {
			var box = body.querySelectorAll('.box')[i];
			gameBoard.push(box);
		}
	}
	makeGameBoard();
	console.log(gameBoard);	

	//Run makeGameBoard function on page load
	//This will create an array of each <td> with class .box and run through them starting with [0]
	//This new box variable will push into the gameBoard to make the array

	function clickChecker() {
		for (var i=0; i<9; i++) {
			gameBoard[i].addEventListener('click', function() {
				var whichBox = this;
				playerMove(whichBox);
				console.log(whichBox);
			});
		}
	}

	//Run click checker function event listner for "clicking" a box
	//We need to create for loop and addEventLister to each individual box
	//Need to send through the 

	function resetChecker() {
		var resetButton = body.querySelector('.reset');
		resetButton.addEventListener("click", resetGame);
	}
	//Run reset checker function event listner for "reset" button
	//Set variable for initial_state of gameBoard outside of function so it can be accessed later

	function start() {
		clickChecker();
		resetChecker();
	}
	start();
	//run makeGameBoard(), clickChecker(); and resetChecker();
	

	function playerMove(whichBox) {
	var currentBox = whichBox;
	if (currentBox.innerHTML.length === 0) {	
		if (turns%2 === 0) {
			var X = document.createElement('p');
			X.setAttribute('id', 'theX');
			X.setAttribute('class', 'XorO');
			X.textContent = 'X';
			currentBox.appendChild(X);
			playerText.textContent = "Player 2: Your Turn!"; 
			playerText.setAttribute('class', 'player2')
		} else if (turns%2 !== 0) {
			var O = document.createElement('p');
			O.setAttribute('id', 'theO');
			O.setAttribute('class', 'XorO');
			O.textContent = 'O';
			currentBox.appendChild(O);
			playerText.textContent = "Player 1: Your Turn!";
			playerText.setAttribute('class', 'player1')
		}
		turns++;
		console.log(turns);
		}
	}

	//PlayerMove Function
	//Who's turn it is - if odd player1Turn, if even player2Turn

	//if Even
	//Alert player one that it is their turn upon page load
	//Player one must click a box (addEventLister for click, box#)
	//On "click" we need to create element 'X' to (.box)[i] that was clicked
	//We will need textContent for 'X' (create class) to appear
	//We will need to append child 'X' to box that was clicked
	//Remove eventListner from "clicked" box

	//if Odd
	//Alert player two that it is their turn upon page load
	//Player two must click a box (addEventLister for click, box#)
	//On "click" we need to create element 'O' to (.box)[i] that was clicked
	//We will need textContent for 'O' (create class) to appear
	//We will need to append child 'O' to box that was clicked
	//Remove eventListner from "clicked" box
	

	function resetGame() {
		for(var i = 0; i < 9; i++) {
			gameBoard[i].innerHTML = "";
		}

		playerText.textContent = "Player 1: Your Turn!";
		playerText.setAttribute('class', 'player1');
		turns = 0;
	}
	
	//Reset function
	//On "click" of class .button, we need to reset the game to initial_state
};



