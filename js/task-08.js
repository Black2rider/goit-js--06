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
  } else {
    console.log(`Email: ${email.value}, 
    Password: ${password.value}`);
  };

  event.currentTarget.reset();

};
