const calcularInss = require("./calculo_inss")
const calcularImpostoDeRenda = require("./calculo_imposto_renda")

function calculoSalarioLiquido(salarioBruto) {
    let descontoDoInss = Number(calcularInss(salarioBruto))
    let descontoDoIR = Number(calcularImpostoDeRenda(salarioBruto)) 

    let salarioLiquido = salarioBruto - (descontoDoIR + descontoDoInss) 
    return salarioLiquido.toFixed(2)

}

module.exports = calculoSalarioLiquido