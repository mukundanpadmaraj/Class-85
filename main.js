canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_width=100
rover_height=90
rover_x_position=10
rover_y_position=10

mars_array=["mars_1.jfif","mars_2.jpg","mars_3.jpg","mars_4.jpg","mars_5.jpg"]

random_number=Math.floor(Math.random()*5)

background_image=mars_array[random_number]
rover_image="rover.png"

function add(){
    background_imageTag=new Image()
    background_imageTag.onload=upload_background
    background_imageTag.src=background_image

    rover_imageTag=new Image()
    rover_imageTag.onload=upload_rover
    rover_imageTag.src=rover_image
}

function upload_background(){
    ctx.drawImage(background_imageTag,0,0,800,600)
}

function upload_rover(){
    ctx.drawImage(rover_imageTag,rover_x_position,rover_y_position,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    key_pressed=e.keyCode
    if(key_pressed=="40"){
        console.log("down")
        down()
    }
    if(key_pressed=="38"){
        console.log("up")
        up()
    }
    if(key_pressed=="37"){
        console.log("left")
        left()
    }
    if(key_pressed=="39"){
        console.log("right")
        right()
    }
}

function up(){
    if(rover_y_position>0)
    {
        rover_y_position=rover_y_position-10
        console.log(rover_y_position)
        upload_background()
        upload_rover()
    }
}

function down(){
    if(rover_y_position<500)
    {
        rover_y_position=rover_y_position+10
        console.log(rover_y_position)
        upload_background()
        upload_rover()
    }
}

function left(){
    if(rover_x_position>0)
    {
        rover_x_position=rover_x_position-10
        console.log(rover_x_position)
        upload_background()
        upload_rover()
    }
}

function right(){
    if(rover_x_position<700)
    {
        rover_x_position=rover_x_position+10
        console.log(rover_x_position)
        upload_background()
        upload_rover()
    }
}