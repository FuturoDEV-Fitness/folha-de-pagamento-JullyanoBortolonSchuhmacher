const calcularInss = require("./calculo_inss")
const calcularImpostoDeRenda = require("./calculo_imposto_renda")
const calculoSalarioLiquido = require("./calculo_salario_liquido")

let nome = ''
let data = new Date()
let cpf = ''

const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Qual seu nome? ", (nomeInserido) => {
    nome = nomeInserido
    input.question("Qual o mês de pagamento (número)? ", (mesInserido) => {
        input.question("Qual seu CPF? ", (cpfInserido) => {
            cpf = cpfInserido.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            input.question("Qual o valor do salário bruto? ", (salarioBruto) => {
                input.close()
                console.log("--- folha de pagamento ---")
                console.log(`Nome: ${nome}`)
                console.log(`CPF: ${cpf}`)
                console.log(`Mês de pagamento: ${mesInserido}`)
                console.log(`Salário Bruto: R$ ${salarioBruto}`)
                console.log(`INSS: R$ ${calcularInss(salarioBruto)}`)
                console.log(`Imposto de Renda: R$ ${calcularImpostoDeRenda(salarioBruto)}`)
                console.log(`Salário Líquido: R$ ${calculoSalarioLiquido(salarioBruto)}`)
                console.log("--- --- --- --- --- --- ---")
                console.log(`Solicitação em ${data.toLocaleDateString()} as ${data.toLocaleTimeString()}`)
            })
        })
    })
})
