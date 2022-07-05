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
createGrid(70);