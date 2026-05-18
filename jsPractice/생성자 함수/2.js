function Item(title, price) {
  // title = {};

  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log("가격은 ${price}원 입니다.");
  }

  // return this;
}

const item1 = new Item