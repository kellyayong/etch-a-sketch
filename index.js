
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

// add event listener for all grids
const grids = document.getElementsByClassName('grid');
for(let i=0; i < grids.length; i++) {
    Array.from(grids);
    grids[i].addEventListener('mouseover', checkClass);
};

// function to check the color selection 
function checkClass(e) {
    if (selection == 'blackBG') {
        //clearBackground();
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('grayBackground');
        e.target.classList.add('blackBackground');
    } else if (selection == 'grayBG') {
        //clearBackground();
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('blackBackground');
        e.target.classList.add('grayBackground');
    } else if (selection == 'randomBG') {
        //clearBackground();
        e.target.classList.remove('whiteBackground');
        e.target.classList.remove('blackBackground');
        e.target.classList.remove('grayBackground');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    };
};

// btn events
const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', changeToBlack);

const grayBtn = document.getElementById('gray');
grayBtn.addEventListener('click', changeToGray);

const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', changeToRandom);

// function to change selection according to btn
function changeToBlack() {
    clearBackground();
    selection = 'blackBG';
    return selection;
};
function changeToGray() {
    clearBackground();
    selection = 'grayBG';
    return selection;
};
function changeToRandom() {
    clearBackground();
    selection = 'randomBG';
    return selection;
};

// function to set BG to random color
function randomBG(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.backgroundColor = '#' + randomColor;
};