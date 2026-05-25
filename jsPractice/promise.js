const f1 = (message) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};

const f3 = (message) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log('시작')
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();