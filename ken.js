export class Ken {

    constructor(image){
        this.kenPicx = 0;
        this.kenSpeed = 1;
        this.image = image;
        
    }

    updateKen(canvasEl) {
        this.kenPicx += this.kenSpeed;
        if (this.kenPicx >= canvasEl.width - this.image.width || this.kenPicx < 0){
        this.kenSpeed *= -1;
        }
    }
    
    drawKen(graph){
        graph.drawImage(this.image,this.kenPicx, 110, this.image.width  , this.image.height);
    }

}




