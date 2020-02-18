

const hangmanCanvas = document.getElementById('hangmanCanvas');
const easyButton = document.querySelector(".easybutton")
const hardButton = document.querySelector(".hardbutton")
const phrasesButton = document.querySelector(".phrasesbutton")
const underlineContainer = document.querySelector(".underlineletters-container")
const letterContainer = document.querySelectorAll(".letter-container div")
console.log(underlineContainer)
function drawBoard() {
    if (hangmanCanvas.getContext) {
        var ctx = hangmanCanvas.getContext('2d');
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
        
           
  


drawBoard()
// canvasHead()
// rightArm()

letterContainer.forEach(letterStyle => {
    letterStyle.style.backgroundColor ='blue'
    letterStyle.style.border = '2px solid black'
    letterStyle.style.padding = '12px'
    letterStyle.style.width = '8px'
    letterStyle.style.margin = '4px'
})
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
const ul1 = document.querySelector("#ul1")
const underlinedText = document.querySelector('#underlinelist')
const gameStatus = document.querySelector('.gameStatus')

// let blankSpaces = ""
easyButton.addEventListener('click',easyWord)
function easyWord() {
    let randomEasyWord = easyWordList[Math.floor(Math.random() * easyWordList.length)]
    wordSelected = randomEasyWord.split("");
    
        for (i = 0; i < wordSelected.length; i++) {
            console.log(wordSelected.length)
            letter = document.createElement('li')
            letter.setAttribute('class', 'underline')
            letter.innerHTML = wordSelected[i].toUpperCase()
            underlinedText.appendChild(letter)
            //console.log(underlinedText)
            underlinedTextList = document.querySelector('.underlineletters-container .underline li')

      }
      //console.log(underlinedTextList.innerHTML)
      //wordSelected = randomEasyWord
      //document.getElementById("underline").innerHTML = blankSpaces;
    

    
    console.log(randomEasyWord)
    //console.log(wordSelected)
}
hardButton.addEventListener('click', () => {
    console.log('Hard Button')
    let randomHardWord = hardWordList[Math.floor(Math.random() * hardWordList.length)]
    wordSelected = randomHardWord.split("");
    console.log(randomHardWord)
    
    console.log(wordSelected)
})
// phrasesButton.addEventListener('click', () => {
//     console.log('Hard Button')
//     let randomPhrase = phraseList[Math.floor(Math.random() * phraseList.length)]
//     wordSelected = randomPhrase.split("");
//     console.log(randomPhrase)
//     // for (let i = 0; i < randomPhrase.length; i++) {
//     //     wordSelected[i] = '_'
//     // }
//     console.log(wordSelected)
// })
letterContainer.forEach(letter => {
     letter.addEventListener('click', checkForLetter)

//let randomEasyWord = easyWordList[Math.floor(Math.random() * easyWordList.////length)]


});
function checkGameStatus(){
    if (correctLetters === wordSelected.length){
        gameStatus.innerText = 'You Win'
        letterContainer.forEach(remove => {
            remove.removeEventListener('click', checkForLetter)
        })
    } else if (incorrectGuess === 7){
        gameStatus.innerText = 'You Lose, Please Try Again'
        letterContainer.forEach(remove => {
            remove.removeEventListener('click', checkForLetter)
    })


    }
}

function checkForLetter() {
    underLineList = document.getElementById('underlinelist')
    listItems = underLineList.getElementsByTagName('li')
    //console.log(listItems.length)
    letterContainer.forEach(letterSelected => {
        this.style.backgroundColor = 'white'
        this.style.border = ""
        this.style.color = 'white'
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
           //console.log(correctLetters)
           //console.log(guess)
           
        //console.log(incorrectLetter)
    }
    if (guess !== true) {
        incorrectGuess++
    }
    guess = false
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
    console.log(incorrectGuess)
    checkGameStatus()
}

const resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', resetBoard)
 
function resetBoard() {
    location.reload()
}
    


    
                   
               
                
   
    




    
        
        
    



