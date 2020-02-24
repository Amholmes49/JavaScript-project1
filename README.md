# JavaScript-project1

## Description
This project is my JavaScript based Hangman game.  It has been designed to solve the problem of workplace brodem.  Simple go out to the site an play a fun game of hangman.  There are 3 challenging levels, easy, hard, and phrases. To follow your progress you can keep track of wins and losses as you go.

### Code Snippet

```}
hardButton.addEventListener('click', () => {
    resetBoard()
    //console.log('Hard Button')
    let randomHardWord = hardWordList[Math.floor(Math.random() * hardWordList.length)]
    wordSelected = randomHardWord.split("");
    for (i = 0; i < wordSelected.length; i++) {
        console.log(wordSelected.length)
        letter = document.createElement('li')
        letter.setAttribute('class', 'underline')
        letter.innerHTML = wordSelected[i].toUpperCase()
        underlinedText.appendChild(letter)
    }
    activateLetters()
    
})
```
## Features/User Stories
* User Interface
    * draw hangman board - JavaScript
    * create difficulty buttons
    * Create Letters
    * Add header
* Basic Game logic
    * create random word arrays
    * Select Random Word function
    * Check for letters when selected
    * Win/Loss logic
* Advanced Game Logic
    * Draw Hangman(with Guess)
    * Reset Game
    * Add styling to CSS
    * Checking for defects/Bugs
    * Refactor Code
* Bonus Game Logic
    * Add win/loss counter
    * Update reset page logic

## Technologies Used
* Languages
    * JavaScript
    * HTML
    * CSS
* Framework
    * node.js
* libraries
    * "https://cdn.jsdelivr.net/npm/canvas-confetti@1.0.3/dist/confetti.browser.min.js"

### Getting Started
1. Forking - 
    * Login to github.com
    * navigate to 
https://github.com/Amholmes49/JavaScript-project1
    * select Fork
2. Cloning - 
    * Once the repo is forked go to the forked repo on your github account and select clone or download. 
    * Copy the link
    * navigate into the directory where the cloned repo will go.
    * git clone ////paste the copied link//// 


### Acknowledgements
* https://www.w3schools.com/
* https://www.youtube.com/watch?reload=9&v=ZtNyfGyS00M
* https://codepen.io/cathydutton/pen/ldazc
* https://jsfiddle.net/phollott/x29ym2ag/
* https://stackoverflow.com/questions/35460999/how-to-make-a-hangman-game-in-js
* http://horton.com/consulting/portfolio/wordQuiz/index.html

### Contribute
Source code: https://github.com/Amholmes49/JavaScript-project1

Issue Tracker: https://github.com/Amholmes49/JavaScript-project1/issues


