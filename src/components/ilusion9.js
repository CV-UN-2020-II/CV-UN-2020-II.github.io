export default function ilu5(p5){
    let sliderGroup = [];
    let X;
    let Y;
    let Z;
    let centerX;
    let centerY;
    let centerZ;
    let h = 20;

    p5.setup=()=>{
        p5.createCanvas(500, 300, p5.WEBGL);
        //create sliders
        for (var i = 0; i < 6; i++) {
            if (i === 2) {
            sliderGroup[i] = p5.createSlider(10, 800, 400);
            } else {
            sliderGroup[i] = p5.createSlider(-400, 400, 0);
            }
            h = p5.map(i, 0, 6, 5, 85);
            sliderGroup[i].position(420, 260 + h);
            sliderGroup[i].style('width', '80px');
        }
    }

    p5.draw=()=>{
        // assigning sliders' value to each parameters
        X = sliderGroup[0].value();
        Y = sliderGroup[1].value();
        Z = sliderGroup[2].value();
        centerX = sliderGroup[3].value();
        centerY = sliderGroup[4].value();
        centerZ = sliderGroup[5].value();
        p5.camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

        p5.background(0);
        p5.fill(0, 255, 255)
        p5.rotateY(p5.radians(36))
        p5.rotateX(p5.radians(-58))

        p5.translate(0,50,0)
        p5.box(120,20,20);
        p5.translate(50,0,-50)
        p5.box(20,20,120);
        p5.translate(-100,-50,50)

        //front
        p5.beginShape();
        p5.vertex(-10, -60, 10, 0, 0);
        p5.vertex(10, -35, 10, 0, 0);
        p5.vertex(10, 60, 10, 0, 0);
        p5.vertex(-10, 60, 10, 0, 0);
        p5.endShape(p5.CLOSE);
        //back
        p5.beginShape();
        p5.vertex(-10, -60, -10, 0, 0);
        p5.vertex(10, -35, -10, 0, 0);
        p5.vertex(10, 60, -10, 0, 0);
        p5.vertex(-10, 60, -10, 0, 0);
        p5.endShape(p5.CLOSE);
        //left
        p5.beginShape();
        p5.vertex(-10, -60, 10, 0, 0);
        p5.vertex(-10, -60, -10, 0, 0);
        p5.vertex(-10, 60, -10, 0, 0);
        p5.vertex(-10, 60, 10, 0, 0);
        p5.endShape(p5.CLOSE);
        //right
        p5.beginShape();
        p5.vertex(10, -35, 10, 0, 0);
        p5.vertex(10, -35, -10, 0, 0);
        p5.vertex(10, 60, -10, 0, 0);
        p5.vertex(10, 60, 10, 0, 0);
        p5.endShape(p5.CLOSE);
        //down
        p5.beginShape();
        p5.vertex(-10, 60, 10, 0, 0);
        p5.vertex(10, 60, 10, 0, 0);
        p5.vertex(10, 60, -10, 0, 0);
        p5.vertex(-10, 60, -10, 0, 0);
        p5.endShape(p5.CLOSE);

        //up
        p5.beginShape();
        p5.vertex(-10, -60, 10, 0, 0);
        p5.vertex(10, -35, 10, 0, 0);
        p5.vertex(10, -35, -10, 0, 0);
        p5.vertex(-10, -60, -10, 0, 0);
        p5.endShape(p5.CLOSE);
    }
}