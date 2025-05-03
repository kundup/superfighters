const canvasel = document.getElementById("canvas");
const context = canvasel.getContext ("2d");

canvasel.width = 400;
canvasel.height = 400;

class Enemy {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw (){
        context. fillStyle = "blue";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Flying extends Enemy {
    constructor(x, y, height, width, name){
        super(x, y, width, height);
        this.name = name;           
    }
}

const flyEnemy = new Flying (0, 0, 100, 100, "bob");
flyEnemy.draw();
console.log(flyEnemy.name);