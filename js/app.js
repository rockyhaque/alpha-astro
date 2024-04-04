// let playNowBtn = document.getElementById('play-now');

// let home = document.getElementById('home');
// let playGround = document.getElementById('play-ground')
// let scoring = document.getElementById('scoring')

// function playNowFunc(){
//     home.classList.add("hidden");
//     playGround.classList.remove("hidden");
// }

// playNowBtn.addEventListener("click", playNowFunc)

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}
