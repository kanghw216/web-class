// 유일성 보장

// const id = Symbol('id');
// const user = {
//   name:"Mike",
//   age: 30,
//   [id] : 'myid'
// }

// //Symbol.for() 전역 심볼

// const id1 = Symbol.for('id');
// const id2 = Symbol.for('id');

// id1 === id2;

// Symbol.keyFor(id1);

// const id = Symbol('id 입니다.')

// id.description; // "id 입니다."

const user = {
  name : "Mike",
  age:30,
}

// user.showName = function() {};

const showName = Symbol('show name');
user[showName] = function() {
  console.log(this.name);
};

user[showName] ();

for (let key in user) {
  console.log(`His ${key} is ${user[key]}`)
}
