

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet
  setBgColorById(alphabet)
}

document.addEventListener('keyup', handleKbdBtnPress);

function handleKbdBtnPress(e){
  const playerPressed = e.key;
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // if(playerPressed === 'Enter'){
  //   play();
  // }

  // stop game if pressed 'Esc'
  if(playerPressed === 'Escape'){
    gameOver();
  }

  if(playerPressed === expectedAlphabet){
    const currentScore = getTextElementValueById('current-score')
    const newScore = currentScore + 1;
    setTextElementValueById('current-score', newScore)

    removeBgColorById(expectedAlphabet)
    continueGame();
  } else{
    const currentLife = getTextElementValueById('current-life')
    const newLife = currentLife - 1;
    setTextElementValueById('current-life', newLife);

    if(newLife === 0){
      gameOver();
    }
  }
  console.log(playerPressed ,expectedAlphabet);
  
}

function play() {
  hideElementById("home");
  hideElementById('final-score')
  showElementById("play-ground");

  // reset score & life
  setTextElementValueById('current-life', 5)
  setTextElementValueById('current-score', 0)

  continueGame();
}



function gameOver(){
  hideElementById('play-ground')
  showElementById('final-score');

  // update final score
  let gameOverScoring = getTextElementValueById('current-score')
  setTextElementValueById('game-over-scoring', gameOverScoring)

  // clear the last selected alphabet
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBgColorById(currentAlphabet)
}
