const products = [
  { id: 1, name: "Potion", price: 5 },
  { id: 2, name: "Sword", price: 20 },
  { id: 3, name: "Shield", price: 15 },
];

const container = document.getElementById("products");
products.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${p.name}</strong> - $${p.price} <button onclick="addToCart(${p.id})">Add</button>`;
  container.appendChild(div);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
