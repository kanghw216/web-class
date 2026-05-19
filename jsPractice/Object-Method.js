let boy = {
  name : "Mike",
  showName : function () {
    console.log(boy.name)
  }
};

let man = boy;

man.name = "Tom"

console.log(boy.name)


// 객체 메소드는 화살표 함수를 사용하지 않기
let boy = {
  name : "Mike",
  sayThis : () => {
    console.log(this)
  }
};

boy.sayThis();