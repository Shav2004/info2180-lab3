
document.addEventListener("DOMContentLoaded", function () {

    // Exercise 1: Set up the board
    const squares = document.querySelectorAll("#board div");

    // Exercise 2: Keep track of the current player
    let currentPlayer = "X";

    squares.forEach(function (square) {

        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function () {

            square.textContent = currentPlayer;
            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

        // Exercise 3: Add hover effect
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });

    });

});


    // Exercise 5: Restart the game
    newGameButton.addEventListener("click", function () {

        // Clear the board array
        board = ["", "", "", "", "", "", "", "", ""];

        // Reset the player and game state
        currentPlayer = "X";
        gameOver = false;

        // Clear all nine squares
        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        // Restore the original status message
        status.textContent = originalMessage;
        status.classList.remove("you-won");

    });


