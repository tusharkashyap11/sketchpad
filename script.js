const container = document.getElementById('container');
const setGrid = document.getElementById('set-grid');
const grid = document.querySelector('.gridsize');
const value = setGrid.value;
let colorMode = 'black';

for (let i = 0; i < value*value; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.style.width = String(500/value) + 'px';
    div.style.height = String(500/value) + 'px';
    
    container.appendChild(div);
}

let cellList = container.querySelectorAll('div');
let isMouseDown = false;
container.onclick = () => (isMouseDown = !isMouseDown);

cellList.forEach (cell => {
    cell.addEventListener('mouseover', () => {
        if (isMouseDown) {
            if (colorMode === 'rainbow') {
                let color = getRandomColor();
                cell.style.backgroundColor = color;
            } else if (colorMode === 'black') {
                cell.classList.add(colorMode);
            }
        }
    })
})

const clear = document.getElementById('Clear');
clear.addEventListener('click', function () {
    for (const cell of cellList) {
        if (colorMode === 'rainbow') {
            cell.style.removeProperty('background-color');
        } else {
            cell.classList.remove(colorMode);
        }
    }
})

setGrid.addEventListener('input', () => {

    while (container.firstChild) {
        if (container.firstChild.tagName === 'DIV') {
          container.removeChild(container.firstChild);
        } else {
          container.firstChild.remove();
        }
    }     

    const value = setGrid.value;
    grid.textContent = value + " x " + value;

    for (let i = 0; i < value*value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.width = String(500/value) + 'px';
        div.style.height = String(500/value) + 'px';

        container.appendChild(div);
    }
    cellList = container.querySelectorAll('div');

    cellList.forEach (cell => {
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                if (colorMode === 'rainbow') {
                    let color = getRandomColor();
                    cell.style.backgroundColor = color;
                } else if (colorMode === 'black') {
                    cell.classList.add(colorMode);
                }
            }
        })
    })
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const rainbowMarker = document.getElementById('rainbow');
rainbowMarker.addEventListener('click', () => {
    colorMode = 'rainbow'; 
})
const blackMarker = document.getElementById('black');
blackMarker.addEventListener('click', () => {
    colorMode = 'black';  
})