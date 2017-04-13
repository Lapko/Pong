class drawBall{
	constructor(){
		this.decideWay = (Math.random()*10)%2;
		//alert(this.decideWay);
		this.posX = (palette.canvas.width-500)/2;
		this.posY = palette.canvas.height/2;
		this.radius = 50;
		this.velX = Math.random()*10 + 5;
		if(this.decideWay > 1)
			this.velY = Math.random()*10 + 3;
		else
			this.velY = (Math.random()*10 + 3)* -1;
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