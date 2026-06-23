let botoes =
document.querySelectorAll(".adicionar-carrinho");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        let card =
        botao.parentElement;

        let nome =
        botao.dataset.nome;

        let preco =
        Number(botao.dataset.preco);

        let imagem =
        botao.dataset.imagem;

        let tamanho =
        card.querySelector(".tamanho").value;

        let quantidade =
        Number(

        card.querySelector(".quantidade").value

        );

        let carrinho =
        JSON.parse(

        localStorage.getItem("carrinho")

        ) || [];

        carrinho.push({

            nome:nome,

            preco:preco,

            imagem:imagem,

            tamanho:tamanho,

            quantidade:quantidade

        });

        localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

        );

        mostrarNotificacao();

    });

});


function mostrarNotificacao(){

    let notificacao =
    document.getElementById("notificacao");

    if(!notificacao) return;

    notificacao.classList.remove("mostrar");

    void notificacao.offsetWidth;

    notificacao.classList.add("mostrar");

    setTimeout(()=>{

        notificacao.classList.remove("mostrar");

    },2500);

}



let coracoes =
document.querySelectorAll(".coracao");

let favoritos =
JSON.parse(

localStorage.getItem("favoritos")

) || [];

coracoes.forEach(coracao=>{

    coracao.addEventListener("click",()=>{

        let card =
        coracao.parentElement;

        let nome =
        card.querySelector("h3").innerText;

        let preco =
        Number(

        card.querySelector("h2")

        .innerText

        .replace("R$","")

        .replace(",", ".")

        );

        let imagem =
        card.querySelector("img")?.src || "";

        coracao.classList.toggle("ativo");

        favoritos.push({

            nome:nome,

            preco:preco,

            imagem:imagem

        });

        localStorage.setItem(

        "favoritos",

        JSON.stringify(favoritos)

        );

    });

});
function atualizarContador() {

    let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

    let contador =
    document.getElementById("contador-carrinho");

    if (contador) {

        contador.innerHTML = carrinho.length;

    }

}

atualizarContador();
