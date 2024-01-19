function check() {
  let n = +prompt("Nhập số phần tử có trong mảng.");
  let numbers = [];
  let newNumber = [];

  for (let i = 0; i < n; i++) {
    let m = +prompt(`numbers[${i}] = `);
    numbers.push(m);
  }
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        numbers.splice(i, 1);
        i--;
        break;
      }
    }
  }
  console.log("Danh sách các phần tử trong mảng là số nguyên: ", numbers);
}

check();
