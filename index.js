window.onload = function () {
  window.alert(
      '1.Press & Drag the Mouse inside the box to move the image.' +
      '\n' +
      '2.Press & Drag the Mouse inside the box to resize the image' +
      '\n' +
      '3.Press & Drag the Mouse inside the box to move the text' +
      '\n' +
      '4.Press & Drag the Mouse inside the box to Resize the text'
  );
  var canvas = document.getElementById('myCanvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');
  var img = document.getElementById('photo');
  ctx.font = '40px Arial';
  var i = 0;
  var drawing = false;
  var painting = false;
  var drifting = false;
  var seat = false;
  //ctx.drawImage(img, positionX, postionY,resizeX,resizeY);
  var positionX = ctx.canvas.offsetLeft,
    positionY = ctx.canvas.offsetTop;
  var positionTextX = ctx.canvas.offsetLeft,
    positionTextY = ctx.canvas.offsetTop;
  console.log(positionX, positionY);

  ctx.drawImage(img, positionX, positionY);
  ctx.fillText('Give My Certificate', positionTextX, positionTextY);

  MoveButton.onclick = function Move(e) {
    console.log('Move button clicked');

    ctx.canvas.addEventListener('mousemove', function (e) {
      if (drawing) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        positionX = e.clientX;
        positionY = e.clientY;

        console.log(positionX, positionY);
        ctx.drawImage(img, positionX, positionY);
        ctx.fillText('Give My Certificate', positionTextX, positionTextY);
      }
    });

    ctx.canvas.addEventListener('mouseup', function () {
      drawing = false;
     
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });

    ctx.canvas.addEventListener('mousedown', function () {
        
      drawing = true;
      ctx.drawImage(img, positionX, positionY);
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });
  };

  MoveText.onclick = function MoveText(e) {
    console.log('Move Text clicked');
    
    ctx.canvas.addEventListener('mousemove', function (e) {
      if (seat) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        positionTextX = e.clientX;
        positionTextY = e.clientY;

        console.log(positionTextX, positionTextY);
        ctx.drawImage(img, positionX, positionY);
        ctx.fillText('Give My Certificate', positionTextX, positionTextY);
      }
    });

    canvas.addEventListener('mouseup', function () {
      seat = false;
      ctx.drawImage(img, positionX, positionY);
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });

    canvas.addEventListener('mousedown', function () {
      seat = true;
      ctx.drawImage(img, positionX, positionY);
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });
  };

  ResizeText.onclick = function ResizeText(e) {
    console.log('Resize Text clicked');

    ctx.canvas.addEventListener('mousemove', function (e) {
      if (drifting) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.drawImage(img, positionX, positionY);

        ctx.font = `${i++}px Arial`;
        ctx.fillText('Give My Certificate', positionTextX, positionTextY);
      }
     
    });

    canvas.addEventListener('mouseup', function () {
      drifting = false;
      ctx.drawImage(img, positionX, positionY);
      
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });

    canvas.addEventListener('mousedown', function () {
      drifting= true;
      ctx.drawImage(img, positionX, positionY);

      ctx.font = `${i}px Arial`;
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });

    
  };

  ResizeButton.onclick = function Resize(e) {
    console.log('Resize button clicked');

    ctx.canvas.addEventListener('mousemove', function (e) {
      if (drawing) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        resizeX = e.clientX;
        resizeY = e.clientY;
        console.log(resizeX, resizeY);
        ctx.drawImage(img, positionX, positionY, resizeX, resizeY);
        ctx.fillText('Give My Certificate', positionTextX, positionTextY);
      }
    });

    ctx.canvas.addEventListener('mousedown', function () {
      drawing = true;

      ctx.drawImage(img, positionX, positionY, resizeX, resizeY);
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });

    ctx.canvas.addEventListener('mouseup', function () {
      drawing = false;
      
      ctx.fillText('Give My Certificate', positionTextX, positionTextY);
    });
  };
};
