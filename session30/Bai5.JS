function check(inputString) {
  const chu = inputString.split(" ");
  const lap = chu.map((word) => {
    const chuCuoi = word.charAt(word.length - 1).toUpperCase();
    return word.slice(0, -1) + chuCuoi;
  });
  return lap.join(" ");
}

const n = prompt("Nhập vào một chuỗi bất kỳ:");
const m = check(n);
console.log(m);
