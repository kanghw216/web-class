// let [x,y] = [1, 2];

// console.log(x);
// console.log(y);

let user = {
  name: 'Jane',
  age: 18,
  gender: 'female'
};

let {name, age, gender = 'male'} = user;

console.log(gender)