let amigos = []


function adicionarAmigo(){

    let mostrarAmigos = document.getElementById("listaAmigos")
    mostrarAmigos.innerHTML = ""
    let nome = document.getElementById("amigo").value

    amigos.push(nome)
    document.getElementById("amigo").value = " "
    

    for(let i = 0; i < amigos.length; i++){

    mostrarAmigos.innerHTML += `<li>${amigos[i]}</li>`
    
}
}

