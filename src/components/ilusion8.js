export default function ilu4(p5){

    let mostrarCuad = true;

    let xrect1 = 0;
    let valBg = 255;

    p5.setup=()=>{
        p5.createCanvas(600,200);
    }
    p5.draw=()=>{
        p5.background(valBg);
        for (let index = 0; index < 600; index = index + 30) {
            p5.noStroke();
            p5.fill("black");
            p5.rect(index, 0, 15, 200);          
        }

        p5.fill("blue");
        p5.rect(xrect1, 50, 60, 25);
        p5.fill("yellow");
        p5.rect(xrect1, 150, 60, 25);

        xrect1 = xrect1 + 1;

        if (xrect1 > 600) {
            xrect1 = 0
        }

        
    }

    p5.keyPressed=()=> {
        if (p5.keyCode === 32) {
            if(valBg === 255){
                valBg = 0
            }else{
                valBg = 255
            }
        }
      }
}