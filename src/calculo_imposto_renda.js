function calcularImpostoDeRenda(salarioBruto) {  
  let valorIR = 0
  
//   valor das aliquotas
  let aliquota1 = 7.5/100
  let aliquota2 = 15/100
  let aliquota3 = 22.5/100
  let aliquota4 = 27.5/100

//   Parcelas a reduzir
  const parcelaCalculo1 = 158.40
  const parcelaCalculo2 = 370.40
  const parcelaCalculo3 = 651.73
  const parcelaCalculo4 = 884.96
  
//   Salários bases de contribuição
  const salarioBaseCalculo1 = 2112
  const salarioBaseCalculo2 = 2826.65
  const salarioBaseCalculo3 = 3751.05
  const salarioBaseCalculo4 = 4664.68
  
  if (salarioBruto > salarioBaseCalculo1 && salarioBruto <= salarioBaseCalculo2) {
    valorIR = salarioBruto * aliquota1
    if (valorIR > parcelaCalculo1) {
        valorIR = parcelaCalculo1
    }
  } else if (salarioBruto > salarioBaseCalculo2 && salarioBruto <= salarioBaseCalculo3) {
    valorIR = salarioBruto * aliquota2
    if (valorIR > parcelaCalculo2) {
        valorIR = parcelaCalculo2
    }
  } else if (salarioBruto > salarioBaseCalculo3 && salarioBruto <= salarioBaseCalculo4) {
    valorIR = salarioBruto * aliquota3
    if (valorIR > parcelaCalculo3){
        valorIR = parcelaCalculo3
    }
  } else if (salarioBruto > salarioBaseCalculo4) {
    valorIR = salarioBruto * aliquota4
    if (valorIR > parcelaCalculo4){
        valorIR = parcelaCalculo4
    }
  } else {
    valorIR = salarioBruto * 0 
  }

  return valorIR.toFixed(2)
}

module.exports = calcularImpostoDeRenda
