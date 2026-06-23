let botoes = document.querySelectorAll(".adicionar-carrinho");

let contadorCarrinho = document.getElementById("contador-carrinho");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

atualizarContador();

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        let nome = botao.dataset.nome;

        let preco = Number(botao.dataset.preco);

        carrinho.push({

            nome: nome,

            preco: preco

        });

        localStorage.setItem(

            "carrinho",

            JSON.stringify(carrinho)

        );

        atualizarContador();

        mostrarNotificacao();

    });

});

function atualizarContador(){

    if(contadorCarrinho){

        contadorCarrinho.innerHTML =
        `(${carrinho.length})`;

    }

}

function mostrarNotificacao(){

    let notificacao =
    document.getElementById("notificacao");

    notificacao.classList.remove("mostrar");

    void notificacao.offsetWidth;

    notificacao.classList.add("mostrar");

    setTimeout(()=>{

        notificacao.classList.remove("mostrar");

    },2500);

}


let coracoes =
document.querySelectorAll(".coracao");

coracoes.forEach(coracao=>{

    coracao.addEventListener("click",()=>{

        if(coracao.innerHTML=="🤍"){

            coracao.innerHTML="❤️";

        }

        else{

            coracao.innerHTML="🤍";

        }

    });

});
