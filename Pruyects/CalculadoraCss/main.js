let firstOperator;
let secondOperator;
let savedNumber = [];
let number = [];
const body = document.querySelector("body");

body.addEventListener("DOMContentLoaded", calculator());

function calculator() {
  const outCome = document.querySelector(".outCome");
  const reset = document.querySelector(".reset");
  const addition = document.querySelector(".addition ");
  const subtraction = document.querySelector(".subtraction");
  const divide = document.querySelector(".divide");
  const multiply = document.querySelector(".multiply");
  const equal = document.querySelector(".equal");
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");
  const five = document.querySelector(".five");
  const six = document.querySelector(".six");
  const seven = document.querySelector(".seven");
  const eight = document.querySelector(".eight");
  const nine = document.querySelector(".nine");
  const cero = document.querySelector(".cero");
  const point = document.querySelector(".point");
  const sign = document.querySelector(".sign");
  outCome.textContent = "0";
  sign.onclick = () => {
    secondOperator = outCome.textContent;
    number = [];
    firstOperator = "";
    savedNumber = [];
    number.push(parseFloat(secondOperator) * -1);
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  point.onclick = () => {
    if (outCome.textContent === "0") {
      firstOperator = "";
      savedNumber = [];
      number.push("0");
      number.push(".");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (number.includes(".") === false) {
      firstOperator = "";
      savedNumber = [];
      number.push(".");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (outCome.textContent === ".") {
      firstOperator = "";
      savedNumber = [];
      number = [];
      number.push("0");
      number.push(".");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    console.log(number);
    console.log(savedNumber);
  };

  one.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("1");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
    console.log(number);
    console.log(savedNumber);
  };

  two.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("2");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  three.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("3");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  four.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("4");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  five.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("5");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  six.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("6");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  seven.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("7");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  eight.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("8");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  nine.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("9");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  cero.onclick = () => {
    firstOperator = "";
    savedNumber = [];
    number.push("0");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  };

  reset.onclick = () => {
    start();
    resetNumber();
    outCome.textContent = "0";
  };

  addition.onclick = () => {
    if (firstOperator !== "") {
      number.push(firstOperator);
      firstOperator = "";
    }

    if (
      number[number.length - 1] !== "-" &&
      number[number.length - 1] !== "+" &&
      number[number.length - 1] !== "/" &&
      number[number.length - 1] !== "*" &&
      number[number.length - 1] !== "."
    ) {
      number.push("+");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (
      number[number.length - 1] === "-" ||
      number[number.length - 1] === "+" ||
      number[number.length - 1] === "/" ||
      number[number.length - 1] === "*"
    ) {
      number.pop();
      number.push("+");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }
  };

  subtraction.onclick = () => {
    if (firstOperator !== "") {
      number.push(firstOperator);
      firstOperator = "";
    }

    if (
      number[number.length - 1] !== "-" &&
      number[number.length - 1] !== "+" &&
      number[number.length - 1] !== "/" &&
      number[number.length - 1] !== "*" &&
      number[number.length - 1] !== "."
    ) {
      number.push("-");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (
      number[number.length - 1] === "-" ||
      number[number.length - 1] === "+" ||
      number[number.length - 1] === "/" ||
      number[number.length - 1] === "*"
    ) {
      number.pop();
      number.push("-");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }
  };

  multiply.onclick = () => {
    if (firstOperator !== "") {
      number.push(firstOperator);
      firstOperator = "";
    }

    if (
      number[number.length - 1] !== "-" &&
      number[number.length - 1] !== "+" &&
      number[number.length - 1] !== "/" &&
      number[number.length - 1] !== "*" &&
      number[number.length - 1] !== "."
    ) {
      number.push("*");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (
      number[number.length - 1] === "-" ||
      number[number.length - 1] === "+" ||
      number[number.length - 1] === "/" ||
      number[number.length - 1] === "*"
    ) {
      number.pop();
      number.push("*");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }
  };

  divide.onclick = () => {
    if (firstOperator !== "") {
      number.push(firstOperator);
      firstOperator = "";
    }

    if (
      number[number.length - 1] !== "-" &&
      number[number.length - 1] !== "+" &&
      number[number.length - 1] !== "/" &&
      number[number.length - 1] !== "*" &&
      number[number.length - 1] !== "."
    ) {
      number.push("/");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }

    if (
      number[number.length - 1] === "-" ||
      number[number.length - 1] === "+" ||
      number[number.length - 1] === "/" ||
      number[number.length - 1] === "*"
    ) {
      number.pop();
      number.push("/");
      savedNumber = number.join("");
      outCome.textContent = savedNumber;
    }
  };

  equal.onclick = () => {
    outCome.textContent = eval(outCome.textContent);
    firstOperator = outCome.textContent;
    number = [];
    number.push(firstOperator);
    savedNumber = number.join("");
    number = [];
    outCome.textContent = savedNumber;
    savedNumber = [];
    infinityError();
  };

  const infinityError = () => {
    if (outCome.textContent === Infinity) {
      outCome.textContent = "Error";
    }
  };

  const start = () => {
    outCome.textContent = "";
    firstOperator = "";
  };

  const resetNumber = () => {
    number = [];
    savedNumber = [];
  };

  if (outCome.textContent === ".") {
    firstOperator = "";
    savedNumber = [];
    number.push("0");
    number.push(".");
    savedNumber = number.join("");
    outCome.textContent = savedNumber;
  }
}
