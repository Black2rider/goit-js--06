const refs = {
  form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormLogin);

function onFormLogin(event) {
  event.preventDefault();
  const {
    elements: {email, password} 
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Empty field!!!')
  };
};
