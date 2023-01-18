const numerosCalculadoraSuma = [];
const numerosCalculadoraResta = [];
const numerosCalculadoraDiv = [];
const numerosCalculadoraMult = [];

let nuevoNumero = prompt("Hola desea usar la calculadora? Si/No.");

if (nuevoNumero == "" || nuevoNumero == null) {
  alert("Debe introducir al menos 2 numeros para empezar.");
} else if (nuevoNumero == "No" || nuevoNumero == "NO" || nuevoNumero == "no") {
  alert("Hasta la proxima!");
} else if (nuevoNumero == "si" || nuevoNumero == "SI" || nuevoNumero == "Si") {
  alert(
    "Introduzca solo valores numericos, cuando desee finalizar pulse cancelar."
  );
}

const askForNumber = () => {
  nuevoNumero = prompt("Introduzca un numero");
  nuevoNumero = parseFloat(nuevoNumero);
  if (isNaN(nuevoNumero)) {
    if (numerosCalculadoraDiv.length < 1) {
      window.alert("Debe introducir al menos 1 numero para empezar.");
      askForNumber();
    } else if (numerosCalculadoraDiv.length == 1) {
      if (isNaN(numerosCalculadoraDiv[1])) {
        console.log(
          "La raiz cuadrada del numero es:" +
            Math.sqrt(numerosCalculadoraDiv[0]).toFixed(3)
        );
      }
      if (isNaN(numerosCalculadoraDiv[0])) {
        console.log(
          "La raiz cuadrada del numero es:" +
            Math.sqrt(numerosCalculadoraDiv[1]).toFixed(3)
        );
      }
    } else if (numerosCalculadoraDiv.length > 1) {
      let suma = numerosCalculadoraSuma.reduce(
        (anteriorNumero, numeroActual) => anteriorNumero + numeroActual
      );
      let resta = numerosCalculadoraResta.reduce(
        (anteriorNumero, numeroActual) => anteriorNumero - numeroActual
      );
      let multiplicacion = numerosCalculadoraDiv.reduce(
        (anteriorNumero, numeroActual) => anteriorNumero * numeroActual
      );
      let division = numerosCalculadoraMult.reduce(
        (anteriorNumero, numeroActual) => anteriorNumero / numeroActual
      );
      if (suma % 2 === 0) {
        console.log("El valor de su suma es: " + suma);
      } else {
        console.log("El valor de su suma es: " + suma.toFixed(3));
      }
      if (resta % 2 === 0) {
        console.log("El valor de su resta es: " + resta);
      } else {
        console.log("El valor de su resta es: " + resta.toFixed(3));
      }
      if (multiplicacion % 2 === 0) {
        console.log("El valor de su multiplicacion es: " + multiplicacion);
      } else {
        console.log(
          "El valor de su multiplicacion es: " + multiplicacion.toFixed(3)
        );
      }
      if (division % 2 === 0) {
        console.log("El valor de su division es: " + division);
      } else {
        console.log("El valor de su division es: " + division.toFixed(3));
      }
    }
  } else if (!isNaN(nuevoNumero)) {
    numerosCalculadoraSuma.push(nuevoNumero);
    numerosCalculadoraResta.push(nuevoNumero);
    numerosCalculadoraDiv.push(nuevoNumero);
    numerosCalculadoraMult.push(nuevoNumero);
    askForNumber();
  }
};

askForNumber();
