document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const checkoutItems = document.querySelector(".checkout__items");
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");
  const thankYouElement = document.getElementById("thank-you");
  const checkoutButton = document.querySelector(".checkout__button");

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, ""));
  };

  const displayCartItems = () => {
    if (cart.length === 0) {
      checkoutItems.innerHTML =
        '<p class="text-white text-center py-4">Tu carrito está vacío</p>';
      return;
    }

    const itemsHTML = cart
      .map(
        (item) => `
        <div class="flex items-center justify-between p-4 border-b border-gray-700">
          <div class="flex items-center space-x-4">
            <img src="../${item.imagen.replace("./", "")}" alt="${
          item.nombre
        }" class="w-16 h-20 object-cover rounded">
            <div>
              <h3 class="text-white font-medium">${item.nombre}</h3>
              <p class="text-gray-400 text-sm">Cantidad: ${item.quantity}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-white">${item.precio}</p>
            <p class="text-gray-400 text-sm">Total: $${
              parsePrice(item.precio) * item.quantity
            }</p>
          </div>
        </div>
      `
      )
      .join("");

    checkoutItems.innerHTML = itemsHTML;
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce((total, item) => {
      return total + parsePrice(item.precio) * item.quantity;
    }, 0);

    const shipping = 0;
    const total = subtotal + shipping;

    subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
    totalElement.textContent = `$${total.toLocaleString()}`;
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    thankYouElement.classList.remove("hidden");

    checkoutButton.style.display = "none";

    localStorage.removeItem("cart");

    checkoutItems.innerHTML = "";
    subtotalElement.textContent = "$0";
    totalElement.textContent = "$0";
  };

  checkoutButton.addEventListener("click", handleCheckout);

  displayCartItems();
  calculateTotals();
});
