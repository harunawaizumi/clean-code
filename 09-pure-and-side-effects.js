// GOOD: the same input generates the same output => PURE
// no side effects
function generateId(userName) {
  const id = 'id_' + userName;
  return id;
}

// BAD: the same input generates the different output => NOT PURE
// side effects
function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

// BAD: useing global vailble might affects global system
let lastAssignedId;
function generateId(userName) {
  const id = 'id_' + userName;
  lastAssignedId = id;
  return id;
}