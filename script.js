let cart = [];

function addToCart(product) {
  cart.push(product);
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

  let mensagem = "Olá, quero comprar:%0A" + cart.join("%0A");
  window.open("https://wa.me/5531972354299?text=" + mensagem);
}
