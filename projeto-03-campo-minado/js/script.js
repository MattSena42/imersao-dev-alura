function jogar() {
  let rodada = 1;
  let vitoria = false;

  while (rodada <= 3) {
    let escolha = prompt(
      "Nível " + rodada + " | Digite 1, 2 ou 3 para escolher um caminho:"
    );

    if (escolha !== "1" && escolha !== "2" && escolha !== "3") {
      alert("Este não é um caminho válido!");
    } else {
      let mina = Math.floor(Math.random() * 3) + 1;

      if (mina == escolha) {
        alert("💥 BOOM! GAME OVER! SNAKE? SNAKE? SNAAAAAAAKE!!");
        rodada = 5; // termina o jogo
      } else {
        alert("✅ Sobreviveu!");
        rodada++;
      }
    }

    if (rodada === 4) {
      vitoria = true;
    }
  }

  if (vitoria) {
    alert("🏆 Parabéns Snake, você atravessou o campo minado!");
  }
}