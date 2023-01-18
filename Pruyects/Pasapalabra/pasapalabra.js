function temporizador() {
  window.alert("Se acabó el tiempo.");
}
setTimeout(temporizador, 130000);
clearTimeout(temporizador);

let rosco = 0;
let partidaNumero = [];
let newUser = "";
const aciertos = [];
const fallos = [];
const ranking = [6 + " aciertos " + "Pedro", 9 + " aciertos " + "Patricia"];
let pregunta = "";
const aciertosYFallos = [];

const inicioP = () => {
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  rosco = getRandomInt();
};

const bienvenidaYRegistro = () => {
  newUser = prompt("Cual es su nombre de usuario?");
  let userList = "Bienvenido " + newUser;
  console.log(userList);
};
const queRosco = () => {
  if (rosco == 0) {
    partidaNumero = preguntas;
  }
  if (rosco == 1) {
    partidaNumero = preguntas1;
  }
  if (rosco == 2) {
    partidaNumero = preguntas2;
  }
};

const preguntas = [
  {
    letter: "a",
    answer: "abollado",
    status: 0,
    question: "CON LA A. Harto de comer.",
  },
  {
    letter: "b",
    answer: "babieca",
    status: 0,
    question: "CON LA B. Persona boba y de poco carácter.",
  },
  {
    letter: "c",
    answer: "cambado",
    status: 0,
    question: "CON LA C.  (1) Curvado, torcido. (2) Bebido, borracho.",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "escaldón ",
    status: 0,
    question: "CON LA E. Preparado de gofio y caldo o leche.",
  },
  {
    letter: "f",
    answer: "fisco",
    status: 0,
    question: "CON LA F. Un trozo, pedazo, cacho.",
  },
  {
    letter: "g",
    answer: "gofio",
    status: 0,
    question:
      "CON LA G. Harina tostada de millo o de trigo. Alimento de origen guanche, muy usado en la actualidad",
  },
  { letter: "h", answer: "hola", status: 0, question: "CON LA H. saludo" },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Varg Vikernes quemó al menos 7, Y lo sabes",
  },
  {
    letter: "j",
    answer: "jocicudo",
    status: 0,
    question: "CON LA J. Se dice de la persona entrometida o curiosa en exceso",
  },
  {
    letter: "k",
    answer: "kinegua",
    status: 0,
    question: "CON LA K. Marca de papas (de King Edward).",
  },
  {
    letter: "l",
    answer: "lasca",
    status: 0,
    question:
      "CON LA L. Filete de carne limpia. Pedazo que se corta de una cosa. ",
  },
  {
    letter: "m",
    answer: "machango",
    status: 0,
    question:
      "CON LA M.  Como insulto: pelele, payaso, tonto del culo. Si es sin faltar, entonces se refiere a un muñeco.",
  },
  {
    letter: "n",
    answer: "nalgada",
    status: 0,
    question: "CON LA N. Torta en la nalga.",
  },
  {
    letter: "ñ",
    answer: "ñame",
    status: 0,
    question: "CON LA Ñ. Además de un tuberculo que se come, significa pie.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "pachanga",
    status: 0,
    question:
      "CON LA P. (1)Bollo relleno de crema. (2) Jugar un partido entre amigos de futbol",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question: "CON LA Q. Preparado lácteo sólido.",
  },
  {
    letter: "r",
    answer: "ruina",
    status: 0,
    question: "CON LA R. Aguien de bajos instintos. Tambien una laja.",
  },
  {
    letter: "s",
    answer: "sobada",
    status: 0,
    question: "CON LA S. Dormida larga y profunda.",
  },
  {
    letter: "t",
    answer: "tolete",
    status: 0,
    question: "CON LA T.  (1) Bobo/a, Tonto/a (suele ser cariñoso). (2) Cuca .",
  },
  {
    letter: "u",
    answer: "uno",
    status: 0,
    question: "CON LA U. Juego de cartas muy popular entre los chavales.",
  },
  {
    letter: "v",
    answer: "varar",
    status: 0,
    question: "CON LA V. Coger olas (hacer surf).",
  },
  {
    letter: "w",
    answer: "winchester",
    status: 0,
    question: "CON LA W. Ciudad situada en el extremo sur de Inglaterra",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "yeyo",
    status: 0,
    question: "CON LA Y. Un mareo, desmayo, achuchon, vaido.",
  },
  {
    letter: "z",
    answer: "zachar",
    status: 0,
    question:
      "CON LA Z. Usar un sacho para desgajar la planta y asi poder recogerla.",
  },
];
const preguntas1 = [
  {
    letter: "a",
    answer: "argel",
    status: 0,
    question: "CON LA A. Capital de Argelia .",
  },
  {
    letter: "b",
    answer: "berlín",
    status: 0,
    question: "CON LA B. Capital de Alemania.",
  },
  {
    letter: "c",
    answer: "copenhague",
    status: 0,
    question: "CON LA C.  Capital de Dinamarca.",
  },
  {
    letter: "d",
    answer: "doha",
    status: 0,
    question: "CON LA D. Capital de Catar",
  },
  {
    letter: "e",
    answer: "estocolmo ",
    status: 0,
    question: "CON LA E. Capital de Suecia.",
  },
  {
    letter: "f",
    answer: "freetown",
    status: 0,
    question: "CON LA F. Capital de Sierra Leona",
  },
  {
    letter: "g",
    answer: "guitega",
    status: 0,
    question: "CON LA G. Capital de Burunti",
  },
  {
    letter: "h",
    answer: "hanói",
    status: 0,
    question: "CON LA H. Capital de Vietnam",
  },
  {
    letter: "i",
    answer: "islamabad",
    status: 0,
    question: "CON LA I. Pakistán",
  },
  {
    letter: "j",
    answer: "jerusalén",
    status: 0,
    question: "CON LA J. Capital de Israel",
  },
  {
    letter: "k",
    answer: "kingston",
    status: 0,
    question: "CON LA K. Capital de Jamaica",
  },
  {
    letter: "l",
    answer: "luanda",
    status: 0,
    question: "CON LA L. Capital de Angola ",
  },
  {
    letter: "m",
    answer: "manila",
    status: 0,
    question: "CON LA M.  Capital de Filipinas",
  },
  {
    letter: "n",
    answer: "nicosia",
    status: 0,
    question: "CON LA N. Capital de Chipre.",
  },
  {
    letter: "ñ",
    answer: "ñame",
    status: 0,
    question: "CON LA Ñ. Además de un pie, significa tuberculo que se come.",
  },
  {
    letter: "o",
    answer: "oslo",
    status: 0,
    question: "CON LA O. Capital de Noruega ",
  },
  {
    letter: "p",
    answer: "panamá",
    status: 0,
    question: "CON LA P. Capital de Panamá",
  },
  {
    letter: "q",
    answer: "quito",
    status: 0,
    question: "CON LA Q. Capital de Ecuador.",
  },
  {
    letter: "r",
    answer: "riad",
    status: 0,
    question: "CON LA R. Capital de Arabia Saudita.",
  },
  {
    letter: "s",
    answer: "sofía",
    status: 0,
    question: "CON LA S. Capital de Bulgaria.",
  },
  {
    letter: "t",
    answer: "tirana",
    status: 0,
    question: "CON LA T. Capital de Albania .",
  },
  {
    letter: "u",
    answer: "ulán bator",
    status: 0,
    question: "CON LA U. Capital de Mongolia.",
  },
  {
    letter: "v",
    answer: "varsovia",
    status: 0,
    question: "CON LA V. Capital de Polonia.",
  },
  {
    letter: "w",
    answer: "wellington",
    status: 0,
    question: "CON LA W. Capital de Nueva Zelanda",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "yakarta",
    status: 0,
    question: "CON LA Y. Capital de Indonesia.",
  },
  {
    letter: "z",
    answer: "zorro",
    status: 0,
    question: "CON LA Z. Mamifero parecido a un perro pequeño.",
  },
];
const preguntas2 = [
  {
    letter: "a",
    answer: "Agata",
    status: 0,
    question: "CON LA A. Piedra preciosa ideal para una gata presumida.",
  },
  {
    letter: "b",
    answer: "Bocata",
    status: 0,
    question: "CON LA B. Bocadillo para gatos barriobajeros.",
  },
  {
    letter: "c",
    answer: "Cegato",
    status: 0,
    question: "CON LA C. Gato que no ve un pijo.",
  },
  {
    letter: "d",
    answer: "Drogata",
    status: 0,
    question: "CON LA D. Gata que se chuta heroina.",
  },
  {
    letter: "e",
    answer: "Engatusar",
    status: 0,
    question:
      "CON LA E. Ganar la voluntad de alguien con halagos para conseguir algo de él.",
  },
  {
    letter: "f",
    answer: "Fragata",
    status: 0,
    question: "CON LA F. Barco de guerra.",
  },
  {
    letter: "g",
    answer: "Gattaca",
    status: 0,
    question: "CON LA G. Película felina de ciencia ficción.",
  },
  {
    letter: "h",
    answer: "Hecatombe",
    status: 0,
    question:
      "CON LA H. Suceso trágico en el que se produce una gran destrucción y muchas desgracias felinas y materiales.",
  },
  {
    letter: "i",
    answer: "Inuncat",
    status: 0,
    question:
      "CON LA I. Plan que se activa para avisar a los gatos de las rieras del Maresme cuando hay previsión de fuertes lluvias.",
  },
  {
    letter: "j",
    answer: "Judicatura",
    status: 0,
    question:
      "CON LA J. Conjunto de jueces y magistrados de un sistema judicial.",
  },
  {
    letter: "k",
    answer: "Kato",
    status: 0,
    question:
      "CON LA K. De nombre Daijiro, apellido del malogrado piloto japonés de MotoGp.",
  },
  {
    letter: "l",
    answer: "Lacatus",
    status: 0,
    question:
      "CON LA L. Jugador del Steaua de Bucarest que aguó la fiesta a los culés en la champions del 86.",
  },
  {
    letter: "m",
    answer: "Mojigato",
    status: 0,
    question:
      "CON LA M. Que muestra exagerados escrúpulos morales o religiosos.",
  },
  {
    letter: "n",
    answer: "Negativo",
    status: 0,
    question: "CON LA N. Gato pesimista que lo ve todo negro.",
  },
  {
    letter: "ñ",
    answer: "ñame",
    status: 0,
    question: "CON LA Ñ. Además de un tuberculo que se come, significa pie.",
  },
  {
    letter: "o",
    answer: "Ocata",
    status: 0,
    question: "CON LA O. Municipio del Maresme.",
  },
  {
    letter: "p",
    answer: "Pelagatos",
    status: 0,
    question:
      "CON LA P. Persona insignificante o mediocre, sin posición social o económica.",
  },
  {
    letter: "q",
    answer: "Qgat",
    status: 0,
    question: "CON LA Q. Acrónimo felino de San Cucufate.",
  },
  {
    letter: "r",
    answer: "Regata",
    status: 0,
    question: "CON LA R. Carrera de embarcaciones felinas.",
  },
  {
    letter: "s",
    answer: "scattergories",
    status: 0,
    question:
      "CON LA S. Conocido juego de mesa que tiene categorias escatológicas.",
  },
  {
    letter: "t",
    answer: "Tocata",
    status: 0,
    question: "CON LA T. Tocadiscos felino.",
  },
  {
    letter: "u",
    answer: "Ural",
    status: 0,
    question: "CON LA U. Gato que proviene de esa cordillera rusa.",
  },
  {
    letter: "v",
    answer: "Vengativo",
    status: 0,
    question:
      "CON LA V. Gato determinado a tomar venganza de cualquier agravio.",
  },
  {
    letter: "w",
    answer: "wellington",
    status: 0,
    question: "CON LA W. Capital de Nueva Zelanda",
  },
  {
    letter: "x",
    answer: "Juntsxcat",
    status: 0,
    question:
      "CONTINE LA X. Partido político que ahora mismo no andan muy unidos.",
  },
  {
    letter: "y",
    answer: "Yucateco",
    status: 0,
    question: "CON LA Y. Felino natural del Yucatán.",
  },
  {
    letter: "z",
    answer: "Zaragata",
    status: 0,
    question: "CON LA Z. Gresca, alboroto de gatas en Zaragoza.",
  },
];

