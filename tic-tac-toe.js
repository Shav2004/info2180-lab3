
document.addEventListener("DOMContentLoaded", function () {

    // Exercise 1: Set up the board
    const squares = document.querySelectorAll("#board div");

    // Exercise 4: Select the status message
    const status = document.getElementById("status");

    // Exercise 5: Select the New Game button
    const newGameButton = document.querySelector(".btn");
    const originalMessage = status.textContent;

    // Exercise 2: Keep track of the current player
    let currentPlayer = "X";

    // Exercise 4: Track the board and game state
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;

    squares.forEach(function (square, index) {

        // Exercise 1: Apply the square class
        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function () {

            // Exercise 6: Prevent cheating
            if (board[index] !== "" || gameOver) {
                return;
            }

            board[index] = currentPlayer;
            square.textContent = currentPlayer;

            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            // Exercise 4: Check whether someone won
            if (checkWinner()) {

                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";

                status.classList.add("you-won");
                gameOver = true;

            } else {

                // Switch to the next player
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }

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

    // Exercise 4: Check winning combinations
    function checkWinner() {

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {

            let a = combination[0];
            let b = combination[1];
            let c = combination[2];

            if (
                board[a] === currentPlayer &&
                board[b] === currentPlayer &&
                board[c] === currentPlayer
            ) {
                return true;
            }

        }

        return false;
    }

    // Exercise 5: Restart the game
    newGameButton.addEventListener("click", function () {

        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = originalMessage;
        status.classList.remove("you-won");

    });

});
