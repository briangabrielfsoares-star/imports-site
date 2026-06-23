let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let lista = document.getElementById("lista-carrinho");
let total = 0;

lista.innerHTML = "";

carrinho.forEach((produto, index) => {

    total += produto.preco;

    lista.innerHTML += `
    <div class="produto">
        <h3>${produto.nome}</h3>
        <h2>R$${produto.preco.toFixed(2)}</h2>
        <button onclick="removerProduto(${index})">
            Remover
        </button>
    </div>
    `;
});

document.getElementById("total").innerHTML =
`Total: R$${total.toFixed(2)}`;

function removerProduto(index) {

    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();
}
