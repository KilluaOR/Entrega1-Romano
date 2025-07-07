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
  console.log("operacion", op);
  switch (op) {
    case 1:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    case 2:
      venta();
      break;
    case 3:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    case 4:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    case 5:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    case 6:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    case 7:
      alert(
        "En este momento no contamos con información sobre este libro, intente más tarde."
      );
      break;
    default:
      alert("Por favor elija una de las opciones disponibles");
      principal();
  }
};

for (let i = 0; i < biblioteca.length; i++) {
  lista += `${biblioteca[i]}\n`;
}
let buscarLibro = (titulo) => {
  let pregunta = prompt(`Elige el libro que buscabas: ` + lista);
  operacion(Number(pregunta));
};

function principal() {
  buscarLibro();
  console.log("Arrancamos");
}
principal();
