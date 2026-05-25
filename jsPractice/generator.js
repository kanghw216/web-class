// function* fn() {
//   try {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return "finishe";
//   } catch (e) {
//     console.log(e);
//   }
// }

// const a = fn();


// function* fn() {
//   const num1 = yield "첫번째 숫자를 입력해주세요";
//   console.log(num1);

//   const num2 = yield "두번째 숫자를 입력해주세요";
//   console.log(num2);

//   return num1 + num2;
// }

// const a = fn();


function* fn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const a = fn();


function* gen1() {
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello,";
  yield* gen1();
  yield ";";
}

console.log(...gen2());