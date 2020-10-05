export default function Test( p5 ) {
    var img;
    var copia;
    var copia2;
    var sel;

    p5.setup=()=> {
        p5.createFileInput(p5.handleFile);
        sel = p5.createSelect();
        sel.option('...','0');
        sel.option('Promedio RGB','1');
        sel.option('Luma','2');
        sel.option('Efecto borroso','3');
        sel.option('Deteccion de bordes','4')
        sel.option('Sharpen','5');
		sel.option('Histograma','6');
        sel.option('Segmentacion','8');
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
            let v=1/9
            let k1=[[v,v,v],[v,v,v],[v,v,v]]
            drawConvolution(k1)
        }else if(val=='4'){
            let v=1
            let k1=[[v,v,v],[v,-8,v],[v,v,v]]
            drawConvolution(k1)
        }else if(val=='5'){
            let v=-1
            let k1=[[0,v,0],[v,5,v],[0,v,0]]
            drawConvolution(k1)
        }else if(val == '6'){
			drawHistogram()
        }else if(val == '8'){
            if(img){
                drawRGBLuma2(val)
            }
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
				var red = p0+p1+p2+p3+p4+p+p6+p7+p8;

                p0 = img.pixels[ul+1]*k1[0][0];
                p1 = img.pixels[uc+1]*k1[0][1];
				p2 = img.pixels[ur+1]*k1[0][2];
				p3 = img.pixels[ml+1]*k1[1][0];
				p4 = img.pixels[mc+1]*k1[1][1];
				p = img.pixels[mr+1]*k1[1][2];
				p6 = img.pixels[ll+1]*k1[2][0];
				p7 = img.pixels[lc+1]*k1[2][1];
				p8 = img.pixels[lr+1]*k1[2][2];
				var green = p0+p1+p2+p3+p4+p+p6+p7+p8;

				p0 = img.pixels[ul+2]*k1[0][0];
				p1 = img.pixels[uc+2]*k1[0][1];
				p2 = img.pixels[ur+2]*k1[0][2];
                p3 = img.pixels[ml+2]*k1[1][0];
                p4 = img.pixels[mc+2]*k1[1][1];
				p = img.pixels[mr+2]*k1[1][2];
				p6 = img.pixels[ll+2]*k1[2][0];
				p7 = img.pixels[lc+2]*k1[2][1];
				p8 = img.pixels[lr+2]*k1[2][2];
				var blue = p0+p1+p2+p3+p4+p+p6+p7+p8;

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
    
    function drawRGBLuma2(option){
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

                average=0.2126*R + 0.7152*G + 0.0722*B
                
				copia.pixels[index+0] = average
				copia.pixels[index+1] = average
				copia.pixels[index+2] = average
				copia.pixels[index+3] = img.pixels[index+3]
            }
        }
        copia.updatePixels();
        copia.loadPixels();

        //By Yarid
        let promedioCopia = 0;
        let valores = 0;
        let cant = copia.width*copia.height;
        let mitadPromedio = 0;
        for (var i = 0; i < copia.pixels.length; i = i+4) {
            valores = valores + copia.pixels[i]
        }
        promedioCopia = valores/cant;
        mitadPromedio = promedioCopia/2;

        copia2 = p5.createImage(copia.width, copia.height);
        copia2.loadPixels();

        
        // for (var i = 0; i < copia.pixels.length; i = i+4) {
        //     if(copia.pixels[i] < promedioCopia){
        //         copia2.pixels[i] = 0
		// 		copia2.pixels[i+1] = 0
        //         copia2.pixels[i+2] = 0
        //         copia2.pixels[i+3] = 255
        //     }else{
        //         copia2.pixels[i] = 255
		// 		copia2.pixels[i+1] = 255
        //         copia2.pixels[i+2] = 255
        //         copia2.pixels[i+3] = 255
        //     }
        // }
        for (var i = 0; i < copia.pixels.length; i = i+4) {
            if(copia.pixels[i] < 64){
                copia2.pixels[i] = 0
				copia2.pixels[i+1] = 0
                copia2.pixels[i+2] = 0
                copia2.pixels[i+3] = 255
            }else if(copia.pixels[i] < 128){
                copia2.pixels[i] = 255
				copia2.pixels[i+1] = 0
                copia2.pixels[i+2] = 255
                copia2.pixels[i+3] = 255
            }else if(copia.pixels[i] < 192){
                copia2.pixels[i] = 0
				copia2.pixels[i+1] = 255
                copia2.pixels[i+2] = 255
                copia2.pixels[i+3] = 255
            }else{
                copia2.pixels[i] = 255
				copia2.pixels[i+1] = 255
                copia2.pixels[i+2] = 255
                copia2.pixels[i+3] = 255
            }
        }
        console.log(promedioCopia);

        copia2.updatePixels();
        copia.loadPixels();
        p5.image(copia2, 450, 0, 350, 400);
        
    }
    


	function drawHistogram(){
        let R,G,B, maxRange, x, y, index, i;
		img.loadPixels();

		let bright;

		let w, h;
		w = 350;
		h = 400;

		maxRange = 256;
		var histogram = new Array(maxRange);
		for (x = 0; x <= maxRange; x++) {
			histogram[x] = 0
		}

		for (x = 0; x < img.width; x++){
			for (y = 0; y < img.height; y++){
				index = (x + y * img.width)*4;
				R=img.pixels[index+0]
				G=img.pixels[index+1]
				B=img.pixels[index+2]
				bright = p5.int(0.2126*R + 0.7152*G + 0.0722*B)
				histogram[bright]++;
			}
		}

		p5.image(img, 450, 0, 350, 400);
		p5.stroke(0, 0, 255)

		for (x = 0; x < w; x += 2) {
			i = p5.int(p5.map(x, 0, w, 0, 255));
			y = p5.int(p5.map(histogram[i], 0, p5.max(histogram), h, 0));
			p5.line(x + 450, y, x + 450, h);
		}
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