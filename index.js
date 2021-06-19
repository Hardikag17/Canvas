window.onload = function() {
    window.alert("1.Press the button Move Image then take cursor inside canvas box to move the image."+"\n"+
                "2.Press the button Resize Image then take cursor inside canvas box to resize the image"+"\n"+
                "3.Press the button Move Text then take the cursor inside canvas box to move the text"+"\n"+
                "4.Press the button Resize Image then take the cursor inside canvas box to Resize the text");
    var canvas = document.getElementById("myCanvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");
    var img = document.getElementById("photo");
    ctx.font = "40px Arial";
    var i=0;
    //ctx.drawImage(img, positionX, postionY,resizeX,resizeY);
    var positionX = ctx.canvas.offsetLeft,positionY = ctx.canvas.offsetTop;
    var positionTextX = ctx.canvas.offsetLeft,positionTextY = ctx.canvas.offsetTop;
    console.log(positionX,positionY);
    
    ctx.drawImage(img,positionX,positionY);
    ctx.fillText("Give My Certificate", positionTextX,positionTextY);

    MoveButton.onclick = function Move(e){
        
        console.log("Move button clicked");
        canvas.addEventListener("mousemove",function(){

            ctx.canvas.addEventListener("mousemove",function(e){
                ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
                positionX = e.clientX;
                positionY = e.clientY;

                console.log(positionX,positionY);
                ctx.drawImage(img,positionX,positionY);
                ctx.fillText("Give My Certificate", positionTextX,positionTextY);
            });
            
            
        });
    };

    MoveText.onclick = function MoveText(e){
        
        console.log("Move Text clicked");
        canvas.addEventListener("mousemove",function(){
            
            ctx.canvas.addEventListener("mousemove",function(e){
                ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
                positionTextX = e.clientX;
                positionTextY = e.clientY;

                console.log(positionTextX,positionTextY);
                ctx.drawImage(img,positionX,positionY);
                ctx.fillText("Give My Certificate", positionTextX,positionTextY);
            });
            
            
        });
    };

    ResizeText.onclick = function ResizeText(e){
        
        console.log("Resize Text clicked");
        canvas.addEventListener("mouseover",function(){
            
            ctx.canvas.addEventListener("mousemove",function(e){
                ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
              
                ctx.drawImage(img,positionX,positionY);
                
                ctx.font = `${i++}px Arial`;
                ctx.fillText("Give My Certificate", positionTextX,positionTextY);
                

                

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
                ctx.fillText("Give My Certificate", positionTextX,positionTextY);
            });
            
        });
    }

  };