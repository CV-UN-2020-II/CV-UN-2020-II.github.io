export default function pruvideo(p5){
    var vide,sel,copia;
    var button;
    var pp=false;
    p5.setup=()=>{
        p5.createFileInput(p5.handleFile);
        sel = p5.createSelect();
        sel.option('...','0');
        sel.option('Promedio RGB','1');
        sel.option('Luma','2');
        sel.option('Efecto borroso','3');
        sel.option('Deteccion de bordes','4')
        sel.option('Sharpen','5');
        sel.option('Histograma','6');
        sel.option('Segmentacion','7');
        sel.selected('0');
        button = p5.createButton('play');
        button.mousePressed(cambiar); 
        p5.createCanvas(800,400);

    }

    function videoRGBLuma(option){
        let average;
        p5.image(vide,0,0,350,400);
        vide.loadPixels();
        copia=vide.get();
        copia.loadPixels();
        for (var y = 0; y < vide.height; y++) {
            for (var x = 0; x < vide.width; x++) {
                var offset = (x+y*vide.width)*4;
                const R=vide.pixels[offset];
                const G=vide.pixels[offset+1];
                const B=vide.pixels[offset+2];
                if(option=='1'){
                    average=R*0.333+G*0.333+B*0.333;
                }else{
                    average=0.2126*R + 0.7152*G + 0.0722*B
                }
                copia.pixels[offset]=copia.pixels[offset+1]=copia.pixels[offset+2]=average;
                copia.pixels[offset+3]=vide.pixels[offset+3];   
            }
        }
        copia.updatePixels();
        p5.image(copia,450,0,350,400);
    }

    p5.draw=()=>{
        if(vide){
            let opt=sel.value();
            if(opt=='1'){
                videoRGBLuma(opt);
            }else if(opt=='2'){
                videoRGBLuma(opt);
            }
            
        }
        

    }

    p5.handleFile=(file)=>{
        if(file.type==='video'){
            vide=p5.createVideo(file.data,'');
            //vide.autoplay();
            vide.size(350,400);
            vide.hide();
        }else{
            vide=null;
        }
    }
    
    function cambiar() {
        if(vide && !pp){
            vide.play();
            pp=true;
        }else if(vide){
            vide.pause();
            pp=false;
        }
    }


}