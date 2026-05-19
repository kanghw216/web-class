// let n = "name";
// let a = "age";

// const user = {
//   [n]: "Mike",
//   [a]: 30,
//   [1+4]: 5,
// };

// console.log(user);


// function makeObj(key, val) {
//   return {
//     [key] : val,
//   }
// }

// const obj = makeObj("성별", "male");

// console.log(obj);

// const user = {
//   name: "Mike",
//   age: 30,
// };

// const result = Object.entries(user);

// console.log(result);

let arr = [
  ['mon','월'],
  ['tue','화'],
];

const result = Object.fromEntries(arr);

console.log(result);