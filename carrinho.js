let carrinho = [];

function adicionarAoCarrinho(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert(nome + " foi adicionado ao carrinho!");
}
