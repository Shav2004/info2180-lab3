
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
