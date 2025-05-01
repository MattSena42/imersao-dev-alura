function jogar() {
  let jogador = parseInt(prompt("Digite 1 - Pedra, 2 - Papel ou 3 - Tesoura:"));
  let computador = Math.floor(Math.random() * 3) + 1;

  if (jogador === computador) {
    alert("Empate!");
  } else if (jogador === 1 && computador === 2) {
    alert("Você perdeu! O computador escolheu papel");
  } else if (jogador === 1 && computador === 3) {
    alert("Você venceu! O computador escolheu tesoura");
  } else if (jogador === 2 && computador === 1) {
    alert("Você venceu! O computador escolheu pedra");
  } else if (jogador === 2 && computador === 3) {
    alert("Você perdeu! O computador escolheu tesoura");
  } else if (jogador === 3 && computador === 1) {
    alert("Você perdeu! O computador escolheu pedra");
  } else if (jogador === 3 && computador === 2) {
    alert("Você venceu! O computador escolheu papel");
  } else {
    alert("Valor inválido");
  }
}