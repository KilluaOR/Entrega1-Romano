const biblioteca = [
  "The Enchante Forest",
  "Shadows of the Past",
  "Beyon the Stars",
  "The Silent Witness",
  "Echoes of Tomorrow",
  "Crimson Tide",
  "Whispers in the Wind",
];

let lista = "Lista de libros:\n";

let operacion = (op) => {
  console.log("operacion", op);
  alert(
    "En este momento no contamos con información sobre este libro, intente más tarde."
  );
};

let buscarLibro = (titulo) => {
  for (let i = 0; i < biblioteca.length; i++) {
    lista += `- ${biblioteca[i]}\n`;
  }
  let pregunta = prompt(`Elige el libro que buscabas: ` + lista);
  operacion(Number(pregunta));
};

function principal() {
  buscarLibro();
  console.log("Arrancamos");
}
principal();
