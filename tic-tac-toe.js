
document.addEventListener("DOMContentLoaded", function () {

    // Exercise 1: Set up the board
    const squares = document.querySelectorAll("#board div");

    // Exercise 4: Select the status message
    const status = document.getElementById("status");

    // Exercise 2: Track the current player
    let currentPlayer = "X";

    // Exercise 4: Store the board and game state
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;

    squares.forEach(function (square, index) {

        square.classList.add("square");

        // Exercise 2: Add X or O
        square.addEventListener("click", function () {

            if (gameOver) {
                return;
            }

            board[index] = currentPlayer;
            square.textContent = currentPlayer;

            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            // Exercise 4: Check for a winner
            if (checkWinner()) {

                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";

                status.classList.add("you-won");
                gameOver = true;

            } else {

                // Switch players
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }

            }

        });

        // Exercise 3: Mouse hover effect
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });

    });

    // Exercise 4: Check all winning combinations
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

});
