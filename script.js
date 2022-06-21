'use strict';

let truenumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessnumber = Number(document.querySelector('.guess').value);

  if (!guessnumber) {
    displayMessage('no number');
  } else {
    if (guessnumber === truenumber) {
      displayMessage('correct');
      document.querySelector('.number').textContent = truenumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      score > highscore ? (highscore = score) : (highscore = highscore);
      document.querySelector('.highscore').textContent = String(highscore);
    } else if (guessnumber !== truenumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = String(score);
        displayMessage(guessnumber > truenumber ? ' too High' : ' too Low');
      } else {
        displayMessage('Game Over');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = String(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('start guessing...');
});
