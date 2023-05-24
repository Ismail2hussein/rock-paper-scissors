const playerChoices = ["rock", "paper", "scissors"];

    // Function to generate random choice for computer opponent
    function getRandomChoice() {
      let index = Math.floor(Math.random() * 3);
      return playerChoices[index];
    }

    // Main logic of the game
    function playGame(choice1, choice2) {
      let result;

      switch (true) {
        case (choice1 === 'rock' && choice2 ==='scissors'):
          result = `${choice1} defeats ${choice2}, you win!`;
          break;

        case (choice1 === 'rock' && choice2 === 'paper'):
          result = `${choice1} defeats ${choice2}, you win!`;
          break;
      }
    }