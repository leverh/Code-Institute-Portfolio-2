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