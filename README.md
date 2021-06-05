## About this repository 
This is a summary of a udemy course I took. 
The course is to learn how to write readable, understandable and therefore maintainable code - step by step, in an example-driven way. To memorize what I learned, I list down important things I should remember when I'm writing code.
This is a really good learning course. It's recommended!
https://www.udemy.com/course/writing-clean-code/learn/lecture/23111346#overview


## Naming 
The name should imply which kind of data is being stored.
1. functions / methods
Verb as a name
Ex) login(), createUser(), database.insert()
Short phrases with adjectives
Ex) isValid(), isEmail()


2. Classes
Describe the kind of object it will create
Ex) User, Product, RootAdministrator

* Avoid generic names
Ex) handle(), process()
* Be consistent
Ex) fecchUsers(), getUsers()


## Code Structure, Comments & Formatting
1. Bad Comments
	* Redundant Information
	* Misleading Comments 
	ex) Insert / Update, check comments to make sure comments doesn’t cause misunderstanding.
	* Commented-Out Code
	You should remove useless commented-Out Code


2. Good Comments
	* Legal Information
	* Warnings
	* Todo Notes
	ex)  // todo: add password validation


3. Vertical Formatting
	* A function A which is called by function B should be (closely) <strong> below function B </strong> - at least if your programming language allows such an ordering.
	

4. Horizontal Formatting
	* a shorter lines 


## Functions & Methods
1. Small & do one thing
	* DON’T do “different operations”  in one function
	ex) validate + save user input, operation1 + operation2
	* DON’T do “different level of abstraction” in one function.
	ex) email.includes(‘@‘) + saveUser(email, name)


2. Do work that’s one level of abstraction below their name
	* DON’T mix levels of abstraction
	Ex) function saveUser(email) {
		if (email.includes(‘@‘)) { …… }
	} 


3. Keep functions short
	* Extract code that works on the same function
	Before: user.setAge(31) + user.setName(‘Max’)
	After: user.update({ age:31, name: ‘Max’})

	* Extract code that requires more interpretation than the surrounding code
	Before: email.includes(‘@‘) + saveNewUser(email)
	After: isValid(email) + saveNewUser(email)


4. Don’t Repeat Yourself (DRY)


5. Use Common Sense
	* Keep functions Pure
	Keep the same input generates the same output


6. Avoid side effects 
	* Unexpected side effects should be avoided.
	ex) function createUser(email, password) {
		const user = new User(email, password);
		startSession(user);
		return user;
	}
	-> startSession in side of createUser is unpredictable. Should avoid.


## Control Structure & Errors 
1. Keep Clean 
	* Avoid Deep  Nesting 
	ex) 
	Before:
	if (email.includes(‘@‘)) {
		// do staff
	}
	After: // fail first !
	if(!email.includes	(‘@‘)) {
		return;
	}
	// do staff
	

2. Embrace Errors & Error Handling
 Throwing + handling errors can replace if statements and lead to more confused functions.
	* Error function is one thing!
	* Set default value to remove if check
	ex) 
	Before:
	function showErrorMessage(message, item) {
  		console.log(message);
 		 if (item) {
    		console.log(item);
  		}
	}
	After:
	function showErrorMessage(message, item={}) {
  		console.log(message);
 		console.log(item);
	}