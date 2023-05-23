function playGame(player3, player4) {
  if (player3 === player4) {
    return "tie";
  } else if (
    (player3 === "rock" && player4 === "scissors") ||
    (player3 === "paper" && player4 === "rock") ||
    (player3 === "scissors" && player4 === "paper")
  ) {
    return "player3 wins";
  } else {
    return "player4 wins";
  }
}


console.log(playGame("rock", "paper")); // Output: "player4 wins"
console.log(playGame("scissors", "scissors")); // Output: "tie"
