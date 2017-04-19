class drawBall{
	constructor(){
		this.decideWay = (Math.random()*10)%2;
		//alert(this.decideWay);
		this.posX = (palette.canvas.width-500)/2;
		this.posY = palette.canvas.height/2;
		this.radius = 20;
		this.velX = 10;
		if(this.decideWay > 1)
			this.velY = 10;
		else
			this.velY = -10;
		//this.angle = 45;
		
		this.drawBall();
	}
	
	drawBall(){
		//console.log("VelX : " + this.velX + " VelY : " + this.velY );
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