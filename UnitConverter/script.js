// Conversion rates
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilo = 2.204 pound

let fromU = document.getElementById("foptns");
let to = document.getElementById("toptns");
let btn = document.getElementById("js-btn-con");
let resShow = document.getElementById("res");
btn.addEventListener("click", function () {
  let vl = document.getElementById("js-inpt").value;
  if (Number.isInteger(Number(vl.trim()))) {
  render(String(fromU.value), String(to.value), vl);
    
  } else {
    resShow.textContent = "pls enter a valid input";
  }
});

function render(fromU, to, vl) {
  let sum = 0;
  let res = "";
  if (fromU === to) {
    alert("both are the same");
    return;
  } else if (fromU === "base2") {
    for (let i = 0; i < vl.length; i++) {
      sum += Number(vl[vl.length - 1 - i]) * 2 ** i;
    }
  } else if (fromU == "base8") {
    for (let i = 0; i < vl.length; i++) {
      sum += Number(vl[vl.length - 1 - i]) * 8 ** i;
    }
  } else {
    sum = Number(vl);
  }

  if (to === "base2") {
    if (sum == 0) {
      return "0";
    }
    while (sum > 0) {
      res = (sum % 2) + res;
      sum = Math.floor(sum / 2);
    }
  } else if (to === "base8") {
      if (sum == 0) {
      return "0";
    }
    while (sum > 0) {
      res = (sum % 8) + res;
      sum = Math.floor(sum / 8);
    }
  } else {
    res = String(sum)
  }
  if (res.length > 55) {
    resShow.textContent = "the number is too long";
    return;
  } else {
    resShow.textContent = res;
  }
}
