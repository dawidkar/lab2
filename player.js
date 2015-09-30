var canvas;
var ctx;

var collides

var x;
var y;

function player()
{

}

player.prototype.draw = function()
{
	ctx.fillStyle = rgb(5,5,5);
	ctx.fillRect(x,y,100,100);

	ctx.fillRect(600,0,100,100);
}

function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function clamp(value, min, max)
{ 
	if(max<min) { 
	var temp = min; 
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	}
	return Math.max(min, Math.min(value, max)); 
}

player.prototype.move = function(e)
{
	if(e.keyCode == 100) // so many brackets bro. WTF? 
	{
		x = x + 5;
	}

	if(e.keyCode == 97)
	{
		x = x - 5;
	}

	if(e.keyCode == 119)
	{
		y = y - 5;
	}

	if(e.keyCode == 115)
	{
		y = y + 5;
	}
}

//The parameter e is the object you want to check is colliding with the player.
player.prototype.checkCollision = function ()
{        
        //do the two bounding boxes overlap?
        if ((x < 600 + 100) &&
        (x + 100 > 600) &&
        (y + 100 > 0) &&
        (y < 0 + 100) )
        {     
        	ctx.font = 'italic 40pt Calibri';                
            ctx.fillText("You Win",600,600);        // # GG brosky  
        }     
}
