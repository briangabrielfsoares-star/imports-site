let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

let lista =
document.getElementById("lista-carrinho");

let total = 0;

lista.innerHTML = "";

if(carrinho.length == 0){

    lista.innerHTML = `

    <div class="produto">

        <h2>

        Seu carrinho está vazio 🛒

        </h2>

        <p>

        Adicione produtos para continuar.

        </p>

    </div>

    `;

}

else{

    carrinho.forEach((produto,index)=>{

        let subtotal =
        produto.preco * produto.quantidade;

        total += subtotal;

        lista.innerHTML += `

        <div class="produto">

            <img
            src="${produto.imagem}">

            <h3>

            ${produto.nome}

            </h3>

            <p>

            Tamanho: ${produto.tamanho}

            </p>

            <p>

            Quantidade: ${produto.quantidade}

            </p>

            <h2>

            R$${produto.preco.toFixed(2)}

            </h2>

            <p>

            Subtotal:

            R$${subtotal.toFixed(2)}

            </p>

            <br>

            <button
            onclick="removerProduto(${index})">

            Remover

            </button>

        </div>

        `;

    });

}

document.getElementById("total").innerHTML =

`Total: R$${total.toFixed(2)}`;

function removerProduto(index){

    carrinho.splice(index,1);

    localStorage.setItem(

    "carrinho",

    JSON.stringify(carrinho)

    );

    location.reload();

}
