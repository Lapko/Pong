class drawPlayer{
	constructor(playerType){
		if(playerType)this.posX = 25;
		else this.posX = window.innerWidth - 500;
		this.posY = window.innerHeight/2;
		this.recWidth = 30;
		this.recHeight = 200;
		
		
		//alert();
		this.recDraw(this.posY);
	}
	
	recDraw(posY){
		if(posY > 0 && posY < palette.canvas.height - 200)
			this.posY = posY;
		palette.fillStyle = "#0000FF";
		palette.fillRect(this.posX,this.posY,this.recWidth,this.recHeight);
		//alert(this.posX + " " + posY + " " + this.recWidth + " " + this.recHeight);
	}
}