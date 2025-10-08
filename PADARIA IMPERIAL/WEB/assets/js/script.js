function exibirMenu(){
    let menu = window.document.getElementsByTagName("nav")[0]
    menu.style.display="block"
    menu.style.backgroundColor="yellow"    
}

btMenu.addEventListener("click", exibirMenu)