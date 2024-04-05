
function play() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet
  setBgColorById(alphabet)
}

function handleKbdBtnPress(e){
  const playerPressed = e.key;
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if(playerPressed === expectedAlphabet){
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    console.log(currentScore);

    removeBgColorById(expectedAlphabet)
    continueGame();
  } else{
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
  }
  console.log(playerPressed ,expectedAlphabet);
  
}

document.addEventListener('keyup', handleKbdBtnPress);