import { kenPic, ryuPic, Bg, imageLoad, RyuSprite } from "./imageloading.js";
import { Ryu } from "./ryu.js";
import { Ken } from "./ken.js";

console.log("hello world");

window.onload = function () {
    imageLoad(loadingDone);    
}
    
function loadingDone(){

    const ken = new Ken(kenPic);
    const ryu = new Ryu(RyuSprite);
    const canvasEl = document.getElementById ("superfighters");
    const graph = canvasEl.getContext ("2d");
    
    function fighterAnimate () {
        
        graph.drawImage (Bg, 0, 0);
        ken.drawKen (graph);
        ken.updateKen(canvasEl);
        ryu.drawRyu(graph);
        ryu.updateRyu(canvasEl)  
        window.requestAnimationFrame(fighterAnimate); 
      
    }   
    
    window.requestAnimationFrame(fighterAnimate);    
}


