const container = document.querySelector('.container');
const resetGrid = document.querySelector('.reset-btn');
const btn = document.querySelector('.change-btn');
const startBtn = document.querySelector('.start-btn');
let colorTrigger = false;


btn.addEventListener('click', changeGrid);
resetGrid.addEventListener('click', formatGrid);
startBtn.addEventListener('click', changeColor);

// Creates grid rows and grid boxes, and appends the boxes inside the rows.
function createGrid (gridNum) {
    for (let i = 0; i < gridNum; i++) {
        const rows = document.createElement('div');
        rows.classList.add('grid-row');

        for (let j = 0; j < gridNum; j++) {
        const cells = document.createElement('div');
        cells.classList.add('cell'); 
        let heightAndWidth = 500/gridNum;
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
        grid.addEventListener('mousedown', function() {
            colorTrigger = true;   
        })

        grid.addEventListener('mouseup', function() {
            colorTrigger = false;
        })
        
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

    function formatGrid() {
    const allCells = document.querySelectorAll('.cell');
    for (let grid of allCells) {
        grid.style.backgroundColor = '#faf9f6';
        
  }
 }  


