
// create div as grids
function createGrid() {
    const box = document.getElementById('box');
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    box.appendChild(grid);
};

// create 16x16 grids
let totalGrid = 256;
for (let i = 0; i<totalGrid; i++) {
    createGrid();
};

// events
const grids = document.getElementsByClassName('grid');
for(let i=0; i < grids.length; i++) {
    Array.from(grids);
    grids[i].addEventListener('mouseover', changeColor);
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
};