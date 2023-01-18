const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let nuevoUsuario = "";
let nuevoCost = [];

const registroYbienvenida = () => {
  nuevoUsuario = prompt("Porfavor, introduzca su nombre de usuario.");
  if (nuevoUsuario == "") {
    window.alert("El registro no puede estar vacio.");
    registroYbienvenida();
  }
  if (nuevoUsuario !== null) {
    let bienvenidaNuevoUsuario = "Bienvenido " + nuevoUsuario;
    console.log(bienvenidaNuevoUsuario);
  }
};

const costeVuelo = () => {
  nuevoCost = prompt("Introduzca el coste del vuelo.");
  nuevoCost = parseInt(nuevoCost);
  if (isNaN(nuevoCost)) {
    window.alert("Introduce solo valores numericos.");
    costeVuelo();
  }
};

const mostrarVuelosAlUsuario = () => {
  flights.forEach((mostrarVuelos) => {
    if (mostrarVuelos.scale == true) {
      console.log(
        "El vuelo con escala numero " +
          mostrarVuelos.id +
          " sale desde " +
          mostrarVuelos.to +
          " con destino " +
          mostrarVuelos.from +
          " y tiene un precio de " +
          mostrarVuelos.cost +
          " Euros."
      );
    } else {
      console.log(
        "El vuelo sin escala numero " +
          mostrarVuelos.id +
          " sale desde " +
          mostrarVuelos.to +
          " con destino " +
          mostrarVuelos.from +
          " y tiene un precio de " +
          mostrarVuelos.cost +
          " Euros."
      );
    }
  });
};

const mostrarCosteMedioVuelos = () => {
  const cero = 0;
  let total = [];
  flights.forEach((costeTotal) => total.push(costeTotal.cost));
  let precioTotal = total.reduce(
    (valorPrevio, valorActual) => valorPrevio + valorActual,
    cero
  );
  let costeMedioVuelos = [precioTotal / flights.length];
  console.log(
    "El coste medio de los vuelos es de " + costeMedioVuelos + " Euros"
  );
};

const mostrarVuelosConEscalas = () => {
  let cantidadEscalas = [];
  flights.forEach((cuantosVuelosConEscala) => {
    if (cuantosVuelosConEscala.scale == true) {
      cantidadEscalas.push("si");
    }
  });
  console.log(
    "La cantidad de escalas en los vuelos actuales es de " +
      cantidadEscalas.length
  );
};

const mostrarUltimos5Vuelos = () => {
  const reversed = flights.reverse();
  let destinoUltimos5Vuelos = [];
  flights.forEach((destinos) => {
    if (destinoUltimos5Vuelos.length <= 4)
      destinoUltimos5Vuelos.push(destinos.to);
  });
  console.log(
    "Los destinos de los ultimos vuelos disponibles hoy son " +
      destinoUltimos5Vuelos
  );
  const reversed2 = flights.reverse();
};

const ProyectoAirLines = () => {
  registroYbienvenida();
  while (nuevoUsuario == null) {
    window.alert("Ha cancelado el registro.");
    registroYbienvenida();
  }
  mostrarVuelosAlUsuario();
  mostrarCosteMedioVuelos();
  mostrarVuelosConEscalas();
  mostrarUltimos5Vuelos();
};
ProyectoAirLines();

const creadorVuelos = () => {
  let nuevoTo = prompt("Origen del vuelo?");
  let nuevoFrom = prompt("Destino del vuelo?");
  let nuevoScale = window.confirm(
    "Si el vuelo tiene escala pulse aceptar de lo contrario pulse cancelar."
  );
  flights.push({
    id: flights.length,
    to: nuevoTo,
    from: nuevoFrom,
    cost: nuevoCost,
    scale: nuevoScale,
  });
};

const borradorVuelos = () => {
  cancelarVuelo = prompt(
    "Introduce el ID del numero que quieres Eliminar (0 - 15), pulsa cancelar para terminar."
  );
  flights.forEach((cancelarElVuelo, index) => {
    if (cancelarElVuelo.id == cancelarVuelo) {
      delete flights[index];
    }
  });
};

let masVuelos = "";
let cancelarVuelo = "";
let borradorVuelos2 = "";
let userAdmin = prompt("Es usted ADMIN o USER?");
userAdmin = userAdmin.toLowerCase();
console.log(userAdmin);
if (userAdmin == "admin") {
  let opcionesAdmin = window.confirm(
    "Si desea CREAR un vuelo pulse Aceptar,si desea ELIMINAR un vuelo pusle cancelar."
  );
  if (opcionesAdmin == true) {
    window.alert(
      "El numero maximo de vuelos creados simultaneamente es de 15."
    );
    do {
      costeVuelo();
      creadorVuelos();
      masVuelos = window.confirm("Si desea crear otro vuelo pulse Aceptar");
    } while (masVuelos == true && flights.length <= 14);
    mostrarVuelosAlUsuario();
  }
  if (opcionesAdmin == false) {
    do {
      borradorVuelos();
      borradorVuelos2 = window.confirm(
        "Si desea eliminar otro vuelo pulse Aceptar"
      );
    } while (borradorVuelos2 !== false);
    mostrarVuelosAlUsuario();
  }
}

if (userAdmin == "user") {
  let presupuesto = prompt(
    "Introduzca el coste maximo por el que desea filtrar sus vuelos."
  );
  presupuesto = parseInt(presupuesto);
  window.alert("Los vuelos con un coste igual o menor al que busca son: ");
  flights.forEach((vuelosPresupuesto) => {
    if (vuelosPresupuesto.cost <= presupuesto) {
      console.log(
        "El vuelo numero " +
          vuelosPresupuesto.id +
          " sale desde " +
          vuelosPresupuesto.to +
          " con destino " +
          vuelosPresupuesto.from +
          " y tiene un precio de " +
          vuelosPresupuesto.cost +
          " Euros."
      );
    }
  });
}
if (userAdmin !== "user" && userAdmin !== "admin") {
  window.alert("Error asegurese de entrar como ADMIN o USER.");
}
