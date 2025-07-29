// const params = new URLSearchParams(window.location.search);
// const bookId = params.get("id");
const section = document.querySelector("section");
const button = document.querySelector("button.checkout");
const input = document.querySelector("input");

button.addEventListener("click", handleClick);

function handleClick() {
  section.innerHTML = `
    <h2 class="cartel-final">Gracias por tu compra!</h2>`;
}
