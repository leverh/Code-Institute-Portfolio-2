# Portfolio Assignment 2 - Rock, Paper, Scissors, Lizard, Spock: JavaScript Game Code

[Link to deployed website on github pages](https://leverh.github.io/Code-Institute-Portfolio-2/)

This small website contains a game of Rock, Paper, Scissors, Lizard, Spock using HTML, CSS, and Javascript. 

I tried to make this entire responsive website look fun utilizing special fonts, colors, and icons which should (at least- that was my intention) convey a playful, easy going atmosphere. 

The target audience for the website are new coders (like myself) that want to be inspired by new ideas and methods to solve 'old' problems, or for the occasional player that just wants to try and beat the computer in their quest for rock paper scissors world domination!

![Site image in 4 different screen sizes](assets/Images/Screenshot%202023-02-12%20at%2015-59-03%20Am%20I%20Responsive.png)

# Languages

This project utilizes HTML, CSS, and JavaScript.

# Features

#### The Header
The h1 contains the main intention for the page and the first thing that a user will look at. Again, I have decided to use an icon of the cute lizard instead of using plain text to add to the easy-going feel of the site.
![Image of the H1 element](assets/Images/Screenshot%202023-02-12%20at%2016-16-49%20Rock%20Paper%20Scissor%20Lizard%20Spock%20JavaScript%20Game%20Code.png)

#### The Rules
This is followed by a short description of how to play the game, and a link to another page containing the game rules:

![screenshot of rules page](assets/Images/Screenshot%202023-02-12%20at%2016-20-22%20Rock%20Paper%20Scissor%20Lizard%20Spock%20JavaScript%20Game%20Rules.png)

#### Game Area
next is the actual game area that allows the player to pick their 'weapon' of choice against the computer. Two windows contain the 5 icons for both the player and computer. When the player chooses an icon and the game takes place, the computer's choice will be highlighted by a yellow border as seen in the picture below: 
![screenshot of main game page containing the two game windows](assets/Images/Screenshot%202023-02-12%20at%2016-25-55%20Rock%20Paper%20Scissor%20Lizard%20Spock%20JavaScript%20Game%20Code.png)

The score will also be incremented accordingly in the separate game winsows. 

Using JS template literals, the user will be told whether each round has been won, lost, or come to a tie- displaying also the choices the player and the computer have made.

Finally there's a reset button which will reset the game the scores.

# Testing

Thorughout the project I have used the live server extension on VS code to make sure everything looks the way it should. I also relied on the inspect tool in my Firefox browser.

When it came to the JavaScript code, I tested each step of the code using console.logs to make sure the code was correct and had reproduced what I needed it to. 
I initially tested all the code on CodePen and jsfiddle: 
![screenshot of testing on jdfiddle](assets/Images/Screenshot%202023-02-12%20at%2016-41-11%20JSFiddle%20-%20Code%20Playground.png)

I also sent the game link to a couple of friends/family to have a go and let me know whether everything was working on their end without a hitch. 

### Validator Testing

- HTML
  
    - No errors were detected when tested on the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fleverh.github.io%2FCode-Institute-Portfolio-2%2F).

- CSS
  
    - No erros were found when tested on the official [W3C Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fleverh.github.io%2FCode-Institute-Portfolio-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

- JavaScript
  
    - No errors found when passing through the official [Jshint validator](https://jshint.com/).
  - The following metrics were returned:
  
    - There are 8 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 0.
    - Largest function has 7 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 26 while the median is 2.


# Deployment

-   The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository navigate to the settings tab.
    - From the source section drop down menu select the master branch.
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: https://leverh.github.io/Code-Institute-Portfolio-2/

# Credits

- The icons used in this project were all from https://www.flaticon.com/
- The steps mentioned in the deployment .readme section were copied and reproduced from the [Love Maths](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md) Code Institute project.
- I have used the following online articles for inspiration on how to code the JS code:
    - https://projects.codewizardshq.com/x_hour_of_code_2022/javascript-projects/rock-paper-scissors/index.html
    - https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535
    - https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/

- I used the Stackoverflow forums for specific issues such as:
    - Before I separated the rules from the main page, i looked at different options on how to create a popup for the rules using JS or CSS. This is one of the links i looked at: https://stackoverflow.com/questions/16776276/display-box-on-hover
    - The remind myself of JS syntax for the switch function I looked at https://www.w3schools.com/js/js_switch.asp

# Future Ideas

I think it would be cool to have the relevant instruction come up as soon as the player and computer make their choice- so for example, if the player picks paper and the computer picks rock- in addition to being notified of a win- the notification would include the relevant rule- "Paper covers rock", etc. The notification could also be replaced by an animation where the two icons battle and one survives.  