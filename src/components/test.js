export default function Test( p5 ) {
    var img;
    var copia;
    var sel;

    p5.setup=()=> {

        p5.createFileInput(p5.handleFile);
        sel = p5.createSelect();
        sel.option('...','0');
        sel.option('Promedio RGB','1');
        sel.option('Luma','2');
        sel.option('Efecto borroso','3');
        sel.option('Deteccion de bordes','4');
        sel.option('Histograma','5');
        sel.option('Segmentacion','6');
        sel.selected('0');
        sel.changed(change)
        p5.createCanvas(800, 400);
    }

    function change(){
        let val=sel.value();
        if(val=='1'){
            if(img){
                drawRGBLuma(val);
                //sel.selected(0);
            }
        }else if(val=='2'){
            if(img){
                drawRGBLuma(val)
                //sel.selected(0);
            }
        }
    }

    
    function drawRGBLuma(option){
        let average,R,G,B;
        img.loadPixels();
        copia=p5.createImage(img.width, img.height)
        copia.loadPixels();
        for (var y = 0; y < img.height; y++) {
            for (var x = 0; x < img.width; x++) {
              var index = (x + y * img.width)*4;
              R=img.pixels[index+0]
              G=img.pixels[index+1]
              B=img.pixels[index+2]
              if(option=='1'){
                average=(R+G+B)/3
              }else{
                average=0.2126*R + 0.7152*G + 0.0722*B
              }
              copia.pixels[index+0] = average
              copia.pixels[index+1] = average
              copia.pixels[index+2] = average
              copia.pixels[index+3] = img.pixels[index+3]     
            }
          }
        copia.updatePixels();
        p5.image(copia, 450, 0, 350, 400);
    }

    p5.draw=()=> {
        if (img) {
           p5.image(img, 0, 0, 350, 400);
        }
    }


    p5.handleFile=(file)=> {
        if (file.type === 'image') {
            img = p5.loadImage(file.data, '');    
        } else {
            img = null;
        }
    }

}