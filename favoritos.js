let favoritos =
JSON.parse(localStorage.getItem("favoritos")) || [];

let lista =
document.getElementById("lista-favoritos");

if(favoritos.length == 0){

    lista.innerHTML = `

    <div class="produto">

    <h2>

    Nenhum favorito ❤️

    </h2>

    <p>

    Adicione produtos aos favoritos.

    </p>

    </div>

    `;

}

else{

    favoritos.forEach((produto,index)=>{

        lista.innerHTML += `

        <div class="produto">

        <h3>

        ${produto.nome}

        </h3>

        <h2>

        R$${produto.preco.toFixed(2)}

        </h2>

        <br>

        <button
        onclick="removerFavorito(${index})">

        Remover

        </button>

        </div>

        `;

    });

}

function removerFavorito(index){

    favoritos.splice(index,1);

    localStorage.setItem(

    "favoritos",

    JSON.stringify(favoritos)

    );

    location.reload();

}
