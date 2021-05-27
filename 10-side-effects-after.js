function initApp() {
	const success = connectDatabase();
	if(!success) {
    	showErrorMessage('Could not connect to database!');
	}
}

function connectDatabase() {
	// const connectionUri = ...
  	const didConnect = database.connect();
  	return didConnect;
}

function determineSupportAgent(ticket) {
	let agent;
	const requestType = getRequestType(ticket);
	if (requestType !== 'unknown') {
	 	agent = findStandardAgent();
	}
	agent = findAgentByRequestType(requestType);
	return agent;
}

function getRequestType(ticket) {
	return ticket.requestType;
}

function createUser(eamil, password) {
	if(!isValid(email, password)) {
    	showErrorMessage('Invalid input!');
	}
}

function isValid(email, password) {
  return !email.includes('@') || password.length < 7;
}

function showErrorMessage(message) {
	console.log(message);
}