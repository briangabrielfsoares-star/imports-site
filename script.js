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

        let notificacao = document.getElementById("notificacao");

        notificacao.classList.remove("mostrar");

        void notificacao.offsetWidth;

        notificacao.classList.add("mostrar");

        setTimeout(() => {

            notificacao.classList.remove("mostrar");

        },2500);

    });

});
