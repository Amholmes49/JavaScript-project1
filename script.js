

const hangmanCanvas = document.getElementById('hangmanCanvas');
const easyButton = document.querySelector(".easybutton")
const hardButton = document.querySelector(".hardbutton")
const phrasesButton = document.querySelector(".phrasesbutton")
const underlineContainer = document.querySelector(".underlineletters-container")
const letterContainer = document.querySelectorAll(".letter-container div")
const lettersList = document.querySelector(".letter")
let gamesWon = 0
let gamesLost = 0
let gamesWonNumber = document.querySelector('#gamesWonNumber')
let gamesLostNumber = document.querySelector('#gamesLostNumber')
let resetCounter = document.querySelector("#resetCounter") 
const ctx = hangmanCanvas.getContext('2d')
function drawBoard() {
    if (hangmanCanvas.getContext) {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        //ctx.fill();
        //ctx.fillRect(25, 25, 100, 100);
        ctx.beginPath();
        ctx.moveTo(200,65)   //overhead bar
        ctx.lineTo(90, 65)   //
        ctx.moveTo(200,65)   //
        ctx.lineTo(200, 70)  //
        ctx.moveTo(200,70)   //
        ctx.lineTo(90, 75)   //
        ctx.moveTo(90,75)    //
        ctx.lineTo(90, 65)   //
        ctx.moveTo(90,75)    //standup bar
        ctx.lineTo(90, 370)  //
        ctx.moveTo(90, 65)   //
        ctx.lineTo(80, 65)   //
        ctx.moveTo(80, 65)   //
        ctx.lineTo(80, 370)  //
        ctx.moveTo(80, 370)   //base bar
        ctx.lineTo(245, 370)  //
        ctx.moveTo(50, 370)   //
        ctx.lineTo(245, 370)  //
        ctx.moveTo(50, 370)   //
        ctx.lineTo(245, 370)  //
        ctx.moveTo(245, 370)   //
        ctx.lineTo(245, 375)  //
        ctx.moveTo(245, 375)   //
        ctx.lineTo(50, 375)  //
        ctx.moveTo(245, 375)   //
        ctx.lineTo(50, 375)  //
        ctx.moveTo(50, 375)   //
        ctx.lineTo(50, 370)  //
        
        ctx.stroke();
    }
    
}
function createLetters() {
letterContainer.forEach(letterStyle => {
    letterStyle.style.backgroundColor ='black'
    letterStyle.style.border = '2px solid black'
    letterStyle.style.padding = '12px'
    letterStyle.style.width = '8px'
    letterStyle.style.margin = '4px'
    letterStyle.style.color = 'silver'
    letterStyle.style.borderRadius = '8px'
})
}
function Head(){ 
        if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.arc(200, 150, 30, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(222, 150);
        ctx.arc(200, 150, 22, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(188, 140);
        ctx.arc(185, 140, 3, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(218, 140);
        ctx.arc(215, 140, 3, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    } 

}
function rightArm() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200, 180) 
        ctx.lineTo(175, 220)
        ctx.stroke();
    } 
}  
function leftArm() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200, 180)   
        ctx.lineTo(225, 220)
        ctx.stroke();
    } 
}  
function chest() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200, 180)   //chest Line
        ctx.lineTo(200, 260)
        ctx.stroke();
    } 
}          
function rightLeg() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200, 260)   //Right Leg
        ctx.lineTo(175, 300)
        ctx.stroke();
    } 
}          
function leftLeg() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200, 260)   //Left Leg 
        ctx.lineTo(225, 300)
        ctx.stroke();
    } 
} 
function rope() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
        ctx.beginPath();  
        ctx.moveTo(200,120)  //Rope
        ctx.lineTo(200, 65)
        ctx.stroke();
    } 
}                          
        
           

updateGamesTotals()
drawBoard()
createLetters()

//function createLetters()

const hardWordList = ['triangle', 'observation', 'circumstance', 'sensitive', 'laundry', 'wording', 'fabricate', 'charter', 'sentiment', 'exclusive', 'parachute', 'mixture','restaurant','violation','straighten','temporary','horoscope','transform','president','destruction']
const easyWordList = ['route','cower','final','ditch','trunk','orbit','yearn','self','swop','doubt','lake','feign','pest','aware','bet','blade','cabin','lease','wagon','work','swim']
const phraseList = ['Quick and Dirty','In a Pickle',"Man of Few Words","A Chip on Your Shoulder",'I Smell a Rat',"Tough It Out",'Ugly Duckling',"Fool's Gold"]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']
const numberLettersPicked = []
let wordSelected = []
let answerWord = []
let correctLetters = 0;
let incorrectLetter = 0;
let incorrectGuess = 0;
let guess = false
let blankSpecialChar = 0

const underlinedText = document.getElementById('underlinelist')
const gameStatus = document.querySelector('.gameStatus')
let ulItems = underlinedText.getElementsByTagName('li')

