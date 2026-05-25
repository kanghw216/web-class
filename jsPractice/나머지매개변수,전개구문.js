// function add(...numbers) {
//   let result = 0;
//   numbers.forEach((num) => (result += num));
//   console.log(result)
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach((num) =>{
//   arr1.unshift(num);
// });

arr1 = [...arr2, ...arr1];

console.log(arr1);