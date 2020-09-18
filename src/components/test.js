export default function Test( p5 ) {

    var input;
    var img;
    var leftBuffer;
    var centerBuffer;
    var rightBuffer;

    p5.setup=()=> {

        input = p5.createFileInput(p5.handleFile);
        p5.createCanvas(800, 400);
        leftBuffer = p5.createGraphics(350, 400);
        centerBuffer = p5.createGraphics(100,400);
        rightBuffer = p5.createGraphics(350, 400);
    }

    p5.draw=()=> {
        drawRightBuffer();
        drawCenterBuffer();
        p5.image(rightBuffer, 450, 0);
        p5.image(centerBuffer,300,0);
        if (img) {
           p5.image(img, 0, 0, leftBuffer.width, leftBuffer.height);
        }
    }
    
    function drawCenterBuffer(){
        centerBuffer.background(255, 255, 255);
        centerBuffer.fill(0,0,0);
    }

   function drawRightBuffer(){
        if(img){
            p5.image(img,450,0,rightBuffer.width,rightBuffer.height);
            p5.filter(p5.GRAY)
        }
    }

    p5.handleFile=(file)=> {
        p5.print(file);
        if (file.type === 'image') {
            img = p5.createImg(file.data, '');
            img.hide();
        } else {
            img = null;
        }
    }

}