const vueltaPasapalabra = () => {
  for (let x = 0; x < partidaNumero.length; x++) {
    if (partidaNumero[x].status == 0) {
      pregunta = prompt(partidaNumero[x].question);
      pregunta = pregunta.toLowerCase();
      if (pregunta == partidaNumero[x].answer) {
        console.log("acierto");
        aciertos.push("+1");
        aciertosYFallos.push("+1");
        partidaNumero[x].status = 1;
      } else if (pregunta == "pasapalabra") {
        partidaNumero[x].status = 3;
      } else if (pregunta == "end") {
        console.log("Bye");
        break;
      } else {
        console.log("fallo");
        fallos.push("+1");
        aciertosYFallos.push("+1");
        partidaNumero[x].status = 2;
      }
    }
  }
};

const vueltaPasapalabra2 = () => {
  for (let x = 0; x < partidaNumero.length; x++) {
    if (partidaNumero[x].status == 3) {
      pregunta = prompt(partidaNumero[x].question);
      pregunta = pregunta.toLowerCase();
      if (pregunta == partidaNumero[x].answer) {
        console.log("correcto!");
        aciertos.push("+1");
        aciertosYFallos.push("+1");
        partidaNumero[x].status = 1;
      } else if (pregunta == "pasapalabra") {
        partidaNumero[x].status = 3;
      } else if (pregunta == "end") {
        console.log("Bye");
        break;
      } else {
        console.log("incorrecto!");
        fallos.push("+1");
        aciertosYFallos.push("+1");
        partidaNumero[x].status = 2;
      }
    }
  }
};
const juegoCompleto = () => {
  inicioP();
  queRosco();
  bienvenidaYRegistro();
  vueltaPasapalabra();
  if (aciertosYFallos.length < 27) {
    do {
      vueltaPasapalabra2();
    } while (aciertosYFallos.length < 27 && pregunta !== "end");
  }
  if (pregunta == "end") {
    console.log("Su cantidad de aciertos es de " + aciertos.length);
  } else {
    ranking.push(aciertos.length + " aciertos " + newUser);
    console.table(ranking.sort().reverse());
    console.log("Su cantidad de aciertos es de " + aciertos.length);
    console.log("Su cantidad de fallos es de " + fallos.length);
  }
};
juegoCompleto();
