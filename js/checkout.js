document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalEl = document.querySelector("#total");
  const checkoutBtn = document.querySelector(".checkout__button");
  const container = document.querySelector(".book-card");

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-white text-center p-4">Tu carrito está vacío</p>`;
    if (totalEl) totalEl.textContent = "$0";
  } else {
    let total = 0;

    cart.forEach((item) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      const bookDiv = document.createElement("div");
      bookDiv.className = "flex gap-4 bg-[#18151e] px-4 py-3 justify-between";

      bookDiv.innerHTML = `
        <div class="flex items-start gap-4">
          <div class="bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg w-[70px]"
               style="background-image: url('${item.image}')"></div>
          <div class="flex flex-1 flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal">${
              item.title
            }</p>
            <p class="text-[#a89ebd] text-sm font-normal leading-normal">Cantidad: ${
              item.quantity
            }</p>
            <p class="text-[#a89ebd] text-sm font-normal leading-normal">$${item.price.toLocaleString(
              "es-AR"
            )}</p>
          </div>
        </div>
      `;
      container.appendChild(bookDiv);
    });

    if (totalEl) totalEl.textContent = `$${total.toLocaleString("es-AR")}`;
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      document.body.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-screen text-center text-white bg-[#18151e]">
          <h1 class="text-2xl font-bold mb-4">¡Gracias por tu compra!</h1>
          <p class="text-[#a89ebd]">Tu pedido será procesado en breve.</p>
        </div>
      `;
      localStorage.removeItem("cart");
    });
  }
});
