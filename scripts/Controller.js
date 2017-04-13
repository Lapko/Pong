class Controller{
	movePlayer(keyPressed){
			//alert(keyPressed);
		switch(keyPressed){
			case "w": 
				palette.fillStyle = "#0000FF";
				playerMain.recDraw(playerMain.posY - 20);
				break;
			case "s":
				palette.fillStyle = "#0000FF";
				playerMain.recDraw(playerMain.posY + 20);
				break;
			case "Escape":
				this.reset();
			default:
				break;
		}
	}
	
	moveEnemy(){
		//console.log("hero Y: " + playerMain.posY + " enemy pos Y: " + playerEnemy.posY + " ball X: " + ball.posX + " ball Y: " + ball.posY);
		if(ball.posY > (playerEnemy.posY + playerEnemy.recHeight/2))
			playerEnemy.recDraw(playerEnemy.posY + 10);
		else 
			playerEnemy.recDraw(playerEnemy.posY - 10);
	}
	//sadasda
	moveBall(){
		if(ball.posX > 100 && ball.posX < palette.canvas.width - 200)
			ball.posX += ball.velX;
		else{
			//alert("menim smer X");
			ball.velX *= -1;
			ball.posX += ball.velX;
		}
		if(ball.posY > 50 && ball.posY < palette.canvas.height - 100)
			ball.posY += ball.velY;
		else{
			//alert("menim smer Y");
			ball.velY *= -1;
			ball.posY += ball.velY;
		}
		
		ball.drawBall();
	}
	
	checkIfTouch(){
		//alert(((playerMain.posY > ball.posY)&&(playerMain.posY + playerMain.recHeight < ball.posY)));
		//console.log(playerMain.posY > ball.posY);
		//console.log((playerMain.posY + playerMain.recHeight < ball.posY));
		if((ball.posX - ball.radius < (playerMain.posX + playerMain.recWidth)) && ((playerMain.posY > ball.posY)||(playerMain.posY + playerMain.recHeight < ball.posY))){
			enemyScore++;
			this.reset();
		}
		if((ball.posX + ball.radius > (playerEnemy.posX)) && ((playerEnemy.posY > ball.posY)||(playerEnemy.posY + playerEnemy.recHeight < ball.posY))){
			playerScore++;
			this.reset();
		}
		//console.log("nazdar");
	}
	
	reset(){
		clearInterval(ballSpeedInt);
		clearInterval(mainInt);
		//running = false;
		document.getElementById("Player").innerHTML = "";
		start();
		main();
	}
}