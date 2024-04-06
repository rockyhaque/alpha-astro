function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-purple-500')
}

function removeBgColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-purple-500')
}

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}
