// Global and local variables as well as an array for player choices with all game options

const choices = ["rock", "spock", "paper", "lizard", "scissors"];
let result = null;
let previouslySelected = null;
let resultText = document.getElementById("result-text");


//Add event listeners to the inputs and the button. The inputs are diffrentiated based on the data type

document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.getElementsByTagName("input");
    let resetButton = document.getElementById("reset-btn");
  
    for (let input of inputs) {
      input.addEventListener("click", function () {
        console.log("Data-type: " + this.getAttribute("data-type"));
        if (this.getAttribute("data-type") !== "reset") {
          let userInput = this.getAttribute("data-type");
          let computerInput = computersTurn();
          compareChoices(userInput, choices[computerInput]);
        }
      });
    }
    resetButton.addEventListener("click", function () {
      console.log("Data-type: " + this.getAttribute("data-type"));
      if (this.getAttribute("data-type") === "reset") {
        resetGame();
      }
    });
  });


//Selects a random number from 0 to 4 for the computer input and removes the highlight from the previously selected choice

  function computersTurn() {
    let computerInput = Math.floor((Math.random() * 10) / 2);
    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }
    let selectedIcon = document.getElementById(
      "computer-" + choices[computerInput]
    );
    selectedIcon.classList.add("selected");
    previouslySelected = selectedIcon;
    return computerInput;
  }


//Switch function to decide who won and then display the appropriate message using template literals

  function compareChoices(user, computer) {
    switch (user + computer) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
      case "paperspock":
      case "lizardspock":
      case "lizardpaper":
      case "scissorslizard":
      case "rocklizard":
      case "spockscissors":
      case "spockrock":
        incrementUserScore();
        resultText.innerText = `Wow! You've won!
        You chose ${user} and the computer selected ${computer}!`;
        break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
      case "paperlizard":
      case "lizardscissors":
      case "lizardrock":
      case "scissorsspock":
      case "rockspock":
      case "spockpaper":
      case "spocklizard":
        incrementComputerScore();
        resultText.innerText = `Oh noes! You've lost... :(
        You chose ${user} and the computer selected ${computer}.`;
        break;
      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
      case "lizardlizard":
      case "spockspock":
        resultText.innerText = `It's a tie!
          You chose ${user} and the computer also selected ${computer}.`;
        break;
    }
    console.log("Input user: " + user + ", input computer: " + computer);
    return result;
  }

//Player score is incremented and displayed

  function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("pscore").innerText);
    document.getElementById("pscore").innerText = ++oldScore;
  }


//Computer score is incremented and displayed  
  
  function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("cscore").innerText);
    document.getElementById("cscore").innerText = ++oldScore;
  }

//Reset button function to remove existing scores and display fresh page text

  function resetGame() {
    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }
    document.getElementById("pscore").innerText = 0;
    document.getElementById("cscore").innerText = 0;
    resultText.innerText = 'Choose your weapon!';
  }
  
  