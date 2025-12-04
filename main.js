const theops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "**": (a, b) => a ** b,
  "√": (a) => Math.sqrt(a),
  cos: (a) => Math.cos(a),
  sin: (a) => Math.sin(a),
  tan: (a) => Math.tan(a),
  log: (a) => Math.log(a),
};
let op = "";
let num2 = "";
let num1 = "";
let history = document.getElementsByClassName("his")[0];
let btns = document.getElementsByClassName("btns");
let bg = document.getElementsByClassName("bg")[0];
let res = document.getElementsByClassName("res")[0];
document.getElementById("extention").addEventListener("click", hide);
function hide() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.toggle("hidden");
  }
  bg.classList.toggle("bgmin");
  res.classList.toggle("resmin");
  history.classList.toggle("hismin")
}
function addFunctionality(opr) {
  if (num2 == "0" && opr == "/") {
  } else if (num1 != "") {
    op = opr;
    history.textContent = `${num1} ${op}`;
    res.textContent = "";
  }
}
let fnss = document.getElementsByClassName("extention");

Array.from(fnss).forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent == "√x") {
      res.textContent = num1 = Math.sqrt(num1 == "" ? Number(num2) : Number(num1));
      num2 = "";
      op = "";
    } else if (e.textContent == "cos" || e.textContent == "sin" || e.textContent == "tan") {
      let ans = eval(
        `Math.${e.textContent}(${num1 == "" ? num2 * Math.PI / 180 : num1 * Math.PI / 180})`
      );
      res.textContent = num1 = Math.abs(ans) < 1e-10 ? 0 : ans;
      num2 = "";
      op = "";
    } else {
      if (num1 != "" && num2 == "") {
        history.textContent = `${num1} ^`;
        op = "^"
        res.textContent = "";
      }
    }
  });
});


document.getElementById("eq").addEventListener("click", () => {
  if (op != "" && num2 != "" && num1 != "") {
    let result = 0;
    if (op == "^") {
      result = eval(`Math.pow(${num1},${num2})`)
    } else {
      result = eval(`${num1} ${op} ${num2}`);
    }
    history.textContent += `${num2} =`;

    res.textContent = result;
     num1 = result.toString();
    num2 = "";
    op = "";
  }
});
function addNumber(number) {
  if (op == "") {
    num1 += number;
    res.textContent = num1;
  } else {
    num2 += number;
    res.textContent = num2;
  }
}
function deleteAll() {
  num1 = num2 = op = "";
  res.textContent = "";
  history.textContent = " ";
}
function deleteThis() {
  if (num2 == "" && op == ""&&num1.length > 0) {
    num1 = num1.slice(0,num1.length-1);
    res.textContent = num1;
  } else if(num1 != "" && op!= ""&&num2.length > 0){
    num2 = num2.slice(0, num1.length - 1);
    res.textContent = num2;
    
  }
}
function addPoint() {
  if (num1.length > 0 && op == "") {
    if (!num1.includes(".")) {
      num1 += "."
      res.textContent = num1;
    }
  } else if (num2.length > 0) {
      if (!num2.includes(".")) {
      num2 += "."
      res.textContent = num2;
    }
  }
}