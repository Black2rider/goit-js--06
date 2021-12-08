const input = document.getElementById('controls');
const boxes = document.getElementById('boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

create.addEventListener('click', onInputNumberCreate);
destroy.addEventListener('click', onInputNumberDestroy);

function onInputNumberCreate(event) {
  const amount = input.value;
  createBoxes(amount);
};

function onInputNumberDestroy(event) {
  boxes.innerHTML = '';
};

function createBoxes(amount) {
  const div = document.createElement('div');
  
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
  }
  boxes.append(div);
    console.log(boxes.append(div));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}