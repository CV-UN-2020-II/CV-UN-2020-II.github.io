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
        sel.option('Blur optimizado','6');
        sel.option('Segmentacion','7');
        sel.selected('0');
        button = p5.createButton('play');
        button.mousePressed(cambiar); 
        p5.createCanvas(800,400);
        p5.pixelDensity(1);

    }

    function videoRGBLuma(option){
        let average;
        p5.image(vide,0,0,350,400);
        vide.loadPixels();
        copia=vide.get();
        copia.loadPixels();
        console.log(vide.pixels.length)
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

    function videoKernel(k1){
        p5.image(vide,0,0,350,400);
        vide.loadPixels();
        copia=vide.get();
        copia.loadPixels();
        for(var y=0;y<vide.height;y++){
            for(var x=0;y<vide.width;x++){
                var mc=(x+y*vide.width)*4;
                var ul=((x-1)+(y-1)*vide.width)*4;
                var uc=((x)+(y-1)*vide.width)*4;
                var ur=((x+1)+(y-1)*vide.width)*4;
                var ml=((x-1)+(y)*vide.width)*4;
                var mr=((x+1)+(y)*vide.width)*4;
                var ll=((x-1)+(y+1)*vide.width)*4;
                var lc=((x)+(y+1)*vide.width)*4;
                var lr=((x+1)+(y+1)*vide.width)*4;
                
                var p0 = vide.pixels[ul]*k1[0][0]; 
                var p1 = vide.pixels[uc]*k1[0][1]; 
                var p2 = vide.pixels[ur]*k1[0][2]; 
				var p3 = vide.pixels[ml]*k1[1][0]; 
				var p4 = vide.pixels[mc]*k1[1][1]; 
				var p = vide.pixels[mr]*k1[1][2]; 
				var p6 = vide.pixels[ll]*k1[2][0]; 
				var p7 = vide.pixels[lc]*k1[2][1]; 
				var p8 = vide.pixels[lr]*k1[2][2]; 
				var red = p0+p1+p2+p3+p4+p+p6+p7+p8;
					
                p0 = vide.pixels[ul+1]*k1[0][0]; 
                p1 = vide.pixels[uc+1]*k1[0][1]; 
				p2 = vide.pixels[ur+1]*k1[0][2]; 
				p3 = vide.pixels[ml+1]*k1[1][0]; 
				p4 = vide.pixels[mc+1]*k1[1][1]; 
				p = vide.pixels[mr+1]*k1[1][2]; 
				p6 = vide.pixels[ll+1]*k1[2][0]; 
				p7 = vide.pixels[lc+1]*k1[2][1]; 
				p8 = vide.pixels[lr+1]*k1[2][2];
				var green = p0+p1+p2+p3+p4+p+p6+p7+p8;
					
				p0 = vide.pixels[ul+2]*k1[0][0];
				p1 = vide.pixels[uc+2]*k1[0][1];
				p2 = vide.pixels[ur+2]*k1[0][2];
                p3 = vide.pixels[ml+2]*k1[1][0];
                p4 = vide.pixels[mc+2]*k1[1][1]; 
				p = vide.pixels[mr+2]*k1[1][2]; 
				p6 = vide.pixels[ll+2]*k1[2][0];
				p7 = vide.pixels[lc+2]*k1[2][1];
				p8 = vide.pixels[lr+2]*k1[2][2];
				var blue = p0+p1+p2+p3+p4+p+p6+p7+p8;

                copia.pixels[mc]=red;
                copia.pixels[mc+1]=green;
                copia.pixels[mc+2]=blue;
                copia.pixels[mc+3]=vide.pixels[mc+3];  
            }
        }
        copia.updatePixels();
        p5.image(copia,450,0,350,400);
    }

    function blurOptimizado(){
        p5.image(vide, 450, 0, 350, 400);
        p5.filter(p5.BLUR,5);
        p5.image(vide, 0, 0, 350, 400);
    }

    p5.draw=()=>{
        if(vide && pp){
            let opt=sel.value();
            if(opt=='1'){
                videoRGBLuma(opt);
            }else if(opt=='2'){
                videoRGBLuma(opt);
            }else if(opt=='3'){
                let v=1/9;
                let k1=[[v,v,v],[v,v,v],[v,v,v]];
                videoKernel(k1);
            }else if(opt=='4'){
                let v=-1
                let k1=[[v,v,v],[v,8,v],[v,v,v]]
                videoKernel(k1)
            }else if(opt=='5'){
                let v=-1
                let k1=[[0,v,0],[v,5,v],[0,v,0]]
                videoKernel(k1)
            }else if(opt=='6'){
                blurOptimizado();
            }
            
        }
    }

    p5.handleFile=(file)=>{
        if(file.type==='video'){
            vide=p5.createVideo(file.data,'');
            //vide.autoplay();
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