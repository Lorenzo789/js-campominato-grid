

const btnGameStart = document.getElementById('btn-grid-game')


btnGameStart.addEventListener( 'click', function() {

    document.getElementById("btn-grid-game").disabled = true;
    
    const parentGrid = document.getElementById("grid-game");
    
    parentGrid.classList.add('grid-container')
    
    for (let index = 0; index < 100; index++) {
        
        const newSquare = createNewSquare();
        
        newSquare.innerHTML = (index + 1);
        
        parentGrid.append(newSquare);
        
        newSquare.addEventListener( 'click', function(){
    
            newSquare.classList.toggle('active');

            console.log('hai cliccato il numero' , + index + 1);
    
        })

    }
})


// * FUNCTIONS * \\
function createNewSquare() {
    const square = document.createElement('div');

    square.classList.add('square');

    return square;
}