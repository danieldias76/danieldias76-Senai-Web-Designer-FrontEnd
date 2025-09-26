function ligarLuz(){
    lampada1.setAttribute("src", "/projeto_lampada/imagens/lampada-real-on.png")
    let liga = window.document.getElementById("off")
    liga.style.display="block"
    let desliga = window.document.getElementById("on")
    desliga.style.display="none"
    document.body.style.backgroundColor="pink"
}
on.addEventListener("click", ligarLuz)

function desligarLuz(){
    lampada1.setAttribute("src", "/projeto_lampada/imagens/lampada-real-off.png")
    let liga2 = window.document.getElementById("off")
    liga2.style.display="none"
    let desliga2 = window.document.getElementById("on")
    desliga2.style.display="block"
    document.body.style.backgroundColor="gray"
}
off.addEventListener("click", desligarLuz)

function quebrar(){
    let novaLampada = window.document.getElementById("on")
    novaLampada.style.display="none"
    let velhaLampada = window.document.getElementById("off")
    velhaLampada.style.display="none "
    let nova = window.document.getElementById("n")
    nova.style.display="block"
    lampada1.setAttribute("src", "/projeto_lampada/imagens/lampada-real-quebrada.png")
}
lampada1.addEventListener("click", quebrar)

function nova(){
    let ligaNovamente = window.document.getElementById("on")
    ligaNovamente.style.display="block"
    let sumir = window.document.getElementById("n")
    sumir.style.display="none"
    lampada1.setAttribute("src", "/projeto_lampada/imagens/lampada-real-off.png")
}
n.addEventListener("click", nova)