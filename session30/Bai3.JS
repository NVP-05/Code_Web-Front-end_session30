function check() {
  let n = prompt("Nhập 1 chuỗi bất kì.");
  let end = [];
  let chu = [];
  let so = [];
  let kyTu = [];

  for (let i = 0; i < n.length; i++) {
    if ((n[i] >= "A" && n[i] <= "Z") || (n[i] >= `a` && n[i] <= "z")) {
      chu.push(n[i]);
    } else if (n[i] >= 0 && n[i] <= 9) {
      so.push(n[i]);
    } else {
      kyTu.push(n[i]);
    }
  }
  for (let i = 0; i < chu.length; i++) {
    end.push(chu[i]);
  }
  for (let i = 0; i < so.length; i++) {
    end.push(so[i]);
  }
  for (let i = 0; i < kyTu.length; i++) {
    end.push(kyTu[i]);
  }

  console.log(end);
}

check();
