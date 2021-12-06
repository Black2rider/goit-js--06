const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputKeypress);

function onInputKeypress(event) {
  event.preventDefault();
  if (event.currentTarget.value === '') {
    refs.output.textContent = 'Anonymous';
  } else {
  refs.output.textContent = event.currentTarget.value;
  };
  return refs.output.textContent;
};
