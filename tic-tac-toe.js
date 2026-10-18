
document.addEventListener("DOMContentLoaded", function () {

    // Exercise 1: Set up the board
    const squares = document.querySelectorAll("#board div");

    // Exercise 2: Keep track of the current player
    let currentPlayer = "X";

    squares.forEach(function (square) {

        square.classList.add("square");

        // Add X or O when a square is clicked
        square.addEventListener("click", function () {

            square.textContent = currentPlayer;
            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            // Switch to the next player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

    });

});
