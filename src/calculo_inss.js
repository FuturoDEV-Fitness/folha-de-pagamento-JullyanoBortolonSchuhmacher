function calcularInss(salarioBruto) {

//  salários bases de contribuição
  let taxa = 7.5/100
  const valorAliquota1 = 1412
  const valorAliquota2 = 2666.68
  const valorAliquota3 = 4000.03
  
  const TETOINSS = 908.85
  let valorInss = 0

  if (salarioBruto <= valorAliquota1){
      valorInss = salarioBruto * taxa
    } else if (salarioBruto > valorAliquota1 && salarioBruto <= valorAliquota2) {
      taxa = (9/100)
      valorInss = salarioBruto * taxa
    } else if (salarioBruto > valorAliquota2 && salarioBruto <= valorAliquota3) {
      taxa = (12/100)
      valorInss = salarioBruto * taxa
    } else {
      taxa = (14/100)
    valorInss = salarioBruto * taxa
  } 

//   caso o valor passe do teto aceito pelo inss
  if (valorInss > TETOINSS){
    valorInss = TETOINSS
  }

  return valorInss.toFixed(2)
}

module.exports = calcularInss