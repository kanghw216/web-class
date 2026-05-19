let days = ["mon", "tue", "wed"];

days.push("thu"); // 뒤에 추가 
days[1] = "화요일"
days.unshift("sun"); // 앞에 추가

console.log(days.length);

for (let day of days) {
  console.log(day);
}