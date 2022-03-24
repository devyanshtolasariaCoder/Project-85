canvas= document.getElementById('myCanvas')
ctx=canvas.getContext("2d")
car2_width=75;
car2_height= 100;

background_image = "parkingLot.jpg";
car2_image = "car2.png";

car2_x= 5;
car2_y= 225;

function add() {
	background_imgTag= new Image()
	background_imgTag.onload= uploadBackground
	background_imgTag.src= background_image

	car2_imgTag= new Image()
	car2_imgTag.onload= uploadcar2
	car2_imageTag.src= car_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage (background_imgTag,0,0, canvas.width, canvas.height)
}

function car2() {
	//Define function ‘uploadcar2’.
	ctx.drawImage (car2_imgTag,0,0, car2.width, car2.height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car2_y >=0)
		{
			car2_y= car2_y -10
			console.log ("When up arrow is pressed , x = " +car2_x + " | y = " + car2_y);
			uploadBackground();
			uploadcar2();
		}

}

function down()
if(car2_y< 0)
{
	//Define function to move the car downward
	car2_y= car2_y + 10
	console.log ("When down arrow is pressed, y= " + car2_x + " | = " - car2_y )
	uploadBackground();
			uploadcar2();
}

function left()
{
	//Define function to move the car left side
	car2_x= car2_x - 10
	console.log("When left arrow is pressed y= " + car2_y + " | = " - car2_x)
	uploadBackground();
	uploadcar2();
}

function right()
{
	//Define function to move the car right side
	car2_x= car2_x + 10 
	console.log("When left arrow is pressed y=" + car2_y - " | = " + car2_x)
}
