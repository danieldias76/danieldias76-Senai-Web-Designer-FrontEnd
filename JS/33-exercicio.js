function trocar() {
    let cor = window.document.getElementById("corFundo").value
    let corpo = window.document.getElementsByTagName("body")[0]
    corpo.style.backgroundColor = cor
}
let botao = window.document.getElementsByTagName("button")[0]
botao.addEventListener("click", trocar)
