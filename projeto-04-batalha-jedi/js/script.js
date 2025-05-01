function jogar() {
  let Jedi = ["", "", ""];
  let Sith = ["", "", ""];
  let listaSith = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul",
    "Darth Tyranus",
    "Darth Plagueis"
  ];

  let forcaJedi = 0;
  let forcaSith = 0;

  // Coleta os Jedis do jogador
  for (let i = 0; i < 3; i++) {
    let escolhaJedi = prompt("Digite o nome do seu Jedi " + (i + 1));
    Jedi[i] = escolhaJedi;
    forcaJedi += Math.floor(Math.random() * 10) + 1;
  }

  // Sorteia os Siths
  for (let i = 0; i < 3; i++) {
    let escolhaSith = Math.floor(Math.random() * listaSith.length);
    Sith[i] = listaSith[escolhaSith];
    listaSith.splice(escolhaSith, 1);
    forcaSith += Math.floor(Math.random() * 10) + 1;
  }

  // Mostra os times
  alert("O seu time de Jedis é:\n" + Jedi.join("\n"));
  alert("O time de Siths é:\n" + Sith.join("\n"));

  // Verifica quem venceu
  if (forcaJedi > forcaSith) {
    alert(
      "Os Jedis venceram! Você ganhou!\nSua força total foi: " +
      forcaJedi +
      "\nA força dos Sith foi: " +
      forcaSith
    );
  } else if (forcaJedi < forcaSith) {
    alert(
      "Oh não! Os Sith venceram! Você perdeu!\nSua força total foi: " +
      forcaJedi +
      "\nA força dos Sith foi: " +
      forcaSith
    );
  } else {
    alert("Houve um empate! As forças são iguais!\nForça total: " + forcaJedi);
  }
}
