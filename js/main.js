


// cliccare su un bottone per generare la griglia quadrata da 100 piccoli quadratini
// fare un add eventlistener click con una function
// dentro un altra funzione creare il ciclo for con i vari quadratini e poi inserirla nel click
//




const btnGameStart = document.getElementById('btn-grid-game')

let count = 0;

btnGameStart.addEventListener( 'click', function() {
    
    const parentGrid = document.getElementById("grid-game");

    parentGrid.classList.add('grid-container')

    for (let index = 1; index < 101; index++) {
        
        const newSquare = document.createElement('div');
        
        newSquare.classList.add('square');
    
        newSquare.innerHTML = (index);
    
        parentGrid.append(newSquare);
    
    }

    count++;

    if (count > 1){

        document.getElementById("btn-grid-game").disabled = true;
        console.log('max click');
    }
})