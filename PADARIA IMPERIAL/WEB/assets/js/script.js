function exibeMenu(){
    let menu = document.getElementsByTagName("nav")[0]
    menu.setAttribute("class", "mostrarMenu")
    btMenu.style.display = "none"
    btFechar.style.display = "inline"
}
function escondeMenu(){
    let menu = document.getElementsByTagName("nav")[0]
    menu.setAttribute("class", "ocultarMenu")
    btMenu.style.display = "inline"
    btFechar.style.display = "none"
}
btFechar.addEventListener("click", escondeMenu)
btMenu.addEventListener("click", exibeMenu)

//função para verificar o redimensionamento da tela

function verificaTela(){
    let menu = document.getElementsByTagName("nav")[0];
    if(window.innerWidth >= 1024){
        // Modo desktop
        btMenu.style.display = "none";
        btFechar.style.display = "none";
        menu.className = "";
        menu.style.display = "block";
    } else {
        // Modo mobile
        btMenu.style.display = "block";
        btFechar.style.display = "none";
        menu.className = "ocultarMenu";
        menu.style.display = "none";
    }
}

// Verifica ao carregar a página
window.addEventListener("resize", verificaTela);


