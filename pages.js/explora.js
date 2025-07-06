const biblioteca = [
  "1_The Enchante Forest",
  "2_Shadows of the Past",
  "3_Beyon the Stars",
  "4_The Silent Witness",
  "5_Echoes of Tomorrow",
  "6_Crimson Tide",
  "7_Whispers in the Wind",
];

let lista = "Lista de libros:\n";

let operacion = (op) => {
  
  if (console.log("operacion", op);) {
    alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
  } else {
      principal();
  }
};

let buscarLibro = (titulo) => {
  for (let i = 0; i < biblioteca.length; i++) {
    lista += `${biblioteca[i]}\n`;
  }
  let pregunta = prompt(`Elige el libro que buscabas: ` + lista);
  operacion(Number(pregunta));
};

function principal() {
  buscarLibro();
  console.log("Arrancamos");
}
principal();
