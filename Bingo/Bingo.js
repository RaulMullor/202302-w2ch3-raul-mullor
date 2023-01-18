const min = 1;
const max = 75;
const nextNum = [];
let carton = [];
let puntosRanking = [
  "15 puntos jugador/a Pepe",
  "20 puntos jugador/a Maria",
  "10 puntos jugador/a Juan",
];
let puntosRankingOrdenados = puntosRanking.sort();
let puntosPartida = 0;
let line1 = [];
let line2 = [];
let line3 = [];
let newUser = "";

const infoPuntos = () => {
  window.alert("Hay 75 bolas en el bombo, se sacará una bola cada turno");
  window.alert(
    "Se ganaran 5 puntos por cada turno que no gastes para completar tu BINGO"
  );
  window.alert("p. ej. Si acabas tu BINGO en 50 turnos (25 * 5 = 125 puntos)");
};

const bienvenidaYRegistro = () => {
  newUser = prompt("Cual es su nombre de usuario?");
  let userList = "Bienvenido " + newUser;
  console.log(userList);
};

function getRandomInt(min, max) {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1) + num1);
}

const ordenNumerosBombo = () => {
  while (nextNum.length < max) {
    let numeroAleatorio = Math.ceil(Math.random() * max);
    let existe = false;
    for (let i = 0; i < nextNum.length; i++) {
      if (nextNum[i] == numeroAleatorio) {
        existe = true;
        break;
      }
    }
    if (existe == false) {
      nextNum[nextNum.length] = numeroAleatorio;
    }
  }
};

const generarCarton = () => {
  const cantidadNumerosCarton = 15;
  let chequeoCarton = "";
  do {
    let numeroRandom = getRandomInt(min, max);
    while (carton.includes(numeroRandom) == !true) {
      carton.push(parseInt(numeroRandom));
      carton.sort();
    }
  } while (carton.length < cantidadNumerosCarton);
  console.log("Los numeros de su carton son: " + carton);
  console.log(
    "La primera linea sera:" +
      carton[0] +
      "/" +
      carton[1] +
      "/" +
      carton[2] +
      "/" +
      carton[3] +
      "/" +
      carton[4]
  );
  console.log(
    "La segunda linea sera:" +
      carton[5] +
      "/" +
      carton[6] +
      "/" +
      carton[7] +
      "/" +
      carton[8] +
      "/" +
      carton[9]
  );
  console.log(
    "La tercera linea sera:" +
      carton[10] +
      "/" +
      carton[11] +
      "/" +
      carton[12] +
      "/" +
      carton[13] +
      "/" +
      carton[14]
  );
  chequeoCarton = prompt("Si desea quedarse con su carton escriba: Yes");
  if (
    chequeoCarton == "Yes" ||
    chequeoCarton == "yes" ||
    chequeoCarton == "YES"
  ) {
  } else {
    carton = [];
    generarCarton();
  }
};

const partida = () => {
  const contadorTurnos = [];
  const linea1 = [carton[0], carton[1], carton[2], carton[3], carton[4]];
  const linea2 = [carton[5], carton[6], carton[7], carton[8], carton[9]];
  const linea3 = [carton[10], carton[11], carton[12], carton[13], carton[14]];
  const cartonTotal = [linea1, linea2, linea3];
  let rankingFinal = [];
  for (let x = 0; x <= nextNum.length - 1; x++) {
    if (window.confirm("Desea continuar?") == true) {
      contadorTurnos.push("+1");
      console.table(cartonTotal);
      console.log("Es el turno numero " + contadorTurnos.length);
      console.log("Ha salido el numero " + nextNum[x] + "!!");
      for (let y = 0; y <= linea1.length; y++) {
        if (linea1[y] == nextNum[x]) {
          linea1[y] = "X";
        }
        if (
          linea1[0] == "X" &&
          linea1[1] == "X" &&
          linea1[2] == "X" &&
          linea1[3] == "X" &&
          linea1[4] == "X"
        ) {
          line1.push(1);
          if (line1.length == 1) {
            console.log("LINEA 1!!");
          }
          break;
        }
      }
      for (let y = 0; y <= linea2.length; y++) {
        if (linea2[y] == nextNum[x]) {
          linea2[y] = "X";
        }
        if (
          linea2[0] == "X" &&
          linea2[1] == "X" &&
          linea2[2] == "X" &&
          linea2[3] == "X" &&
          linea2[4] == "X"
        ) {
          line2.push(1);
          if (line2.length == 1) {
            console.log("LINEA 2!!");
          }
          break;
        }
      }
      for (let y = 0; y <= linea3.length; y++) {
        if (linea3[y] == nextNum[x]) {
          linea3[y] = "X";
        }
        if (
          linea3[0] == "X" &&
          linea3[1] == "X" &&
          linea3[2] == "X" &&
          linea3[3] == "X" &&
          linea3[4] == "X"
        ) {
          line3.push(1);
          if (line3.length == 1) {
            console.log("LINEA 3!!");
          }
          break;
        }
      }
      for (let y = 0; y <= linea1.length; y++) {
        if (
          linea1[0] == "X" &&
          linea1[1] == "X" &&
          linea1[2] == "X" &&
          linea1[3] == "X" &&
          linea1[4] == "X" &&
          linea2[0] == "X" &&
          linea2[1] == "X" &&
          linea2[2] == "X" &&
          linea2[3] == "X" &&
          linea2[4] == "X" &&
          linea3[0] == "X" &&
          linea3[1] == "X" &&
          linea3[2] == "X" &&
          linea3[3] == "X" &&
          linea3[4] == "X"
        ) {
          puntosPartida = (75 - contadorTurnos.length) * 5;
          puntosPartida = parseInt(puntosPartida);
          puntosRanking.push(
            puntosPartida + " puntos " + "jugador/a " + newUser
          );
          console.log("BINGO!!!");
          console.log("En un total de " + contadorTurnos.length + " turnos.");
          console.table(puntosRankingOrdenados.sort().reverse());
          if (window.confirm("Desea volver a jugar?") == true) {
            carton = [];
            bingo();
          } else {
            break;
          }
        }
      }
    } else {
      console.log("Hasta la proxima!!");
      break;
    }
  }
};

const bingo = () => {
  bienvenidaYRegistro();
  infoPuntos();
  ordenNumerosBombo();
  generarCarton();
  partida();
};
bingo();
