const libreria = [
  {
    nombre: "The Enchanted Forest",
    descripcion: "A tale of magic and adventure",
    precio: "$20.000",
  },
  {
    nombre: "Space Odyssey",
    descripcion: "Journey through the cosmos",
    precio: "$15.000",
  },
  {
    nombre: "The Secret Code",
    descripcion: "Unravel the mystery",
    precio: "$30.000",
  },
];

// Elementos del DOM
const input = document.getElementById("search-input");
const booksContainer = document.getElementById("books-container");
const books = booksContainer.querySelectorAll(
  "div.flex.h-full.flex-1.flex-col"
);
const notFoundMsg = document.getElementById("not-found-message");

// Escuchar el input de búsqueda
input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase().trim();
  let anyMatch = false;

  books.forEach((bookEl, index) => {
    const { nombre, descripcion } = libreria[index];
    const match =
      nombre.toLowerCase().includes(searchTerm) ||
      descripcion.toLowerCase().includes(searchTerm);

    // Mostrar u ocultar el libro
    bookEl.style.display = match ? "flex" : "none";
    if (match) anyMatch = true;
  });

  // Mostrar mensaje si no hay coincidencias
  notFoundMsg.classList.toggle("hidden", anyMatch || searchTerm === "");
});

// Acá la idea es que cuando buscas un libro en el buscador, la página vaya mostrando solo las coincidencias//
// function fn(libreria) {
// 		const buscarLibro = libreria.find(
// 			libro => libro.nombre ===
// 		)
// 		return ``
// 	}

// 	console.log(fn(libreria))
// let compra = () => {
//   const accionCompra = alert(
//     "Ve a la pestaña Buscar y busca tu libro de preferencia"
//   );
// };
// let venta = () => {
//   const accionVenta = alert(
//     "Ve a la pestaña Vender y publica el libro que desees vender"
//   );
// };
// let operacion = (op) => {
//   console.log("operacion", op);
//   switch (op) {
//     case 1:
//       compra();
//       break;
//     case 2:
//       venta();
//       break;
//     default:
//       principal();
//   }
// };

// function llamarAction() {
//   let pregunta = prompt(`Qué quiere hacer:
// 1_Comprar libros
// 2_Vender libros`);

//   operacion(Number(pregunta));
// }

// function principal() {
//   llamarAction();
//   console.log("Arrancamos");
// }
// principal();
