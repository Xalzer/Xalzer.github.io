let image = new Image();
image.src = "numbers.png";
let counter = 0,
    frame_width = 172,
    frame_height = 221;
image.onload = function() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    window.requestAnimationFrame(animate);
   
    document.getElementById("clickme").onclick = function(){animate()};
    function animate() {
        
        let frame = Math.floor(counter%11);
        context.drawImage(image, frame * frame_width, 0, frame_width, frame_height,
            counter * 1, 0, frame_width, frame_height);
            
            counter = counter + .1;
            
            if(counter >= 10) counter = 0;
            
            window.requestAnimationFrame(animate);
        
    }
}
// click on button function
image.onclick = function() {animate}