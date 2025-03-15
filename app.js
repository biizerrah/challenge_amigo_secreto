let amigos = []
let sorteado

function adicionarAmigo(){

    let nome = document.getElementById("amigo").value

    if(nome == ""){

        alert("Por favor, insira um nome.")
        
    }else{

        amigos.push(nome)
        document.getElementById("amigo").value = ""
    }
    
    mostrarNaTela()

}

function mostrarNaTela(){

    let mostrarAmigos = document.getElementById("listaAmigos")
    mostrarAmigos.innerHTML = ""

    for(let i = 0; i < amigos.length; i++){

        mostrarAmigos.innerHTML += `<li>${amigos[i]}</li>`
        
    }
}

function sortearAmigo(){
    
    
    let mostrarAmigos = document.getElementById("listaAmigos")
    mostrarAmigos.innerHTML = ""
    
    if(amigos.length == 0){

        alert("Não há amigos para sortear")

    }else{

        sorteado = Math.floor(Math.random() * amigos.length)
        
        mostrarSorteados()
    }

}

function mostrarSorteados(){

    let mostrarSorteado = document.getElementById("sorteado")
    mostrarSorteado.innerHTML = amigos[sorteado]

}