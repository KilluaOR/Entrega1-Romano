document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".books");

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
            <button class="add-to-cart" data-book="${book.nombre}">Agregar al carrito</button>
          </div>`
    )
    .join("");

  section.innerHTML = `
    <h2 class="books-title">Featured Books</h2>
    <div id="books-container" class="books-list">
      ${myBooks}
    </div>
  `;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  };

  const updateCartCounter = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCounter = document.querySelector(".cart-counter");
    if (cartCounter) {
      cartCounter.textContent = totalItems;
      cartCounter.style.display = totalItems > 0 ? "block" : "none";
    }
  };

  const addToCart = (bookName) => {
    const book = libreria.find((b) => b.nombre === bookName);
    if (book) {
      const existingItem = cart.find((item) => item.nombre === bookName);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          ...book,
          quantity: 1,
        });
      }
      saveCart();

      const button = document.querySelector(`[data-book="${bookName}"]`);
      if (button) {
        const originalText = button.textContent;
        button.textContent = "¡Agregado!";
        button.style.backgroundColor = "#4CAF50";
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = "";
        }, 1000);
      }
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const bookName = e.target.getAttribute("data-book");
      addToCart(bookName);
    }
  });

  updateCartCounter();

  const input = document.getElementById("search-input");
  const books = document.querySelectorAll(".book-card");
  const notFoundMsg = document.getElementById("not-found-message");

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
