function conversor() {
  let valorwons = prompt("Digite um valor em wons:");
  let umwon = 0.004;
  let umdolar = 0.0007;
  let umeuro = 0.0006;
  let umiene = 0.1017;

  alert(
    "Esse valor em reais é: R$" +
    (valorwons * umwon).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  alert(
    "Esse valor em dólar é: $" +
    (valorwons * umdolar).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  alert(
    "Esse valor em euro é: €" +
    (valorwons * umeuro).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  alert(
    "Esse valor em ienes é: ¥" +
    (valorwons * umiene).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
}
