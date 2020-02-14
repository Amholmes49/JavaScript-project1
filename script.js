const hangmanCanvas = document.getElementById('hangmanCanvas');
const easyButton = document.querySelector(".easybutton")
const hardButton = document.querySelector(".hardbutton")
const phrasesButton = document.querySelector(".phrasesbutton")
const underlineContainer = document.querySelectorAll(".underlineletters-container div")
const letterContainer = document.querySelectorAll(".letter-container div")
console.log(underlineContainer)

const hardWordList = ['triangle', 'observation', 'circumstance', 'sensitive', 'laundry', 'wording', 'fabricate', 'charter', 'sentiment', 'exclusive', 'parachute', 'mixture']
const easyWordList = []
const phraseList = []
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']
const numberLettersPicked = []

easyButton.addEventListener('click', () => {
    console.log('Easy Button')
})
hardButton.addEventListener('click', () => {
    console.log('Hard Button')
})
phrasesButton.addEventListener('click', () => {
    console.log('Hard Button')
})
letterContainer.forEach(letter => {
     letter.addEventListener('click', checkForLetter)
});
letterContainer.forEach(letterStyle => {
    letterStyle.style.backgroundColor ='blue'
    letterStyle.style.border = '2px solid black'
    letterStyle.style.padding = '12px'
    letterStyle.style.width = '8px'
    letterStyle.style.margin = '4px'
})

function checkForLetter() {
    letterContainer.forEach(letterSelected => {
        this.style.backgroundColor ='Black'
        

    })

    console.log('check for letter')
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
