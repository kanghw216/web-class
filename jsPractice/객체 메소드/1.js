const user = {
  name : "Mike",
  age : 30,
  gender : "male",
}

Object.values(user);

const arr = [
  ["name","Mike"],
  ["age",30],
  ["gender","male"]
];

Object.fromEntries(arr);