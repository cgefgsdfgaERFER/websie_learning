const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
const container = document.getElementById("cart-items");
cartItems.forEach(item => {
  const div = document.createElement("div");
  div.textContent = `${item.name} - $${item.price}`;
  container.appendChild(div);
});

document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  localStorage.removeItem("cart");
  this.style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});