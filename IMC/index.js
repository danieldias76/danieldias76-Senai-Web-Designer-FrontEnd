function calcularImc() {
    let valorAltura = Number(altura.value)
    let valorPeso = Number(peso.value)
    let efetuar = valorPeso / valorAltura ** 2

    if (calcularImc < 18.5) {
        alert("Magro")
        let linha1 = document.getElementsByTagName("tr")[1]
        linha1.setAttribute("class","colorir")
    } else if (calcularImc >= 18.5 && 24.9) {
        alert("Normal")
        let linha2 = document.getElementsByTagName("tr")[2]
        linha2.setAttribute("class","colorir")
    } else if (calcularImc >= 25.0 && calcularImc <= 29.9){
        alert("Sobrepeso")
        let linha3 = document.getElementsByTagName("tr")[3]
        linha3.setAttribute("class","colorir")
    } else if (calcularImc >=30.0 && calcularImc <= 39.9){
        alert("Obesidade")
        let linha4 = document.getElementsByTagName("tr")[4]
        linha4.setAttribute("class","colorir")
    }else{
        alert("Obesidade Mórbida")
        let linha5 = document.getElementsByTagName("tr")[5]
        linha5.setAttribute("class","colorir")
    }
    resultadoIMC.innerText = calcularImc.toFixed(2)
}
    function limparPagina(){
        location.reload()
    }
calcularImc.addEventListener("click", calcularImc)
atualizarPagina.addEventListener("click", calcularImc)