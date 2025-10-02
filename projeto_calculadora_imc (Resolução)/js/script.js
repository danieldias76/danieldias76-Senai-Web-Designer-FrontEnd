function calcularIMC() {
    let valorAltura = Number(altura.value)
    let valorPeso = Number(peso.value)
    let calculo = valorPeso / valorAltura ** 2

    // Teste do cálculo do IMC
    if (calculo < 18.5) {
        let linha1 = document.getElementsByTagName("tr")[1]
        linha1.setAttribute("class", "colorir")

    } else if (calculo >= 18.5 && calculo <= 24.9) {
        let linha2 = document.getElementsByTagName("tr")[2]
        linha2.setAttribute("class", "colorir")
    } else if (calculo >= 25 && calculo <= 29.9) {
        let linha3 = document.getElementsByTagName("tr")[3]
        linha3.setAttribute("class", "colorir")
    } else if (calculo >= 30 && calculo <= 39.9) {
        let linha4 = document.getElementsByTagName("tr")[4]
        linha4.setAttribute("class", "colorir")
    } else {
        let linha5 = document.getElementsByTagName("tr")[5]
        linha5.setAttribute("class", "colorir")
    }
    resultadoIMC.innerText = calculo.toFixed(2)
}

function limparPagina(){
    location.reload()
}
calcularResultado.addEventListener("click", calcularIMC)
atualizarPagina.addEventListener("click", limparPagina)

