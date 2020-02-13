const gameBoard = (() => {
    
    const gBoard = document.querySelector('.board');

    let board = [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i<board.length; i++){
        const block = document.createElement('div');
        block.className = 'block toFill';
        gBoard.appendChild(block);

}
return {gBoard}
})();




const block = document.querySelectorAll('.toFill')
let phase = 0

const fill = (e) => {
    if (phase ==0 && e.target.classList.contains('toFill')){
        e.target.textContent = 'x'
        e.target.classList.remove('toFill');
        phase = 1
    }
    else if (phase == 1 && e.target.classList.contains('toFill') ){
        e.target.textContent = 'o'
        e.target.classList.remove('toFill');
        phase = 0
    }
}
block.forEach(grid => {grid.addEventListener('click', fill)})