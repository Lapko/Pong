class drawBall{
	constructor(){
		this.posX = (palette.canvas.width-500)/2;
		this.posY = palette.canvas.height/2;
		this.radius = 50;
		this.velX = 10;
		this.velY = 10;
		//this.angle = 45;
		
		this.drawBall(0,0);
	}
	
	drawBall(offX, offY){
		//console.log(this.posX + " " + this.posY);
		if(this.posX > 100 && this.posX < palette.canvas.width - 200)
			this.posX += offX;
		else{
			//alert("menim smer X");
			this.velX *= -1;
			this.posX += this.velX;
		}
		if(this.posY > 50 && this.posY < palette.canvas.height - 100)
			this.posY += offY;
		else{
			//alert("menim smer Y");
			this.velY *= -1;
			this.posY += this.velY;
		}
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