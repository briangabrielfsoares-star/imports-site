let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(product) {
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  let list = document.getElementById("cartList");

  list.innerHTML = "";

  cart.forEach(item => {

    let li = document.createElement("li");

    li.textContent = item;

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
