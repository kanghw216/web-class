// function fn() {
//   console.log(3)
// }


// setTimeout(fn, 3000);

// setTimeout(function() {
//   console.log(3)
// }, 3000);


// const tId = function showName(name) {
//   console.log(name);
// }

// setTimeout(showName, 300, 'Mike');

// clearTimeout(tId);


// setTimeout(function(){ 
//   console.log(2)
// }, 0);

// console.log(1);

let num =0;

function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);