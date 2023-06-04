// Create array to hold board data
let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

// Define game variables
let player = 1

// Pull in cells from DOM
const cellElements = document.querySelectorAll('.cell')

// Add event listener
cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        placeMarker(index)
    })
})

// Create function for placing markers
function placeMarker(index) {
    // Determine row and column from index
    let col = index % 3
    let row = (index - col) / 3
    // check if the current cell is empty
    if (boardData[row][col] == 0) {
        boardData[row][col] = player
        // change player
        player *= -1
        // update the screen with markers
        drawMarkers()
        // check if anyone has won
        checkResult()
    }
}

// create function for drawing player markers
function drawMarkers() {
    // Iterate over rows
    for (let row = 0; row < 3; row++) {
        // iterate over columns
        for(let col = 0; col < 3; col++) {
            // check if it is player 1's marker
            if (boardData[row][col] == 1) {
                // update cell class to add a cross
                cellElements[(row * 3) + col].classList.add('cross')
            } else if (boardData[row][col] == -1) {
                // update cell class to add a circle
                cellElements[(row * 3) + col].classList.add('circle')
            }
        }
    }
}

// create function for checking the result of the game
function checkResult() {
    // check rows and columns
    for (let i = 0; i < 3; i++) {
        let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2]
        let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i]
        if (rowSum == 3 || colSum == 3) {
            // player 1 wins
            console.log('Player 1 wins')
        } else if (rowSum == -3 || colSum == -3) {
            // player 2 wins
            console.log('Player 2 wins')
        }
    }

    // check diagonals
    let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2]
    let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0]
    if (diagonalSum1 == 3 || diagonalSum2 == 3) {
        // player 1 wins
        console.log('Player 1 wins')
    } else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
        // player 2 wins
        console.log('Player 2 wins')
    }

    // check for a tie
    if (boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
            console.log('Tie')
        }
}