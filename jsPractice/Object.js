const superman = {
  name : 'clark',
  age : 30,
}

superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman)
// console.log(superman['age'])

function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'football',
  }
} 

const Mike = makeObject('Mike', 30);
console.log(Mike)

