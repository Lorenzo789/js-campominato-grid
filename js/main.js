

const btnGameStart = document.getElementById('btn-grid-game')


btnGameStart.addEventListener( 'click', function() {

    document.getElementById("btn-grid-game").disabled = true;
    
    const difficultySelect = document.getElementById("select-difficulty").value;

    if (difficultySelect == "1") {
        createGame(100, 'square');
    } else if (difficultySelect == "2") {
        createGame(60, 'square-medium');
    } else if (difficultySelect == "3") {
        createGame(40, 'square-hard');
    }

})


// * FUNCTIONS * \\
function createNewSquare(classToAdd) {
    const square = document.createElement('div');

    square.classList.add(classToAdd);

    return square;
}

function createGame(square, classToAdd) {

    const parentGrid = document.getElementById("grid-game");
    
    parentGrid.classList.add('grid-container');

    for (let index = 0; index < square; index++) {
            
        const newSquare = createNewSquare(classToAdd);
        
        newSquare.innerHTML = (index + 1);
        
        parentGrid.append(newSquare);
        
        newSquare.addEventListener( 'click', function(){
    
            newSquare.classList.toggle('active');

            console.log('hai cliccato il numero' , + index + 1);
    
        })
    }
}