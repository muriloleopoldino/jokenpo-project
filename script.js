const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

function playHuman(humanChoice) {
  playTheGame(humanChoice, playMachine());
}

function playMachine() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playTheGame(human, machine) {
  console.log("Humano: " + human + " | Máquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate! ✍️";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber; // ✅ CORREÇÃO AQUI
    result.innerHTML = "Você ganhou! 😎";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu! 😥";
  }
}
