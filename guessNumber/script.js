
const range = Math.trunc(Math.random()*50) + 1;
let guessRemain = 10;


function outputStyle() {
  document.querySelector('.lowOrHi').style.width = ' 70rem ';
  document.querySelector('.lowOrHi').style.fontSize = ' 3rem ';
}


function guessGame() {
  const userIn = Number(document.querySelector('#numInput').value);

  if(!userIn) {
    document.querySelector('.lowOrHi').textContent = ' No Number Entered';
    document.querySelector('.lowOrHi').style.backgroundColor = ' #ff0000 ';
    outputStyle();
  }

  else if (userIn === range) {
    document.querySelector('.lowOrHi').textContent = ' Correct Guess ';
    document.querySelector('.lowOrHi').style.backgroundColor = ' #60b347 ';
    outputStyle();
  }

  else if (userIn > range) {

    if (guessRemain > 1) {
    document.querySelector('.lowOrHi').textContent = 'Too High Guess, Try Again!';
    document.querySelector('.preGuess').textContent += userIn + ', ';
    guessRemain--;
    document.querySelector('.lastResult').textContent = guessRemain;
    document.querySelector('.lowOrHi').style.backgroundColor = ' #ff0000 ';
    outputStyle();
  }

  else {
    document.querySelector('.lowOrHi').textContent = 'Guess Limit Exceeded, Reload the page';
    document.querySelector('.lastResult').textContent = 0;
    document.querySelector('.lowOrHi').style.backgroundColor = '#058df5';
    outputStyle();
  }
}

  else if (userIn < range) {

    if (guessRemain > 1) {
    document.querySelector('.lowOrHi').textContent = 'Too Low Guess, Try Again!';
    document.querySelector('.preGuess').textContent += userIn + ', ';
    guessRemain--;
    document.querySelector('.lastResult').textContent = guessRemain;
    document.querySelector('.lowOrHi').style.backgroundColor = ' #d115c5 ';
    outputStyle();

  }

  else {
    document.querySelector('.lowOrHi').textContent = 'Guess Limit Exceeded, Reload the page';
    document.querySelector('.lastResult').textContent = 0;
    document.querySelector('.lowOrHi').style.backgroundColor = ' #058df5 ';
    outputStyle();

  }
}
}

document.querySelector('button').addEventListener('click', guessGame);
