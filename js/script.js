const elements = document.querySelectorAll(".player-options div img");
const enemyOptions = document.querySelectorAll(".enemy-options div");
let playerOpt = "";
let enemyOpt = "";

function result() {
  const winner = document.querySelector(".winner");

  if (playerOpt === "rock") {
    if (enemyOpt === "rock") {
      winner.innerHTML = "O jogo empatou!";
    } else if (enemyOpt === "scissor") {
      winner.innerHTML = "O jogador ganhou!";
    } else if (enemyOpt === "paper") {
      winner.innerHTML = "O jogador perdeu!";
    }
  }

  if (playerOpt === "paper") {
    if (enemyOpt === "paper") {
      winner.innerHTML = "O jogo empatou!";
    } else if (enemyOpt === "rock") {
      winner.innerHTML = "O jogador ganhou!";
    } else if (enemyOpt === "scissor") {
      winner.innerHTML = "O jogador perdeu!";
    }
  }

  if (playerOpt === "scissor") {
    if (enemyOpt === "scissor") {
      winner.innerHTML = "O jogo empatou!";
    } else if (enemyOpt === "paper") {
      winner.innerHTML = "O jogador ganhou!";
    } else if (enemyOpt === "rock") {
      winner.innerHTML = "O jogador perdeu!";
    }
  }
}

function resetOpacity() {
  for (let element of elements) {
    element.style.opacity = 0.3;
  }
}

function resetEnemy() {
  for (let i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
  }
}

function enemyPlay() {
  let rand = Math.round(Math.random() * 3);

  resetEnemy();
  for (let i = 0; i < enemyOptions.length; i++) {
    if (i === rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      enemyOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
    }
  }
  
  result();
}

for (let element of elements) {
  element.addEventListener("click", (e) => {
    const el = e.target;
    resetOpacity();
    el.style.opacity = 1;
    playerOpt = el.getAttribute("opt");

    enemyPlay();
  });
}
