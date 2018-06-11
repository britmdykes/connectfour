// javascript


// Player one is active
var player='1';
var player1color = 'red';
var player2color = 'black';
var column='0'

// Player one selects a cell
$('.cell').on('click', function() {
	// if cell is empty
	
		// get location lowest empty cell

		// create chip with player color 
	$(this).addClass('clicked');
		// place chip in location (1)

		// look at neighbor cells and get chip color, location, and direction from source chip

		// if one neighbor matches color (2)

			// look at next neighbor in same direction

			// if next neighbor matches color (3)

				//look at next neighbor in same direction

				// if next neighbor matches color (4)

					// Game over player one connected four! 

				// else toggle to player 2
				var player = '2';

			// else toggle to player 2

		// else toggle to player 2

	// else if the column has no empty cells 

		// emit message to player 1 that they need to pick again 

	// else if there are no available cells

		// game over, cat game

})