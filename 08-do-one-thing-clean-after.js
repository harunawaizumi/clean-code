function createUser(email, password) {
  validateInput(email, password);
  saveUser(email, password);
}

function validateInput(email, password) {
	if (!inputIsNotValid(email, password)) {
    throw new Error('Invalide input');
    return;
  }
}

function inputIsNotValid(email, password) {
	return email && email.includes('@') && password && password.trim() !== '';
}

function showErrorMessage(message) {
	console.log(message);
}

function saveUser(email, password) {
	const user = {
    	email: email,
    	password: password,
  };
}