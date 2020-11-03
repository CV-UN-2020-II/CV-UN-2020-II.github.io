export default function ilu4(p5){
    
    p5.setup=()=>{
        p5.createCanvas(400,400,WEBGL);

    }

    p5.draw=()=>{
        p5.background(220);
        p5.circle(200, 200, 300)
        p5.ortho()
    }

}