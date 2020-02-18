//add name entry, reset button and win message

const gameBoard = (() => {
    
    const gBoard = document.querySelector('.board');

    let board = [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i<board.length; i++){
        const block = document.createElement('div');
        block.className = 'block toFill';
        block.setAttribute("id", board[i])
        gBoard.appendChild(block);

}

})();



const playerControl =(() =>{
const block = document.querySelectorAll('.toFill')
let phase = 0

const win =[ 
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
]

let playerOne=[]
let playerTwo= []
const fill = (e) => {
    if (phase ==0 && e.target.classList.contains('toFill')){
        e.target.textContent = 'x'
        e.target.classList.remove('toFill');
        playerOne.push(e.target.id)
        
        for (let i = 0; i<win.length; i++){

            
            if ((playerOne.includes(win[i][0])) && (playerOne.includes(win[i][1])) && (playerOne.includes(win[i][2]))){
                console.log('player one wins')
                    
                }
            
        }
        phase = 1

        }
        
    else if (phase == 1 && e.target.classList.contains('toFill') ){
        e.target.textContent = 'o'
        e.target.classList.remove('toFill');
        playerTwo.push(e.target.id)
        
        for (let i = 0; i<win.length; i++){

            
            if ((playerTwo.includes(win[i][0])) && (playerTwo.includes(win[i][1])) && (playerTwo.includes(win[i][2]))){
                console.log('player two win')
                    
                }
            
        }
        phase = 0


    }
}
block.forEach(grid => {grid.addEventListener('click', fill)})})()