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
				this.kill;
				break;
			case "Escape":
				this.reset();
			default:
				break;
		}	
		//window.requestAnimationFrame(movingPlayer);
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
			if((playerMain.posY > ball.posY)||(playerMain.posY + (playerMain.recHeight*0.3333) < ball.posY)){
				ball.velX *= -1;
				if(ball.velY < 0){
					ball.velY *= -1;
					ball.velX *= 1.2;
				}
				else{
					ball.velY *= 1.3;
					ball.velX *= 0.8;
				}
				ball.posX += ball.velX;
			} else if ((playerMain.posY + (playerMain.recHeight*0.3333) > ball.posY)||(playerMain.posY + (playerMain.recHeight*0.6666) < ball.posY)){
				ball.velX *= -1.3;
				ball.posX += ball.velX;
			} else{
				ball.velX *= -1;
				if(ball.velY < 0){
					ball.velX *= 0.8;
					ball.velY *= 1.3;
				}
				else{
					ball.velX *= 1.2;
					ball.velY *= -1;
				}
				ball.posX += ball.velX;
			}
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
	
	kill(){
		clearInterval(ballSpeedInt);
		clearInterval(mainInt);
		clearInterval(this.playerInt);
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