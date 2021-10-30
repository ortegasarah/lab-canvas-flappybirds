class Background {
    constructor(w, h) {
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../images/bg.png"
    }
    draw() {
        if (this.x < -canvas.width) {
            this.x = 0
        }
        this.x--;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }

    grameOver() {
        ctx.font = "90px Georgia"
        ctx.fillText = ("Te moriste soryyy", 250, 200)
    }
}

class Flappy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.vy = 2 //gravity
        this.userPull = 0 //gravity
        this.image.src = "../images/flappy.png"
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    collision(item) {
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}