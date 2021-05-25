// ex1
// use constructor and have one argument. The order doesn't matter.
class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}
const user = new User({ name: 'Max', email: 'max@test.com', age: 31 });

// ex2
// hard to identify what the first and the second parameter is
function compare(a, b, comparator) {
  if (comparator === 'equal') {
    return a === b;
  } else if (comparator === 'not equal') {
    return a !== b;
  } else if (comparator === 'greater') {
    return a > b;
  } else if (comparator === 'smaller') {
    return a < b;
  }
}

const isSmaller = compare(3, 5, 'smaller');
const isEqual = compare(3, 5, 'equal');
