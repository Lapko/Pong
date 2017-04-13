class drawBall{
	constructor(){
		this.posX = (palette.canvas.width-500)/2;
		this.posY = palette.canvas.height/2;
		this.radius = 50;
		this.velX = 10;
		this.velY = 10;
		//this.angle = 45;
		
		this.drawBall();
	}
	
	drawBall(){
		palette.beginPath();
		palette.arc(this.posX,this.posY,this.radius,0,2*Math.PI,false);
		palette.lineWidth = 5;
		palette.strokeStyle = '#FF0000';
		palette.fillStyle = '#FF0000';
		palette.closePath();
		palette.fill();
		palette.stroke();
	}
}