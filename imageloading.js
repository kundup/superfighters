const kenPic = new Image ();
const ryuPic = new Image ();
const Bg = new Image ();
const RyuSprite = new Image ()

function imageLoad(loadingDone){    

    const picCounts = [        
        {pic : kenPic, src: "images/ken1.png"},
        {pic : ryuPic, src : "images/ryu2.png"},
        {pic : Bg, src: "images/background.png"},
        {pic : RyuSprite, src : "images/ss.png"},
        
    ]    
    var picCountslength = picCounts.length;
    for (let i = 0; i < picCountslength; i++ ){

        picCounts[i].pic.src = picCounts[i].src;         
        picCounts[i].pic.onload = function() {            
            picCountslength --;
            if (picCountslength == 0){            
                loadingDone();
            }        
        }
    }    
}

export { kenPic, ryuPic, Bg, imageLoad, RyuSprite };
