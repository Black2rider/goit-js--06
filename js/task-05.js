const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('keypress', onInputKeypress);
refs.output.addEventListener('click', onOutputKeypress);

function onInputKeypress(event) {
  
};

function onOutputKeypress() {
  refs.input.textContent += event.key;
}