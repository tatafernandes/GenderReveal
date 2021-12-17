class Background {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.posX = 0;
        this.posY = 0;
        this.score = 0;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './Images/fundo2.jfif';
    };

    draw() {
        this.context.globalAlpha = 0.2;
        this.context.drawImage(this.img, this.posX, this.posY, this.canvas.width, this.canvas.height);
    };
};

class Carrinho {
    constructor(canvas, context, x, y, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './Images/carrinho.png';
        this.speed = 65;
    }

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    };

    moveLeft() {
        if (this.posX > 0) {
        this.posX -= this.speed;
        };
    }

    moveRight() {
        if (this.posX < this.canvas.width - this.width) {
            this.posX += this.speed;
        };
    }


    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }

    checkCollision(object) {
        if (this.posX + 80 < object.posX + object.width &&
            this.posX + 80 + 90 > object.posX &&
            this.posY + 150 < object.posY + object.height &&
            this.posY + 150 + 60 > object.posY)
        return true;
    }
};


class Laco {
    constructor(canvas, context, x, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = 0;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        const imgSrc = ['./Images/laco-rosa.gif'];
        img.src = imgSrc[Math.floor(Math.random() * imgSrc.length)];
        this.speed = 3;
    };

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);  
    };

    move() {
        this.posY += this.speed;
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
};

class Obstacles {
    constructor(canvas, context, x, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = 0;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        const imgSrc = ['./Images/laco-azul.png'];
        img.src = imgSrc[Math.floor(Math.random() * imgSrc.length)];
        this.speed = 3;
    };

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);  
    };

    move() {
        this.posY += this.speed;
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
};


class Fralda {
    constructor(canvas, context, x, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = 0;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './Images/fralda-suja.jpg';
        this.speed = 3;
    };

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);  
    };

    move() {
        this.posY += this.speed;
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
};