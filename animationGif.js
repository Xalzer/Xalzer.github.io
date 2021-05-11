var imgSrc = "https://p.kindpng.com/picc/s/12-129142_exemplo-de-spritesheet-sprite-sheet-megaman-png-transparent.png";
var redSpriteSrc = "https://mr-easy.github.io/files/blog/spritesheet/red.png";
var canvas, context;

//Game Object constructor
function GameObject(spritesheet, x, y, width, height, timePerFrame, numberOfFrames) {
    this.spritesheet = spritesheet;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.timePerFrame = timePerFrame;
    this.numberOfFrames = numberOfFrames;

    //current index of frame
    this.frameIndex = 0

    this.lastUpdate = Date.now();

    this.update = function() {
        if(Date.now() - this.lastUpdate >= this.timePerFrame) {
            this.frameIndex++;
            if(this.frameIndex >= this.numberOfFrames) {
                this.frameIndex = 0;
            }
            this.lastUpdate = Date.now();
        }
    }
}

//Characters
var hero;
var heroSpritesheet = new Image();
heroSpritesheet.src = imgSrc;
var red;
var redSprite = new Image();
redSprite.src = redSpriteSrc;

window.onload = function () {
    var canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    hero = new GameObject(heroSpritesheet, 0, 0, 500, 280, 50, 5);

    var j = canvas.width/5;
    var i = canvas.height/2;

    red = new GameObject(redSprite, j-i, 0, 100, 140, 50, 5);

    red.update = function(context) {
        if(Date.now()-this.lastUpdate >= this.timePerFrame && this.frameIndex != 0) {
            this.frameIndex++;
            if(this.frameIndex >= this.numberOfFrames) {
                this.frameIndex = 0;
            }
            this.lastUpdate = Date.now();
        }   
    }
    red.draw = function(context) {
            context.drawImage(this.spritesheet, this.frameIndex*this.width/this.numberOfFrames,
                0, this.width/this.numberOfFrames, this.height, this.x, this.y,
                2*this.width/this.numberOfFrames, 2*this.height);
        }
        canvas.onmouseup = mouseClick;

    loop();
}

function mouseClick(event) {
    red.frameIndex = 1;
    red.lastUpdate = Date.now();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    hero.draw(context);
    red.draw(context);
    context.font = '30px Arial';
    context.fillStyle = "black";
    context.textAlign = 'center';
    context.fillText('Click', canvas.width/2, canvas.height/2 - 50);
}
