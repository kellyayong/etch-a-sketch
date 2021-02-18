
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