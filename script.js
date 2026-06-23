let botoes = document.querySelectorAll(".adicionar-carrinho");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        let nome = botao.dataset.nome;
        let preco = Number(botao.dataset.preco);

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push({
            nome: nome,
            preco: preco
        });

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Produto adicionado ao carrinho!");
    });

});
