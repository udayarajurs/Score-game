'use strict';
const player0El = document.querySelector('.player--0') // select the class .
const player1El = document.querySelector('.player--1') // select the class .
const Score0El = document.querySelector('#score--0');
const Score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let CurrentScore = 0;
Score0El.textContent = 0;
Score1El.textContent = 0;
diceEl.classList.add('hidden');
const Score = [0 , 0];
let activePlayer = 0;
let playing = true;

const SwitchNextPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        CurrentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
        // 1. Generating a radom dice roll
        const dice = Math.trunc(Math.random() * 6 ) + 1;

        //  Disply dices
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // check for rolled 1 if true, switch to new User
        if(dice !== 1){
            // Add dice current score
            CurrentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;
        }else{
            // Switch to next player
            SwitchNextPlayer();
        }

    }
    
});

btnHold.addEventListener('click', function(){
    if(playing){
    // add current scorc to active player
    Score[activePlayer] += CurrentScore;
    // Score[1] = Score[1] + CurrentScore
    document.getElementById(`score--${activePlayer}`).textContent = Score[activePlayer];

    if(Score[activePlayer] >= 20){
        // Finish the game 
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }else{
         // switch to next player
         SwitchNextPlayer();
    }
    }
});

btnNew.addEventListener('click', function(){
   // my sulotion
   /*
    playing = true;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    CurrentScore = 0;
    Score[0] = 0;
    Score[1] = 0;
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

   */
    // coder solution 
        Score0El.textContent = 0;
        Score1El.textContent = 0;
        currentScore0El.textContent = 0;
        currentScore0El.textContent = 0;
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');

    });

