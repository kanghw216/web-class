// let one;
// one = 1;

// function addOne(num) {
//   console.log(one + num);
// }

// addOne(5)


function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());