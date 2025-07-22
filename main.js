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
const books = booksContainer.querySelectorAll(".book-card");
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
