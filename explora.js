const biblioteca = [
  "1- The Enchante Forest",
  "2- Shadows of the Past",
  "3- Beyon the Stars",
  "4- The Silent Witness",
  "5- Echoes of Tomorrow",
  "6- Crimson Tide",
  "7- Whispers in the Wind",
];

let operacion = (op) => {
  console.log("operacion", op);
  alert(
    "En este momento no contamos con información sobre este libro, intente más tarde."
  );
};

let buscarLibro = (titulo) => {
  let pregunta = prompt(`Elige el libro que buscabas: ` + biblioteca);
  operacion(Number(pregunta));
};

function principal() {
  buscarLibro();
  console.log("Arrancamos");
}
principal();