function updateGamesTotals() {
gamesWonNumber.innerText = gamesWon
gamesLostNumber.innerText = gamesLost
}
console.log(ulItems)
// let blankSpaces = ""

easyButton.addEventListener('click',easyWord)

function easyWord() {
    resetBoard()
    // console.log(ulItems)
    // console.log(incorrectGuess)
    // console.log(correctLetters)
    let randomEasyWord = easyWordList[Math.floor(Math.random() * easyWordList.length)]
    wordSelected = randomEasyWord.split("");
    //console.log(ulItems)
    console.log(wordSelected)
    //underlinedText.removeChild(underlinedText.childNodes[0])
    
        for (i = 0; i < wordSelected.length; i++) {
            //console.log(wordSelected.length)
            letter = document.createElement('li')
            letter.setAttribute('class', 'underline')
            letter.innerHTML = wordSelected[i].toUpperCase()
            underlinedText.appendChild(letter)
            
            

      }
      
    activateLetters()
    
      console.log(wordSelected)

    
    
}
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
    
    console.log(wordSelected)
})
phrasesButton.addEventListener('click', () => {
    resetBoard()
    //console.log('Phrase Button')
     let randomPhrase = phraseList[Math.floor(Math.random() * phraseList.length)]
     wordSelected = randomPhrase.split("");
     for (i = 0; i < wordSelected.length; i++) {
        console.log(wordSelected.length)
        letter = document.createElement('li')
        letter.setAttribute('class', 'underline')
        letter.innerHTML = wordSelected[i].toUpperCase()
        underlinedText.appendChild(letter)
        if (wordSelected[i] === " "){
            blankSpecialChar++    
        }
        if (wordSelected[i] === "'"){
            blankSpecialChar++ 
            letter.style.color = 'black'   
        }
        activateLetters()

  }
   console.log(wordSelected)
    
})
function activateLetters(){
letterContainer.forEach(letter => {
     letter.addEventListener('click', checkForLetter)
})
}

function checkGameStatus(){
    if (correctLetters === wordSelected.length - blankSpecialChar){
        gameStatus.innerText = 'You Win'
        letterContainer.forEach(remove => {
            remove.removeEventListener('click', checkForLetter)
        })
        gamesWon++
        var end = Date.now() + (2 * 1000);

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 10,
                angle: 120,
                spread: 55,
                origin: {
                    x: 0
                },
                colors: colors
            });
            confetti({
                particleCount: 10,
                angle: 120,
                spread: 55,
                origin: {
                    x: 1
                },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
        
    } else if (incorrectGuess === 7){
        gameStatus.innerText = 'You Lose, Please Try Again'
        letterContainer.forEach(remove => {
            remove.removeEventListener('click', checkForLetter)
        })
        gamesLost++
    }
    updateGamesTotals()
}

function checkForLetter() {
    underLineList = document.getElementById('underlinelist')
    listItems = underLineList.getElementsByTagName('li')
    //console.log(listItems.length)
    letterContainer.forEach(letterSelected => {
        this.style.backgroundColor = 'red'
        this.style.border = ""
        this.style.color = 'red'
    })
    
        for (j = 0; j < listItems.length; j++) {
           listLetters = listItems[j].innerText
           //console.log(listLetters)
           //console.log(this.innerText)
           if (this.innerText === listLetters){
                listItems[j].style.color = 'black';
                correctLetters++ 
                guess = true    
               
           }
          
    }
    if (guess !== true) {
        incorrectGuess++
    }
    guess = false
    drawHangman()
    checkGameStatus()
}
function drawHangman() {   
    
    if (incorrectGuess === 0){
        drawBoard()
    }
    if (incorrectGuess === 1){
        rope()
    }
    if (incorrectGuess === 2){
        Head()
    }
    if (incorrectGuess === 3){
        rightArm()
    }
    if (incorrectGuess === 4){
        leftArm()
    }
    if (incorrectGuess === 5){
        chest()
    }
    if (incorrectGuess === 6){
        rightLeg()
    }
    if (incorrectGuess === 7){
        leftLeg()
    }
    //console.log(incorrectGuess)
    
}
const resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', restartGame)
resetCounter.addEventListener("click", resetGameCounter )
function resetGameCounter(){
    gamesWon = 0
    gamesLost = 0
    updateGamesTotals()
}


function restartGame() {
   resetBoard()
   gameStatus.innerText = 'Select A Difficulty Level' 
}
function resetBoard() {
    while (ulItems.length > 0) {
        ulItems[0].remove()   
      }
    ctx.clearRect(0,0,400,500)
    correctLetters = 0
    incorrectGuess = 0
    blankSpecialChar = 0
    gameStatus.innerText = 'Pick a Letter'
    letterContainer.forEach(remove => {
        remove.removeEventListener('click', checkForLetter)
    })
    createLetters()
    drawBoard()
    console.log(correctLetters)
    console.log(incorrectGuess)
    
    //location.reload()
}
    


    
                   
               
                
   
    




    
        
        
    



