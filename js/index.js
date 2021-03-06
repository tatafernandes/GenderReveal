
  window.onload = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const background = new Background(canvas, context);
    const player = new Carrinho(canvas, context, 350, 400, 240, 300);
    let animationId = null;
    let frames = 0;
    let laco = [];
    let obstacles = [];
    let fralda = [];
    let powerUps = [];
    let score = document.querySelector(".game-score");
    let scoreNumber = document.getElementById('current-score');
    const gameOver = new Image();
    gameOver.src = './Images/game-over.jpg';
    let isGameOver = false;
    let isGameRunning = false;
    const gameWin = new Image();
    gameWin.src = './Images/its-girl.jpg';

    function showScore() {
        score.style.display = "block";
      };
    
      function startGame() {
        if (isGameRunning === false) {
          animationId = setInterval(updateCanvas, 10);
          document.getElementById('start-button').innerText = 'Restart Game';
          showScore();
          isGameRunning = true;
        } else {
          restartGame();
        }
      }

      function restartGame() {
        clearCanvas();
        clearInterval(animationId);
        frames = 0;
        ingredients = [];
        obstacles = [];
        powerUps = [];
        fralda = [];  
        background.score = 0;
        scoreNumber.innerText = background.score;
        player.posX = 350;
        player.posY = 400;
        isGameOver = false;
        isGameRunning = false;
        startGame();
      }

      function createLaco() {
        const min = Math.ceil(75);
        const max = Math.floor(890);
        const lacoX = Math.floor(Math.random() * (max - min)) + min;
        laco.push(new Laco(canvas, context, lacoX, 40, 40));
      }

      function updateLaco() {
        for (let i = 0; i < laco.length; i += 1) {
          laco[i].move();
          laco[i].draw();
          if (laco[i].posY >= canvas.height) {
            laco.shift();
          };
        };
        if (frames % 200 === 0) {
          createLaco();
        }
      }
    
      function checkCatchLaco() {
        let caught = laco.some(function(eachLaco) {
          return player.checkCollision(eachLaco);
        });  
        if (caught) {
          laco.forEach((eachLaco, index) => {
            laco.splice(index, 1);
            background.score += 1;
            scoreNumber.innerText = background.score;
          });
        };
      }

      function createObstacle() {
        const min = Math.ceil(90);
        const max = Math.floor(910);
        const obstacleX = Math.floor(Math.random() * (max - min)) + min;
        obstacles.push(new Obstacles(canvas, context, obstacleX, 50, 60));
      }
    
      function updateObstacles() {
        for (let i = 0; i < obstacles.length; i += 1) {
          obstacles[i].move();
          obstacles[i].draw();
          if (obstacles[i].posY >= canvas.height) {
            obstacles.shift();
          };
        };
        if (frames % 300 === 0) {
          createObstacle();
        }
      }
    
      function checkCatchObstacle() {
        let caught = obstacles.some(function(obstacle) {
          return player.checkCollision(obstacle);
        });  
        if (caught) {
          obstacles.forEach((obstacle, index) => {
            obstacles.splice(index, 1);
            background.score -= 1;
            scoreNumber.innerText = background.score;
          });
        };
      }

      function createFralda() {
        const min = Math.ceil(90);
        const max = Math.floor(910);
        const fraldaX = Math.floor(Math.random() * (max - min)) + min;
    fralda.push(new Fralda(canvas, context, fraldaX, 150, 180));
      }
    
      function updateFralda() {
        for (let i = 0; i < fralda.length; i += 1) {
          fralda[i].move();
          fralda[i].draw();
          if (fralda[i].posY >= canvas.height) {
            fralda.shift();
          };
        };
        if (frames % 600 === 0) {
          createFralda();
        }
      }


      function checkGameOver() {
        let caught = fralda.some(function(eachFralda) {
          return player.checkCollision(eachFralda);
        });  
        if (caught || background.score < 0) {
          isGameOver = true;
          clearInterval(animationId);
          clearCanvas();
          context.drawImage(gameOver, 0, 0, canvas.width, canvas.height);
        };
      }
    
      function checkWin() {
      if (background.score >= 20) {
          clearInterval(animationId);
          clearCanvas();
          context.drawImage(gameWin, 0, 0, canvas.width, canvas.height);
        };
      }
    
      function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    
      function updateCanvas() {
        frames += 1;
        clearCanvas();
        background.draw();
        player.draw();
        updateLaco();
        checkCatchLaco();
        updateObstacles();
        checkCatchObstacle();
        updateFralda();
        checkGameOver();
        checkWin();
      }
    
      document.getElementById('start-button').onclick = () => {
        startGame();
        console.log("test")

      };
    
      document.addEventListener('keydown', (event) => {
        if (isGameOver === false && isGameRunning === true) {
          switch (event.code) {
            case 'ArrowLeft':
            case 'KeyA':
              player.moveLeft();
              break;
            case 'ArrowRight':
            case 'KeyD':
              player.moveRight();
              break;
          };
          updateCanvas();
        }
      });
    }