function multiplicar(){
    let campo1 = Number(document.getElementById("valor1").value)
    let campo2 = Number(document.getElementById("valor2").value)
    let calculo = campo1 * campo2     
    let areaResultado = document.getElementById("resultado")
    areaResultado.innerText = "O resultado do é :" + calculo
}