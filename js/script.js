const container = document.getElementById('container');
const square = document.createElement('div');
const row = document.createElement('div');
square.classList.add('square');
row.classList.add('row');

for (let i = 0; i < 16; i++) {
    for (let index = 0; index < 16; index++) {
        row.appendChild(square.cloneNode(true));
    }
    container.appendChild(row.cloneNode(true));
    row.innerHTML = '';
}

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'white';
    })
})

function newGrid() {
    const numSquares = Number(prompt('Please enter a number between 1 and 100'));
    if (Number.isNaN(numSquares)) {
        alert('Please enter a number');
        return newGrid();
    }
    if (numSquares < 1 || numSquares > 100) {
        alert('Please enter a number between 1 and 100');
        return newGrid();
    }
    container.innerHTML = '';
    row.style.height = `${32 / numSquares}rem`;
    square.style.height = `${32 / numSquares}rem`;
    for (let i = 0; i < numSquares; i++) {
        for (let index = 0; index < numSquares; index++) {
            row.appendChild(square.cloneNode(true));
        }
        container.appendChild(row.cloneNode(true));
        row.innerHTML = '';
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'white';
        })
    })
}