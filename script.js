const hardWordList = ['triangle', 'observation', 'circumstance', 'sensitive', 'laundry', 'wording', 'fabricate', 'charter', 'sentiment', 'exclusive', 'parachute', 'mixture']
const easyWordList = []
const phraseList = []
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']


function drawBoard() {
    var hangmanCanvas = document.getElementById('hangmanCanvas');
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
        // ctx.lineTo(245, 375)  //
        // ctx.moveTo(245, 375)   //
        // ctx.lineTo(50, 375)  //
        // ctx.moveTo(245, 375)   //
        // ctx.lineTo(50, 375)  //
        // ctx.moveTo(50, 375)   //
        // ctx.lineTo(50, 370)  //
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
        ctx.stroke();
           
  }
}

drawBoard()
