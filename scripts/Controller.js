class Controller{
	
	
	movePlayer(keyPressed){
			//alert(keyPressed);
			
		switch(keyPressed){
			case "w": 
				palette.fillStyle = "#0000FF";
				this.playerInt = setInterval(function(){	
					playerMain.recDraw(playerMain.posY - 15);
				},1000/60);
				break;
			case "s":
				this.playerInt = setInterval(function(){	
					playerMain.recDraw(playerMain.posY + 15);
				},1000/60);
				break;
			case "c":
				//alert("tried to kill");
				this.kill;
				break;
			case "Escape":
				this.resett();
			default:
				break;
		}	
		//window.requestAnimationFrame(movingPlayer);
	}
	
	moveEnemy(){
		//console.log("hero Y: " + playerMain.posY + " enemy pos Y: " + playerEnemy.posY + " ball X: " + ball.posX + " ball Y: " + ball.posY);
		if(ball.posX > window.innerWidth/3){
			if(ball.posY > (playerEnemy.posY + playerEnemy.recHeight/3))
				playerEnemy.recDraw(playerEnemy.posY + 7);
			else if(ball.posY < (playerEnemy.posY + playerEnemy.recHeight*2/3))
				playerEnemy.recDraw(playerEnemy.posY - 7);
		}
		else playerEnemy.recDraw(playerEnemy.posY);
	}
	//sadasda
	moveBall(){
		this.maxAngle = 5*Math.PI/12;
		
		if(ball.posX-ball.radius + ball.velX > (playerMain.posX + playerMain.recWidth))
			ball.posX += ball.velX;
		else if(((playerMain.posY < ball.posY)&&(playerMain.posY + playerMain.recHeight > ball.posY))&&ball.velX < 0){
			this.collisionY = ((playerMain.posY + playerMain.recHeight/2) - ball.posY)/(playerMain.recHeight/2);
			this.newAngle = this.collisionY * this.maxAngle;
			ball.velX = Math.abs(15*Math.cos(this.newAngle));
			ball.velY = 15*-Math.sin(this.newAngle);
			alert(ball.velX);
			ball.posX += ball.velX;
			ball.posY += ball.velY;
		}

		if(ball.posX + ball.radius + ball.velX < playerEnemy.posX)
			ball.posX += ball.velX;
		else if(((playerEnemy.posY < ball.posY)&&(playerEnemy.posY + playerEnemy.recHeight > ball.posY))&&ball.velX > 0){
			this.collisionY = (playerEnemy.posY + playerEnemy.recHeight/2 - ball.posY)/(playerEnemy.recHeight/2);
			this.newAngle = this.collisionY * this.maxAngle;
			ball.velX = -Math.abs(15*Math.cos(this.newAngle));
			ball.velY = 15*-Math.sin(this.newAngle);
			alert(ball.velX);
			ball.posX += ball.velX;
			ball.posY += ball.velY;
		}
			//console.log(20*Math.sin(this.newAngle) + " collisionY: " + this.collisionY + " newAngle: " + this.newAngle);
		//if(ball.posY - ball.radius > 50 && ball.posY + ball.radius < palette.canvas.height - 100)
			//ball.posY += ball.velY;
		if(ball.posY - ball.radius < 50)
			ball.velY = Math.abs(ball.velY);
		else if(ball.posY + ball.radius > palette.canvas.height)
			ball.velY = -Math.abs(ball.velY);
		ball.posY += ball.velY;
		ball.drawBall();
	}
	
	checkIfTouch(){
		//alert(((playerMain.posY > ball.posY)&&(playerMain.posY + playerMain.recHeight < ball.posY)));
		//console.log(playerMain.posY > ball.posY);
		//console.log((playerMain.posY + playerMain.recHeight < ball.posY));
		if((ball.posX - ball.radius < (playerMain.posX + playerMain.recWidth)) && ((playerMain.posY > ball.posY)||(playerMain.posY + playerMain.recHeight < ball.posY))){
			enemyScore++;
			this.resett();
		}
		if((ball.posX + ball.radius > (playerEnemy.posX)) && ((playerEnemy.posY > ball.posY)||(playerEnemy.posY + playerEnemy.recHeight < ball.posY))){
			playerScore++;
			this.resett();
		}
		//console.log("nazdar");
	}
	
	kill(){
		//clearInterval(ballSpeedInt);
		clearInterval(mainInt);
		clearInterval(this.playerInt);
	}
	
	resett(){
		//clearInterval(ballSpeedInt);
		clearInterval(mainInt);
		//running = false;
		//playerScore = 0;
		//enemyScore = 0;
		document.getElementById("Score").innerHTML = "";
		start();
		main();
	}
}