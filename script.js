const hardWordList = ['triangle', 'observation', 'circumstance', 'sensitive', 'laundry', 'wording', 'fabricate', 'charter', 'sentiment', 'exclusive', 'parachute', 'mixture']
const easyWordList = []
const phraseList = []


function draw() {
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
        ctx.arc(200, 150, 35, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(225, 150);
        ctx.arc(200, 150, 25, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(188, 140);
        ctx.arc(185, 140, 3, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(218, 140);
        ctx.arc(215, 140, 3, 0, Math.PI * 2, true);  // Right eye
        ctx.moveTo(205, 140)
        ctx.moveTo(200,150)
        ctx.lineTo(150, 125)
        ctx.stroke();
  }
}

draw()
