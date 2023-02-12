const choices = ["rock", "spock", "paper", "lizard", "scissors"];
let result = null;
let previouslySelected = null;
let resultText = document.getElementById("result-text");

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