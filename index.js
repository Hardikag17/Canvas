window.onload = function() {
    window.alert("1.Press the button Move then take cursor inside canvas box to move the image."+"\n"+
                "2.Press the button Resize then take cursor inside canvas box to resize the image");
    var canvas = document.getElementById("myCanvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");
    var img = document.getElementById("photo");
    //ctx.drawImage(img, positionX, postionY,resizeX,resizeY);
    var positionX = ctx.canvas.offsetLeft,positionY = ctx.canvas.offsetTop;

    console.log(positionX,positionY);
    
    ctx.drawImage(img,positionX,positionY);


    MoveButton.onclick = function Move(e){
        
        console.log("Move button clicked");
        canvas.addEventListener("mousemove",function(){

            ctx.canvas.addEventListener("mousemove",function(e){
                ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
                positionX = e.clientX;
                positionY = e.clientY;

                console.log(positionX,positionY);
                ctx.drawImage(img,positionX,positionY);
            });
            
            
        });
    };

    ResizeButton.onclick =function Resize(e){
        console.log("Resize button clicked");
        canvas.addEventListener("mousemove",function(){
           
            ctx.canvas.addEventListener("mousemove",function(e){
                ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
                resizeX=e.clientX;
                resizeY=e.clientY;
                console.log(resizeX,resizeY);
                ctx.drawImage(img,positionX,positionY,resizeX,resizeY);
            });
            
        });
    }

  };