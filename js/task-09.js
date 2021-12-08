const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', onButtonChange);

function onButtonChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
 // console.log(document.body.style.backgroundColor = getRandomHexColor())
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
