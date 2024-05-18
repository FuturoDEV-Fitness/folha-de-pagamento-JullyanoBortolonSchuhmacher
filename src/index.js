const calcularInss = require("./calculo_inss")
const calcularImpostoDeRenda = require("./calculo_imposto_renda")
const calculoSalarioLiquido = require("./calculo_salario_liquido")

let salario = 5714

console.log(calcularInss(salario))
console.log(calcularImpostoDeRenda(salario))
console.log(calculoSalarioLiquido(salario))