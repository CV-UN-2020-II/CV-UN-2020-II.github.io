export default function ilu3(p5){
    let des;

    let mostrarCuad=true;
    let angle = 0.0;
    p5.setup=()=>{
        p5.createCanvas(400,400);
    }
    p5.draw=()=>{
        p5.background(220);

        let offset = 5

        angle = angle + 0.005
        let c = p5.cos(angle);
        p5.push();
        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate(c);
        p5.rectMode(p5.CENTER)
        p5.fill('blue');
        p5.rect(0, 0, 300, 300);
        p5.pop();

        if(mostrarCuad){
            p5.pop()
            p5.noStroke();
            p5.scale(1);
            p5.fill('orange');
            p5.square(0 - offset, 0 - offset, 200);
            
            
            p5.noStroke();
            p5.scale(1);
            p5.fill('orange');
            p5.square(200 + offset, 0 - offset, 200);

            p5.noStroke();
            p5.scale(1);
            p5.fill('orange');
            p5.square(0 - offset, 200 + offset, 200);

            p5.noStroke();
            p5.scale(1);
            p5.fill('orange');
            p5.square(200 + offset, 200 + offset, 200);
        }

    }

    p5.keyPressed=()=> {
        if (p5.keyCode === p5.LEFT_ARROW) {
            mostrarCuad = false
        } else if (p5.keyCode === p5.RIGHT_ARROW) {
            mostrarCuad = true
        }
      }
}