function add(num1, num2) {
  return num1 + num2;
}

const result = add(2,3);
console.log(result)

function showError() {
  alert('에러가 발생했습니다.');
  return;
  alert('이 코드는 절대 실행되지 않습니다.')
}
const result = showError();
console.log(result);