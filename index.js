
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

// add event listener for all grids
const grids = document.getElementsByClassName('grid');
for(let i=0; i < grids.length; i++) {
    Array.from(grids);
    grids[i].addEventListener('mouseover', changeColor);
}

function changeColor(e) {
    console.log(e.target);
    e.target.style.removeProperty('background-color');
    e.target.classList.add('blackBackground');
};

// clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearBackground);

function clearBackground() {
    const grids = document.getElementsByClassName('grid');
    for(let i=0; i < grids.length; i++) {
        Array.from(grids);
        grids[i].style.backgroundColor = 'white';
    };   
};