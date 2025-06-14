function ehDataValida(dia, mes, ano) {
    if(mes < 1 || mes > 12)
        return false;

    if (ano < 1) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const ehBissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);

    if (ehBissexto) {
        diasPorMes[1] = 29;
    }

    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}
  console.log(ehDataValida(28, 2, 2021));