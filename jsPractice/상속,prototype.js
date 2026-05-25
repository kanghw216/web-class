// const bmw = {
//   color: "red",
//   wheels: 4,
//   navigation: 1,
//   drive() {
//     console.log("drive..");
//   },
// };

// const benz = {
//   color: "black",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const audi = {
//   color: "blue",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };


// =========


// const car = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const bmw = {
//   color: "red",
//   navigation: 1,
// };

// // const benz = {
// //   color: "black",
// // };

// // const audi = {
// //   color: "blue",
// // };

// bmw.__proto__ = car;
// // benz.__proto__ = car;
// // audi.__proto__ = car;

// const x5 = {
//   color: "white",
//   name: "x5",
// };

// x5.__proto__ = bmw;


// const car = {
//   wheels : 4,
//   drive() {
//     console.log('drive..');
//   },
// };

// const Bmw = function (color) {
//   this.color = color;
//   this.wheels = 4;
//   this.drive = function () {
//     console.log("drive..");
//   };
// };

// const x5 = new Bmw('red')
// const z4 = new Bmw('red')

// x5.__proto__ = car;
// z4.__proto__ = car;


const Bmw = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const x5 = new Bmw("red");