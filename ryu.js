export class Ryu {

    constructor(image){
        this.ryuPicx = 0;
        this.ryuSpeed = -1;
        this.image = image;
        this.framework = [
            [66, 104],
            [133, 104],
            [201, 104],
        ]
    }

    updateRyu(canvasEl) {
        this.ryuPicx += this.ryuSpeed;
        if (this.ryuPicx >= canvasEl.width - 56 || this.ryuPicx < 0){
        this.ryuSpeed *= -1;
        }
    }

    
    drawRyu(graph){
        for (let i = 0; i < this.framework.length; i++){
            graph.clearRect(0, 0, 384, 224);
            graph.drawImage(this.image, this.framework[i][0], this.framework[i][1], 64, 110, 0, 0, 64, 110);
        }        
    }
}



