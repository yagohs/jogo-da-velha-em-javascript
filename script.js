// initial data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', c2: '', c3: '',
    c1: '', c2: '', c3: '',
};

let player = '';
let warning = '';
let playing = false;

//events

document.querySelector('.reset').addEventListener('click', reset)


// functions

function reset() {
    warning= '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0 ) ? 'x' : 'o';

    for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}