
const guessField = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('.submit');
const previousOutcome = document.querySelector('.previous-guesses');
const gameOutcome = document.querySelector('.outcome');
const table = document.querySelector('table');
const game = document.querySelector('.game')
let attempt = 0;
let randomNumber=(Math.floor(Math.random()*100)) +1;
let tablestart = "<tr><th>Previous Guesses:</th><th>Outcome</th></tr>";
table.innerHTML = tablestart;

// will be used to reset form with attmpt =0

function restartGame(){
    submitButton.disabled=false;
    guessField.disabled=false;
    gameOutcome.textContent='';
    table.innerHTML=tablestart;
    let button = document.querySelector('.reset-button');
    button.remove();
    attempt=0;
}

function gameOver(){
    submitButton.disabled=true;
    guessField.disabled=true;
    let resetButton = document.createElement('button');
    resetButton.classList.add('reset-button')
    resetButton.innerHTML='Play Again<span></span>';
    game.append(resetButton);
    resetButton.addEventListener('click', restartGame);
}


function checkguess(){
    let guessvalue = Number(guessField.value);
    if (guessvalue === randomNumber){
        let result = `<tr><td>${guessvalue}</td><td>Your right!</td>`
        table.innerHTML+= result;
        gameOutcome.textContent = "Congrats! You got it right!";
        gameOver();
    }

    else if (guessvalue> randomNumber){
        let result = `<tr><td>${guessvalue}</td><td>Too high!</td>`
        table.innerHTML+= result;
        attempt++;
        gameOutcome.textContent="Wrong! Too high!"
        guessField.value='';
        console.log(attempt);

    }
    else {//guess < randomnumer
        let result = `<tr><td>${guessvalue}</td><td>Too low!</td>`
        table.innerHTML+= result;
        attempt++;
        gameOutcome.textContent="Wrong! Too low!"
        guessField.value='';
        console.log(attempt);

    }

    if (attempt===10){
        gameOver();}
    
};

submitButton.addEventListener('click', checkguess);
guessField.focus();


//  gen randomnumber, attempts=0, create p with previous attempts and 'toogigh/low colum'
//if attempt==10, endgame() and outcome div with sorry!
//input guess, submitguess()
//subdmitguess takes guess value, attempt++, check guess high/low, endgame() if correct with outcome(div) having a congrates, append to p with previous answer if wrong.

//endgame() disabels all submit buttoms and input fields. It appends a button to 'reset field' that calls resetall()
//resetAll() generates new randomno, atempts=0, resets p and unlocks submit and input fields. Outcome div is also erased.

//Form elements needed
// Instruction para
// input field
// submit input
// p for previous outcome
// p for outcome
