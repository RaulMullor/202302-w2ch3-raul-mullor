let numero1 = prompt("Introduzca un numero!");
let numero2 = prompt("Introduzca un segundo numero!");
let resultado = [];

function sumar(a, b) {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return num1 + num2;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

if (numero1 !== "" && numero1 !== null && numero2 !== "" && numero2 !== null) {
  let a = parseInt(numero1, 10);
  let b = parseInt(numero2, 10);
  if (isNaN(a) || isNaN(b)) {
    console.log("Esto no es un numero");
  } else {
    sumar(a, b);
    resta(a, b);
    multiplicar(a, b);
    division(a, b);
    resultado.push(sumar(a, b), resta(a, b), multiplicar(a, b), division(a, b));
    console.log("El resultado de tu suma es: " + sumar(a, b).toFixed(3));
    console.log("El resultado de tu resta es: " + resta(a, b).toFixed(3));
    if ((a * b) % 2 === 0) {
      console.log("El resultado de tu multiplicar es: " + multiplicar(a, b));
    } else {
      console.log(
        "El resultado de tu multiplicar es: " + multiplicar(a, b).toFixed(3)
      );
    }
    if ((a / b) % 2 === 0) {
      console.log("El resultado de tu division es: " + division(a, b));
    } else {
      console.log(
        "El resultado de tu division es: " + division(a, b).toFixed(3)
      );
    }
    console.log(resultado);
  }
} else if (
  (numero1 == "" || numero1 == null) &&
  numero2 !== "" &&
  numero2 !== null
) {
  let b = parseInt(numero2, 10);
  if (isNaN(b)) {
    console.log("Esto no es un numero");
  } else {
    console.log(Math.sqrt(b));
  }
} else if (
  (numero2 == "" || numero2 == null) &&
  numero1 !== "" &&
  numero1 !== null
) {
  let a = parseInt(numero1, 10);
  if (isNaN(a)) {
    console.log("Esto no es un numero");
  } else {
    console.log(Math.sqrt(a));
  }
}
