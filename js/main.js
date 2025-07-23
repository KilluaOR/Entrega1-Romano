const section = document.querySelector("section.books");
const myBooks = libreria.map(
  (book) =>
    `<div id="books-container" class="books-list">
  <div class="book-card" data-title="The Enchanted Forest">
            <div
              class="book-cover"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiAy_HU0CkJSTOHoxkrQySfGFhnR49NUz1hVBkQt32usWTfjNkU-Lbu1h8qXkWcz35KGofJXDzlDfmdUvY5Z8LECOAjBzFmj3CrJ_QcpXEkJ8_lbWgGyuWAwIJBZJ7Glfb5O7n-IrBrtDoBTFQrYga4jbWmQRdk_SLdHugqi_kwewJz4rtqa0ZC-9I973bL9vkHGyNhf2sMsmXq5I8MOeruqgvOD6AL5wLNGZLcc3plo6xLqtB3GWHngU6Zm5yt3Am5aGsefLScA');
              "
            ></div>
            <p class="book-title">${book.nombre}</p>
            <p class="book-desc">${book.descripcion}</p>
            <p class="book-price">${book.precio}</p>
          </div>
          </div>`
);
section.innerHTML = myBooks.join("");
// Elementos del DOM
// const input = document.getElementById("search-input");
// const booksContainer = document.getElementById("books-container");
// const books = booksContainer.querySelectorAll(".book-card");
// const notFoundMsg = document.getElementById("not-found-message");

// // Escuchar el input de búsqueda
// input.addEventListener("input", () => {
//   const searchTerm = input.value.toLowerCase().trim();
//   let anyMatch = false;

//   books.forEach((bookEl, index) => {
//     const { nombre, descripcion } = myBooks[libreria];
//     const match =
//       nombre.toLowerCase().includes(searchTerm) ||
//       descripcion.toLowerCase().includes(searchTerm);

//     // Mostrar u ocultar el libro
//     bookEl.style.display = match ? "flex" : "none";
//     if (match) anyMatch = true;
//   });

//   // Mostrar mensaje si no hay coincidencias
//   notFoundMsg.classList.toggle("hidden", anyMatch || searchTerm === "");
// });
