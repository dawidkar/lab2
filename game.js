var square1;

function Game()
{		
	square1 = new player();
	initCanvas();
	x = 5;
	y = 5;

	//window.addEventListen("keypress",game.test);
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	//ctx is the context that we will draw on

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.test = function(e)
{
	console.log("test");
	console.log(e.keyCode);
	this.readInput(e);
}

Game.prototype.gameLoop = function()
{
	console.log("gameLoop");
	window.requestAnimationFrame(game.gameLoop);

	ctx.clearRect(0,0,canvas.width,canvas.height);
	square1.draw();
	square1.checkCollision();
}

function readInput(e)
{
	if(e.keyCode == 100)
	{
		square1.move(e);
	}
	if(e.keyCode == 97)
	{
		square1.move(e);
	}
	if(e.keyCode == 119)
	{
		square1.move(e);
	}
	if(e.keyCode == 115)
	{
		square1.move(e);
	}
}