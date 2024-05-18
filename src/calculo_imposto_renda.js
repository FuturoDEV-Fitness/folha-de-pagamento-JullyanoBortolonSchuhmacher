function calcularImpostoDeRenda(salarioBruto) {  
  let valorIR = 0
  
//   valor das aliquotas
  const aliquota1 = 7.5/100
  const aliquota2 = 15/100
  const aliquota3 = 22.5/100
  const aliquota4 = 27.5/100

//   Salários bases de contribuição
  const salarioBaseCalculo1 = 2112
  const salarioBaseCalculo2 = 2826.65
  const salarioBaseCalculo3 = 3751.05
  const salarioBaseCalculo4 = 4664.68
  
  if (salarioBruto > salarioBaseCalculo1 && salarioBruto <= salarioBaseCalculo2) {
    valorIR = salarioBruto * aliquota1
  } else if (salarioBruto > salarioBaseCalculo2 && salarioBruto <= salarioBaseCalculo3) {
    valorIR = salarioBruto * aliquota2
  } else if (salarioBruto > salarioBaseCalculo3 && salarioBruto <= salarioBaseCalculo4) {
    valorIR = salarioBruto * aliquota3
  } else if (salarioBruto > salarioBaseCalculo4) {
    valorIR = salarioBruto * aliquota4
  } else {
    valorIR = salarioBruto * 0 
  }

  return valorIR.toFixed(2)
}

module.exports = calcularImpostoDeRenda
