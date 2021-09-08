canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_images_array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_heigth=90;
canvas.width=800;
canvas.height=600;
background=nasa_images_array[random_number];
console.log("backgroundimage="+background);
rover_image= "rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background;
    rover_imageTag=new Image();
    rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}
function uploadBackground() 
{ ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height); }
 function uploadrover()
{ ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_heigth); }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
    if (keyPressed=="39"){
        rigth();
        console.log("rigth");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function rigth(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}