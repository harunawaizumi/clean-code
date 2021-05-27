// Ex1
// three arguments is unclear which argument is for what.
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User('Max', 31, 'max@test.com');

// ex2
// 
function compare(comparisonData) {
  const { first, second, comparator } = comparisonData;
  if (comparator === 'equal') {
    return first === second;
  } else if (comparator === 'not equal') {
    return first !== second;
  } else if (comparator === 'greater') {
    return first > second;
  } else if (comparator === 'smaller') {
    return first < second;
  }
}

const isSmaller = compare({ first: 3, second: 5, comparator: 'smaller' });
const isSmaller = compare({ comparator: 'equal', first: 3, second: 5 });