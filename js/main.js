


// cliccare su un bottone per generare la griglia quadrata da 100 piccoli quadratini
// fare un add eventlistener click con una function
// dentro un altra funzione creare il ciclo for con i vari quadratini e poi inserirla nel click
//




const btnGameStart = document.getElementById('btn-grid-game')


btnGameStart.addEventListener( 'click', function() {
    
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

    let btnClick = stopClicking(btnGameStart);
})


// * FUNCTIONS * \\
function createNewSquare() {
    const square = document.createElement('div');

    square.classList.add('square');

    return square;
}


function stopClicking () {

    let count = 0;

    count++;

    if (count > 0){

        document.getElementById("btn-grid-game").disabled = true;
    }

    return count;
}