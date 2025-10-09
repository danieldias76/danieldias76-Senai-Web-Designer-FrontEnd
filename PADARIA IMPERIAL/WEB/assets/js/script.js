function exibirMenu(){
    let menu = window.document.getElementsByTagName("nav")[0]
    menu.setAttribute("class" , "exibirMenu")  
    btMenu.style.display="none"
    btFechar.style.display="inline"
}
function esconderMenu(){
    let menu = window.document.getElementsByTagName("nav")[0]
    menu.setAttribute("class", "ocultarMenu")
    btMenu.style.display="inline"
    btFechar.style.display="none"
}
btFechar.addEventListener("click", esconderMenu)
btMenu.addEventListener("click", exibirMenu)