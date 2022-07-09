const container = document.querySelector('.container');
const resetGrid = document.querySelector('.reset-btn');
const btn = document.querySelector('.change-btn');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn')
const eraseBtn = document.querySelector('.erase-btn');
let colorTrigger = false;


btn.addEventListener('click', changeGrid);
resetGrid.addEventListener('click', formatGrid);
blackBtn.addEventListener('click', changeColor);
container.addEventListener('mousedown', () =>  colorTrigger = true);   
container.addEventListener('mouseup', () => colorTrigger = false); 
eraseBtn.addEventListener('click', erase);

// Creates grid rows and grid boxes, and appends the boxes inside the rows.
function createGrid (gridNum) {
    for (let i = 0; i < gridNum; i++) {
        const rows = document.createElement('div');
        rows.classList.add('grid-row');

        for (let j = 0; j < gridNum; j++) {
        const cells = document.createElement('div');
        cells.classList.add('cell'); 
        let heightAndWidth = 600/gridNum;
        cells.style.width = `${heightAndWidth}px`;
        cells.style.height = `${heightAndWidth}px`;
        rows.appendChild(cells); 
    }
    container.appendChild(rows);

  }
}

createGrid(16);

function changeColor() {
const allCells = document.querySelectorAll('.cell');
    for (let grid of allCells) {
        grid.addEventListener('mousemove', function() {
            if(colorTrigger)
            grid.style.backgroundColor = 'black';
        })
    }
}

function changeGrid() {
    let gridNum = Number(prompt('enter number of grids to display: less than 100'));
        while (gridNum > 100 || gridNum == ''){
           gridNum = Number(prompt('must input a number less than 100'))
        
           } if (gridNum <= 100) {
            clearGrid();
            createGrid(gridNum);
        
   }     
 }

function clearGrid() {
        container.innerHTML = ''; 

 }

function formatGrid() {
    const allCells = document.querySelectorAll('.cell');
    for (let grid of allCells) {
        grid.style.backgroundColor = '#faf9f6';  

  }
 }  
 
function rainbowColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}

rainbowBtn.addEventListener('click', addRainbowColors);

function addRainbowColors() {
    const allCells = document.querySelectorAll('.cell');
    for (let cells of allCells) {
        cells.addEventListener('mousemove', function() {
            if (colorTrigger)
            cells.style.backgroundColor = rainbowColors();
        })
    }
}

function erase() {
    const allCells = document.querySelectorAll('.cell')
    for (let cells of allCells)
    cells.addEventListener('mousemove', function() {
        if(colorTrigger)
        cells.style.backgroundColor = '#faf9f6';
    })
    
}



