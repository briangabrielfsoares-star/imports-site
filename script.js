let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(product) {
  cart.push(product);
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  let list = document.getElementById("cartList");

  list.innerHTML = "";

  cart.forEach((item, index) => {

    let li = document.createElement("li");

    li.innerHTML = `
      ${item}
      <button onclick="removeFromCart(${index})">
        ❌
      </button>
    `;

    list.appendChild(li);

  });

}

function finalizarCompra() {

  if (cart.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "Olá, quero comprar:%0A";

  cart.forEach(item => {
    mensagem += "- " + item + "%0A";
  });

  window.open(
    "https://wa.me/5531972354299?text=" + mensagem,
    "_blank"
  );

}
