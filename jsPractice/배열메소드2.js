// let arr = [18, 5, 27, 39];

// // function fn(a,b) {
// //   return a-b;
// // }

// arr.sort((a, b) => {
//   console.log(a, b);
//   return a-b;
// });

// console.log(arr);

// let arr= [1, 2, 3, 4, 5];

// // let result = 0;
// // arr.forEach(num => {
// //   // result = result + num;
// //   result += num;
// // });

// const result = arr.reduce((prev, cur) => {
//   return prev + cur;
// }, 0);

// console.log(result);

let userList = [
  { name: "Mike", age: 30},
  { name: "Tom", age: 10},
  { name: "Jane", age: 27},
  { name: "sue", age: 42},
  { name: "steve", age: 60},
];

let result = userList.reduce((prev, cur) => {
  if(cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result);