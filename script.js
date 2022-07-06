const container = document.querySelector('.container');

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

const allCells = document.querySelectorAll('.cell');
    for (let grid of allCells) {
        grid.addEventListener('mouseenter', function() {
            grid.style.backgroundColor = 'black';
        })

    }
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        let gridNum = Number(prompt('enter number of grids to display'))
        if (gridNum > 100){
        alert('enter number less than 100');
        return;

        } else if (gridNum <= 100) {
        clearGrid();
        createGrid(gridNum);
        }
    })

    function clearGrid() {
        container.innerHTML = '';
    }


