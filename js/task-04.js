
const refs = {
decrementBtn: document.querySelector('[data-action="decrement"]'),
incrementBtn: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
   counterValue -= 1;
   document.getElementById('value').textContent = counterValue;
};

function onIncrementBtnClick(event) {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
}
