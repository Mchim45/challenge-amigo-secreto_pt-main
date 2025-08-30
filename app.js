let amigos = [];
let amigosSorteados = [];


function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == ""){
        alert("Digite um nome válido");
    }
    else {
        amigos.push(amigo);
        console.log(amigos);
    }
    document.getElementById("amigo").value = "";
    exibirListaAmigos();    
}


document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});



function exibirListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        document.getElementById("listaAmigos").appendChild(item);
    });
}


function sortearAmigo(){
    let id = Math.floor(Math.random() * amigos.length);
    if (amigosSorteados.includes(amigos[id])){
        sortearAmigo();
    } else {
        document.getElementById("resultado").innerHTML = amigos[id];
        amigosSorteados.push(amigos[id]);
    }
    
}

document.getElementById("button-draw").addEventListener("click", sortearAmigo);

function novoSortear(){
    document.getElementById("resultado").innerHTML = "";
}