let amigos = []


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