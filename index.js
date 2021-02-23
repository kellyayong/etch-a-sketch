
// create div as grids
function createGrid(value) {
    const box = document.getElementById('box');
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    const width = 600;
    const gridWidth = width/value;
    grid.style.width = gridWidth+'px';
    grid.style.height = gridWidth+'px';
    box.appendChild(grid);
};

// default - create 30x30 grids
let gridSize = 30;
let totalGrid = gridSize*gridSize;
for (let i = 0; i<totalGrid; i++) {
    createGrid(gridSize);
};

// function to fill grid box based on gridSize?
function fillGridBox() {
    deleteGrids();
    let totalGrid = gridSize*gridSize;
    for (let i = 0; i<totalGrid; i++) {
        createGrid(gridSize);
    };
}

// function to delete grid
function deleteGrids() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(e => e.remove());
}

// slider 
const slider = document.getElementById('gridRange');
const output = document.getElementById('output');
output.innerHTML = slider.value + 'x' +  slider.value;
slider.oninput = function() {
    output.innerHTML = this.value + 'x' +  this.value;
    gridSize = this.value;
    fillGridBox();
    drawOnGrids();
};


// clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearBackground);

// clear function 
function clearBackground() {
    const grids = document.getElementsByClassName('grid');
    for(let i=0; i < grids.length; i++) {
        Array.from(grids);
        grids[i].classList.add('whiteBackground');
        grids[i].style.removeProperty('background-color');
    };   
};

// default selection - black
let selection = 'blackBG';

// function to add event listener for all grids
function drawOnGrids() {
    const grids = document.getElementsByClassName('grid');
    for(let i=0; i < grids.length; i++) {
        Array.from(grids);
        grids[i].addEventListener('mouseover', checkClass);
    };
}

const grids = document.getElementsByClassName('grid');
for(let i=0; i < grids.length; i++) {
    Array.from(grids);
    grids[i].addEventListener('mouseover', checkClass);
};

// function to check the color selection 
function checkClass(e) {
    if (selection == 'blackBG') {
        e.target.classList.remove('whiteBackground');
        e.target.style.removeProperty('background');
        e.target.removeEventListener('mouseover', randomBG);
        e.target.removeEventListener('mouseover', eraseColor);
        e.target.classList.add('blackBackground');
    } else if (selection == 'grayBG') {
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('blackBackground');
        e.target.removeEventListener('mouseover', randomBG);
        e.target.removeEventListener('mouseover', eraseColor);
        if(e.target.style.backgroundColor) {
            determineColor(e);
        } else {
            e.target.style.backgroundColor = 'rgba(3, 3, 3, 0.1)';
        };
    } else if (selection == 'randomBG') {
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('blackBackground');
        e.target.removeEventListener('mouseover', addShade);
        e.target.removeEventListener('mouseover', eraseColor);
        if(e.target.style.backgroundColor) {
            e.target.addEventListener('mouseover', randomBG);
        } else {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = '#' + randomColor;
        };
    } else if (selection == 'eraser') {
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('blackBackground');
        e.target.removeEventListener('mouseover', randomBG);
        e.target.removeEventListener('mouseover', addShade);
        e.target.addEventListener('mouseover', eraseColor);
    };
};

// btn events
const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', changeToBlack);

const grayBtn = document.getElementById('gray');
grayBtn.addEventListener('click', changeToGray);

const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', changeToRandom);

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', changeToEraser);

// function to change selection according to btn
function changeToBlack() {
    selection = 'blackBG';
    return selection;
};
function changeToGray() {
    selection = 'grayBG';
    return selection;
};
function changeToRandom() {
    selection = 'randomBG';
    return selection;
};
function changeToEraser() {
    selection = 'eraser';
    return selection;
};

// function to set BG to random color
function randomBG(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = '#' + randomColor;
};

// function to add shading
function addShade(e) {
    let currentColor = e.target.style.backgroundColor;
    const color = currentColor.slice(0, -4);
    const opacity = currentColor.slice(13,-1);
    currentColor = parseFloat(opacity)+ 0.1;
    let newColor = color+currentColor+')';
    e.target.style.backgroundColor = newColor;
};

// function to eraser color
function eraseColor(e) {
    e.target.removeEventListener('mouseover', randomBG);
    e.target.removeEventListener('mouseover', addShade);
    e.target.style.removeProperty('background');
}

// function to determine if color is other for shading
function determineColor(e) {
    let currentColor = e.target.style.backgroundColor;
    const prefix = currentColor.slice(0,4);
    console.log(e.target.style.backgroundColor);
    if(prefix !== 'rgba') {
        if(e.target.style.backgroundColor !== 'rgb(3, 3, 3)') {
            e.target.style.backgroundColor = 'rgba(3, 3, 3, 0.1)'
        }; 
    } else {
        e.target.addEventListener('mouseover', addShade);
    };
}