
// create div as grids
function createGrid() {
    const box = document.getElementById('box');
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    box.appendChild(grid);
};

createGrid();