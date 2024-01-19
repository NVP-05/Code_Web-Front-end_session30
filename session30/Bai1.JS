function check() {
  let n = +prompt("Nhập số phần tử có trong mảng.");
  let numbers = [];
  for (let i = 0; i < n; i++) {
    let m = prompt(`numbers[${i}] = `);
    numbers.push(m);
  }

  console.log(numbers.length);

  let newNumbers = [];
  let find = 0;
  for (let i = 0; i < numbers.length / 2; i++) {
    newNumbers[i] = numbers[i];
    if (newNumbers[i] != numbers[n - 1]) {
      find = 1;
      break;
    }
    n--;
  }
  if (find == 1) {
    console.log("Đây không phải mảng đối xứng.");
  } else {
    console.log("Đây là mảng đối xứng.");
    console.log("Danh sách mảng đối xứng: ", numbers);
  }
}

check();
