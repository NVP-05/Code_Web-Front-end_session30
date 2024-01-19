function laTamGiac(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}
function demTamGiac(arr) {
  const n = arr.length;
  let dem = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (laTamGiac(arr[i], arr[j], arr[k])) {
          dem++;
        }
      }
    }
  }

  return dem;
}

let mangSoNguyenDuong = [];
let n = +prompt("Nhập số phần tử có trong mảng.");

for (let i = 0; i < n; i++) {
  let m = +prompt("Nhập các số nguyên dương.");
  mangSoNguyenDuong.push(m);
}
const ketQua = demTamGiac(mangSoNguyenDuong);
console.log(`Số lượng tam giác có thể tạo ra từ mảng là: ${ketQua}`);
