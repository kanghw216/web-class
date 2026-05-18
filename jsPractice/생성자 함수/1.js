function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name);
  }
}

let user5 = new User('Han', 40)
user5.sayName

let user1 = new User('Mike', 30 )

