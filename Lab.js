var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

function drawrect(x, y, length, width, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, width);
  }
/*draw text
text
font 
color
x and y positions
*/
function drawtext(text, font, color, x, y) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

/*var fruits = {

    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"}
    
};
*/



drawrect(0, 600, 100, -600,'red');
drawrect(100, 600, 100, -300,'orange');
drawrect(200, 600, 100, -450,'yellow');
drawrect(300, 600, 100, -90,'green');
drawrect(400, 600, 100, -150,'blue');
drawrect(500, 600, 100, -240,'purple');


drawtext(20,'20px Arial', 'black', 0,600);
drawtext('Apple','20px Arial', 'black', 0, 575);

drawtext(10,'20px Arial', 'black', 100,600);
drawtext('Orange','20px Arial', 'black', 100,575);

drawtext(15,'20px Arial', 'black', 200,600);
drawtext('Banana','20px Arial', 'black', 200,575);

drawtext(3,'20px Arial', 'black', 300,600);
drawtext('Kiwi','20px Arial', 'black', 300,575);

drawtext(5,'20px Arial', 'black', 400,600);
drawtext('Blueberry','20px Arial', 'black', 400,575);

drawtext(8,'20px Arial', 'black', 500,600);
drawtext('Grapes','20px Arial', 'black', 500,575);