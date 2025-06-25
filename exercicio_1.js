/*
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/

function ehDataValida(dia, mes, ano) {
  // 1. Verifica se o mês está em um intervalo válido (1 a 12)
  if (mes < 1 || mes > 12) {
    return false;
  }

  // 2. Verifica se o dia é maior que 0
  if (dia < 1) {
    return false;
  }

  // Array para armazenar o número de dias em cada mês (índice 0 é ignorado para coincidir com o número do mês)
  const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 3. Verifica se o ano é bissexto
  // Um ano é bissexto se:
  // - For divisível por 4 E não divisível por 100, OU
  // - For divisível por 400
  const isAnoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  // Se for fevereiro (mês 2) e o ano for bissexto, fevereiro tem 29 dias
  if (mes === 2 && isAnoBissexto) {
    diasNoMes[2] = 29;
  }

  // 4. Verifica se o dia está dentro do limite de dias para o mês específico
  if (dia > diasNoMes[mes]) {
    return false;
  }

  // Se todas as verificações passarem, a data é válida
  return true;
}