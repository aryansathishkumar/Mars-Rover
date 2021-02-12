var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;

var rover_width = 90;
var rover_height = 100;

var background_img = "mars.jpg";
var rover_img = 'rover.png';

function add() {
    var background_Img = new Image();
    background_Img.onload = upload_background;
    background_Img.src = background_img;

    var rover_Img = new Image();
    rover_Img.onload = upload_rover;
    rover_Img.src = rover_img;
}

function upload_background() {
    ctx.drawImage(background_Img, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_Img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down)

function key_down(e) {
    var key_pressed = e.keyCode
    if(key_pressed == '38'){
        console.log("up arrow key is pressed");
        up();
    }
    if(key_pressed == '40'){
        console.log("down arrow key is pressed");
        down();
    }
    if(key_pressed == '39'){
        console.log("right arrow key is pressed");
        right();
    }
    if(key_pressed == '37'){
        console.log("left arrow key is pressed");
        left();
    }
}
function up() { 
    if(rover_y >=0)
     { rover_y = rover_y - 10;
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover(); }
 }
function down() { 
    if(rover_y <=500)
     { rover_y =rover_y+ 10; 
     console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
     uploadBackground();
     uploadrover(); } }

function left() { if(rover_x <= 700)
 { rover_x =rover_x - 10; 
 console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
  uploadBackground();
   uploadrover(); } } 

function right() { if(rover_x >= 0)
     { rover_x =rover_x + 10; 
    console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); 
    uploadrover(); } }