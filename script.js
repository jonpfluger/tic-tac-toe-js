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
        console.log(boardData)

    }
}