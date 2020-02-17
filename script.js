


const hangmanCanvas = document.getElementById('hangmanCanvas');
const easyButton = document.querySelector(".easybutton")
const hardButton = document.querySelector(".hardbutton")
const phrasesButton = document.querySelector(".phrasesbutton")
const underlineContainer = document.querySelector(".underlineletters-container")
const letterContainer = document.querySelectorAll(".letter-container div")
console.log(underlineContainer)

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
let correctGuess = 0;
let incorrectGuess = 0;
const ul1 = document.querySelector("#ul1")
const underlinedText = document.querySelector('.underlineletters-container')
// let blankSpaces = ""
easyButton.addEventListener('click',easyWord)
function easyWord() {
    let randomEasyWord = easyWordList[Math.floor(Math.random() * easyWordList.length)]
    wordSelected = randomEasyWord.split("");
    // for (let i = 0; i < randomEasyWord.length; i++) {
    //     var x = randomEasyWord.charAt(i).toUpperCase();
        for (i = 0; i < wordSelected.length; i++) {
            console.log(wordSelected.length)
            letter = document.createElement('li')
            letter.setAttribute('class', 'underline')
            letter.innerHTML = wordSelected[i].toUpperCase()
            underlinedText.appendChild(letter)
            
        // if (x === " " || x === "/'") {
        //   blankSpaces += x;
        // } else {
        //   blankSpaces += "_";
        // }
        // }
        // document.getElementById("blankSpaces").innerHTML = blankSpaces;
        // underlinedText.insertAdjacentHTML('beforeend', x);
      }
      //wordSelected = randomEasyWord
      //document.getElementById("underline").innerHTML = blankSpaces;
    

    console.log(randomEasyWord)
    //for (let i = 0; i < randomEasyWord.length; i++) {
    //   wordSelected[i] = '_'
    //}
    console.log(wordSelected)
    console.log(randomEasyWord)
    console.log(wordSelected)
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

function checkForLetter() {
    letterContainer.forEach(letterSelected => {
        this.style.backgroundColor = 'white'
        this.style.border = ""
        this.style.color = 'white'
        console.log(this.innerText)
        
    for (let j = 0; j < wordSelected.length; j++) {
        if (wordSelected.includes('this')) {
            this.style.color = "black"
        }
    }  

    })

    console.log(wordSelected)
}

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
        ctx.arc(200, 150, 30, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(222, 150);
        ctx.arc(200, 150, 22, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(188, 140);
        ctx.arc(185, 140, 3, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(218, 140);
        ctx.arc(215, 140, 3, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
        ctx.moveTo(200, 180)   //Right Arm
        ctx.lineTo(175, 220)   
        ctx.moveTo(200, 180)   //Left Arm
        ctx.lineTo(225, 220)  
        ctx.moveTo(200, 180)   //chest Line
        ctx.lineTo(200, 260)  
        ctx.moveTo(200, 260)   //Right Leg
        ctx.lineTo(175, 300)   
        ctx.moveTo(200, 260)   //Left Leg 
        ctx.lineTo(225, 300)
        ctx.moveTo(200,120)  //Rope
        ctx.lineTo(200, 65)
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
        // ctx.moveTo(25, 435)   //Letter Lines 
        // ctx.lineTo(55, 435)  //
        // ctx.moveTo(65, 435)   //Letter Lines
        // ctx.lineTo(95, 435)
        // ctx.moveTo(105, 435)   //Letter Lines
        // ctx.lineTo(135, 435)
        // ctx.moveTo(145, 435)   //Letter Lines
        // ctx.lineTo(175, 435)
        // ctx.moveTo(185, 435)   //Letter Lines 
        // ctx.lineTo(215, 435)  //
        // ctx.moveTo(225, 435)   //Letter Lines
        // ctx.lineTo(255, 435)
        // ctx.moveTo(265, 435)   //Letter Lines
        // ctx.lineTo(295, 435)
        // ctx.moveTo(305, 435)   //Letter Lines
        // ctx.lineTo(335, 435)
        // ctx.moveTo(345, 435)   //Letter Lines
        // ctx.lineTo(375, 435)
        // ctx.moveTo(25, 495)   //Letter Lines 
        // ctx.lineTo(55, 495)  //
        // ctx.moveTo(65, 495)   //Letter Lines
        // ctx.lineTo(95, 495)
        // ctx.moveTo(105, 495)   //Letter Lines
        // ctx.lineTo(135, 495)
        // ctx.moveTo(145, 495)   //Letter Lines
        // ctx.lineTo(175, 495)
        // ctx.moveTo(185, 495)   //Letter Lines 
        // ctx.lineTo(215, 495)  //
        // ctx.moveTo(225, 495)   //Letter Lines
        // ctx.lineTo(255, 495)
        // ctx.moveTo(265, 495)   //Letter Lines
        // ctx.lineTo(295, 495)
        // ctx.moveTo(305, 495)   //Letter Lines
        // ctx.lineTo(335, 495)
        // ctx.moveTo(345, 495)   //Letter Lines
        // ctx.lineTo(375, 495)
        
        ctx.stroke();
           
  }
}

drawBoard()
