const calcularInss = require("./calculo_inss")
const calcularImpostoDeRenda = require("./calculo_imposto_renda")
const calculoSalarioLiquido = require("./calculo_salario_liquido")

const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

let nome = ''
let data = new Date()
let cpf = ''
let gerarPdf = ''

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
                input.question("Deseja gerar em PDF?(S/N)", (desejaGerarPdf) => {
                    gerarPdf = desejaGerarPdf.trim().toLowerCase()
                    if (gerarPdf == "s" || gerarPdf == "sim") {
                        console.log("Gerando PDF...")
                        doc.pipe(fs.createWriteStream(`folha_de_pagamento_${nome}.pdf`));
                        doc.fontSize(25);
                        doc.text("Folha de Pagamento")
                        doc.fontSize(12);
                        // linha
                        doc.text("--- ---");
                        doc.text(`Data de Geração: ${data.toLocaleDateString()}`);
                        doc.text(`Nome: ${nome}`);
                        doc.text(`CPF: ${cpf}`);
                        // linha
                        doc.text("--- ---");
                        doc.text(`Salário Bruto: R$ ${salarioBruto}`)                            
                        doc.text("--- ---");
                        doc.text(`INSS: R$ ${calcularInss(salarioBruto)}`)                            
                        doc.text(`Imposto de Renda: R$ ${calcularImpostoDeRenda(salarioBruto)}`)                            
                        doc.text("--- ---");
                        doc.text(`Salário Líquido: R$ ${calculoSalarioLiquido(salarioBruto)}`)                            
                        doc.end()
                        console.log("PDF gerado!")
                    } else {
                        console.log("Programa encerrado!")
                    }
                    input.close()
                })
            })
        })
    })
})
