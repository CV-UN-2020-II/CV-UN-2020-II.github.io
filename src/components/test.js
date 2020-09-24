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
            }
        }else if(val=='3'){
            let v=1
            var k1=[[v,v,v],[v,v,v],[v,v,v]]
            drawConvolution(k1)
        }else if(val=='4'){
            let v=-1
            var matr=[[v,v,v],[v,-8,v],[v,v,v]]
            drawConvolution(matr)
        }
    }

    
    function drawConvolution(k1){
        img.loadPixels();
        copia=p5.createImage(img.width,img.height);
        copia.loadPixels()
        var h=img.height;
        var w=img.width;
        for(let x=0;x<w;x++){
            for(let y=0;y<h;y++){
                var ul = ((x-1+w)%w + w*((y-1+h)%h))*4; 
				var uc = ((x-0+w)%w + w*((y-1+h)%h))*4; 
				var ur = ((x+1+w)%w + w*((y-1+h)%h))*4; 
				var ml = ((x-1+w)%w + w*((y+0+h)%h))*4; 
				var mc = ((x-0+w)%w + w*((y+0+h)%h))*4; 
				var mr = ((x+1+w)%w + w*((y+0+h)%h))*4; 
				var ll = ((x-1+w)%w + w*((y+1+h)%h))*4; 
				var lc = ((x-0+w)%w + w*((y+1+h)%h))*4; 
                var lr = ((x+1+w)%w + w*((y+1+h)%h))*4;
                
                var p0 = img.pixels[ul]*k1[0][0]; 
                var p1 = img.pixels[uc]*k1[0][1]; 
                var p2 = img.pixels[ur]*k1[0][2]; 
				var p3 = img.pixels[ml]*k1[1][0]; 
				var p4 = img.pixels[mc]*k1[1][1]; 
				var p = img.pixels[mr]*k1[1][2]; 
				var p6 = img.pixels[ll]*k1[2][0]; 
				var p7 = img.pixels[lc]*k1[2][1]; 
				var p8 = img.pixels[lr]*k1[2][2]; 
				var red = (p0+p1+p2+p3+p4+p+p6+p7+p8)/9;
					
                p0 = img.pixels[ul+1]*k1[0][0]; 
                p1 = img.pixels[uc+1]*k1[0][1]; 
				p2 = img.pixels[ur+1]*k1[0][2]; 
				p3 = img.pixels[ml+1]*k1[1][0]; 
				p4 = img.pixels[mc+1]*k1[1][1]; 
				p = img.pixels[mr+1]*k1[1][2]; 
				p6 = img.pixels[ll+1]*k1[2][0]; 
				p7 = img.pixels[lc+1]*k1[2][1]; 
				p8 = img.pixels[lr+1]*k1[2][2];
				var green = (p0+p1+p2+p3+p4+p+p6+p7+p8)/9;
					
				p0 = img.pixels[ul+2]*k1[0][0];
				p1 = img.pixels[uc+2]*k1[0][1];
				p2 = img.pixels[ur+2]*k1[0][2];
                p3 = img.pixels[ml+2]*k1[1][0];
                p4 = img.pixels[mc+2]*k1[1][1]; 
				p = img.pixels[mr+2]*k1[1][2]; 
				p6 = img.pixels[ll+2]*k1[2][0];
				p7 = img.pixels[lc+2]*k1[2][1];
				p8 = img.pixels[lr+2]*k1[2][2];
				var blue = (p0+p1+p2+p3+p4+p+p6+p7+p8)/9;
					
				copia.pixels[mc] = red;
				copia.pixels[mc+1] = green;
				copia.pixels[mc+2] = blue;
				copia.pixels[mc+3] = img.pixels[lc+3];      
            }
        }
        copia.updatePixels()
        p5.image(copia, 450, 0, 350, 400);
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