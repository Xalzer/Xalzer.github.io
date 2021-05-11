
var canvas = document.getElementById("myDrawing");
var ctx = canvas.getContext("2d");

//draws a house
function drawImage() {
    drawSky();
    drawGrass();
    drawHouse();
}



//sets the dimensions of the canvas
var x = canvas.width / 2;
var y = 400;
var radius = 200;
var startAngle = 0;
var endAngle = 22 * Math.PI;



//sky

function drawSky() {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.fillStyle = '#0099FF';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
}
//grass
function drawGrass() {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.fillStyle = "#009900";
    ctx.fill();

}

function drawHouse() {
    var c = document.getElementById('myDrawing');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(95, 165);
    ctx.lineTo(140, 215);
    ctx.lineTo(260, 215);
    ctx.lineTo(240, 165);
    ctx.lineTo(95, 165);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();


    ctx.moveTo(139, 215);
    ctx.lineTo(94, 165);
    ctx.lineTo(45, 215)
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();


    ctx.moveTo(48, 212);
    ctx.lineTo(48, 275);
    ctx.lineTo(139, 275);
    ctx.lineTo(139, 215);
    ctx.lineTo(45, 215);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();           
    

    ctx.moveTo(139, 275);
    ctx.lineTo(260, 267);
    ctx.lineTo(260, 215);
    ctx.lineTo(140, 215);

    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

}
drawImage();
//sun
//var ball = {
    //x: 100,
    //y: 100,
    //radius: 25,
    //color: 'yellow',
    //draw: function() {
    //ctx.beginPath();
    //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2,             true);
    //ctx.closePath();
    //ctx.fillStyle = this.color;
    //ctx.fill();
//}
//};
//ball.draw();

//clouds
  var clouds = {
    cx:50,
    cy:70,
    radius: 10,
    color: 'white',
    draw: function() {
    ctx.beginPath();
    ctx.arc(50, 75, this.radius, 0, Math.PI * 2, true);
    ctx.arc(20, 75, 12, 0, Math.PI * 2, true)
    ctx.arc(35, 75, 9, 0, Math.PI * 2, true);
      
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
}
};
  clouds.draw();

    function drawBird() {  
        
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillStroke = "black";
        ctx.moveTo(200,100);
        ctx.lineTo(250,150);
        ctx.lineTo(300,100);
        ctx.lineTo(250,125);
        ctx.lineTo(200,100);

        ctx.moveTo(100,50);
        ctx.lineTo(150,100);
        ctx.lineTo(200,50);
        ctx.lineTo(150,75);
        ctx.lineTo(100,50);
        ctx.closePath();
        ctx.fill()

        
  }
  drawBird();

  //draw tree
  function tree(){
        ctx.beginPath();
        ctx.fillStyle = "brown";
        ctx.moveTo(20, 250);
        ctx.lineTo(40,250);
        ctx.lineTo(30,150);
        ctx.closePath();
        ctx.fill();
  }
  tree();
  //leaves
  function leaves() {
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.moveTo(15,200);
      ctx.lineTo(45, 200);
      ctx.lineTo(30, 100);
      ctx.closePath();
      ctx.fill();
  }
  leaves();

  function word() {
    ctx.font = "30px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.strokeText("My Cartoon",canvas.width/2, canvas.height/2);
    ctx.fill();
   }
   word();

  ctx.globalAlpha = 0.2;
  for (var i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(10, 20, 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
 