function check() {
  let n = +prompt("Nhập số nguyên dương n bất kỳ.");
  let numbers = [];
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      numbers.push(i);
      sum += i;
    }
    if (i == n && sum % 2 == 0) {
      numbers.pop();
    }
  }
  console.log("Danh sách của mảng là: ", numbers);
}

check();
