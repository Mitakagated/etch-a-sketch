const container = document.getElementById('container');
const square = document.createElement('div');
square.classList.add('square');

for (let i = 0; i < 16; i++) {
    for (let index = 0; index < 16; index++) {
        container.appendChild(square.cloneNode(true));
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'white';
    })
})