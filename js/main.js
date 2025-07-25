document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".books");

  // Generar los libros
  const myBooks = libreria
    .map(
      (book) =>
        `<div class="book-card" data-title="${book.nombre}">
            <div class="book-cover">
              <img src="${book.imagen}" alt="${book.nombre}" loading="lazy"
              onerror="this.src='https://via.placeholder.com/200x300/cccccc/000000?text=Image+Not+Found'">
            </div>
            <p class="book-title">${book.nombre}</p>
            <p class="book-desc">${book.descripcion}</p>
            <p class="book-price">${book.precio}</p>
          </div>`
    )
    .join("");

  section.innerHTML = `
    <h2 class="books-title">Featured Books</h2>
    <div id="books-container" class="books-list">
      ${myBooks}
    </div>
  `;

  const input = document.getElementById("search-input");
  const books = document.querySelectorAll(".book-card");
  const notFoundMsg = document.getElementById("not-found-message");

  // Filtro de búsqueda
  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase().trim();
    let anyMatch = false;

    books.forEach((bookEl, index) => {
      const libro = libreria[index];
      const match =
        libro.nombre.toLowerCase().includes(searchTerm) ||
        libro.descripcion.toLowerCase().includes(searchTerm);

      bookEl.style.display = match ? "flex" : "none";
      if (match) anyMatch = true;
    });

    if (notFoundMsg) {
      notFoundMsg.classList.toggle("hidden", anyMatch || searchTerm === "");
    }
  });
});
