let botoes = document.querySelectorAll(".adicionar-carrinho");

let contadorCarrinho =
document.getElementById("contador-carrinho");

let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

atualizarContador();

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        let nome = botao.dataset.nome;

        let preco =
        Number(botao.dataset.preco);

        carrinho.push({

            nome:nome,

            preco:preco

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

let favoritos =
JSON.parse(localStorage.getItem("favoritos")) || [];

coracoes.forEach((coracao,index)=>{

    coracao.addEventListener("click",()=>{

        let produto =
        coracao.parentElement;

        let nome =
        produto.querySelector("h3").innerText;

        let preco =
        Number(

        produto.querySelector("h2")

        .innerText

        .replace("R$","")

        .replace(",", ".")

        );

        if(coracao.innerHTML=="🤍"){

            coracao.innerHTML="❤️";

            favoritos.push({

                nome:nome,

                preco:preco

            });

        }

        else{

            coracao.innerHTML="🤍";

            favoritos = favoritos.filter(

                p=>p.nome != nome

            );

        }

        localStorage.setItem(

        "favoritos",

        JSON.stringify(favoritos)

        );

    });

});
