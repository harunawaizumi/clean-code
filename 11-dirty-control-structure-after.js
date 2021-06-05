
main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];
  try { // try and catch is must to have to throw error
  	processTransactions(transactions);  // what you want to process
  } catch (error) {
  	showErrorMessage(error.message); // get error if error thrown
  }
}

function processTransactions(transactions) {
	validateTransactions(transactions);

    for (const transaction of transactions) {
    	 processTransaction(transaction);
    }
}

function validateTransactions(transaction) {
	if(isEmpty(transactions)) {
		const error = new Error('No transactions provided!');
		error.code = 1;
		throw error; // throw error
	}
}

function processTransaction(transaction) {
	try {
	    if (!isOpen(transaction)) {
	 	const error = new Error('Invalid transaction type!');
		throw error;
     	}

		if(!isPayment(transaction) && !isRefund(transaction)) {
			const error = new Error('Invalid transaction type!', transaction);
			throw error;
		}
			processPayment(transaction.method);
		}
	} catch (error) {
		showErrorMessage(error.message, error.item)
	}
}



function isOpen(transaction) {
	return transaction.status === 'OPEN';
}

function isPayment(transaction) {
	return transaction.type === 'PAYMENT';
}

function isRefund(transaction) {
	return transaction.type === 'REFUND';
}

function isCreditCard(transaction) {
	return transaction.method === 'CREDIT_CARD';
}

function isPaypal(transaction) {
	return transaction.method === 'PAYPAL';
}

function isPlan(transaction) {
	return transaction.method === 'PLAN';
}

function processPayment(paymentTransaction) {
	if (isCreditCard(transaction)) {
        processCreditCardPayment(transaction);
    } else if (isPaypal(transaction)) {
        processPayPalPayment(transaction);
    } else if (isPlan(transaction)) {
        processPlanPayment(transaction);
    }
}

function isEmpty(transactions) {
	return !transactions || transactions.length === 0;
}

function showErrorMessage(message, item) {
	console.log(message);
	if (item) {
		console.log(item);
	}
	return;
}

function processCreditCardPayment(transaction) {
  console.log(
    'Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    'Processing credit card refund for amount: ' + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}