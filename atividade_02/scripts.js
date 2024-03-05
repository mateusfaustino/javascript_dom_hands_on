
function clickSim(){
    alert("Massa! Vamos alí comer uma empada!")
}

function clickNao(){
    let btnNao = document.querySelector("#nao")
    btnNao.style.position="absolute"
    btnNao.style.top = gerarPositionAleatorio()
    btnNao.style.left = gerarPositionAleatorio()
}

function gerarPositionAleatorio(){
    return `${parseInt(Math.random()*100)}%`
}



window.addEventListener('load',()=>{
    let btnSim = document.querySelector("#sim")
    btnSim.addEventListener('click',clickSim)

    let btnNao = document.querySelector("#nao")
    btnNao.addEventListener("mouseenter", clickNao)

})