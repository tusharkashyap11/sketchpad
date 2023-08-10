let gridSize;
let cellList;
const setSize = document.getElementById('set-size');
const container = document.getElementById('container');

setSize.addEventListener('click', () => {
    
    while (container.firstChild) {
        if (container.firstChild.tagName === 'DIV') {
          container.removeChild(container.firstChild);
        } else {
          container.firstChild.remove();
        }
    }      

    gridSize = prompt("ENTER GRID SIZE");
    while (gridSize < 0 && gridSize > 64 || gridSize == '') {
        gridSize = prompt("ENTER VALID SIZE BETWEEN 0 AND 64");
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.width = String(600/gridSize - 2) + 'px';
        div.style.height = String(600/gridSize - 2) + 'px';
            
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.classList.add('hovered')
        });
    }
    cellList = container.querySelectorAll('div');   
})

const clear = document.getElementById('Clear');
clear.addEventListener('click', function () {
    for (const cell of cellList) {
        cell.classList.remove('hovered');
    }
})