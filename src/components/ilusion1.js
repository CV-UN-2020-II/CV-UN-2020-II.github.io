export default function ilu(p5){
    
    p5.setup=()=>{
        p5.createCanvas(400,300);
    }

    p5.draw=()=>{
        p5.background(220);
        p5.fill("yellow")
        //x,y,w,h,i,f
        p5.arc(80, 120, 80, 80, p5.QUARTER_PI,0); //tl
        p5.arc(200, 50, 80, 80, p5.PI/2+p5.QUARTER_PI/2,p5.PI/2-p5.QUARTER_PI/2); //c
        p5.arc(320, 120, 80, 80, p5.PI, p5.PI-p5.QUARTER_PI); //tr
        p5.arc(120, 250, 80, 80, 0-p5.QUARTER_PI/2, 0-p5.HALF_PI+p5.QUARTER_PI/2); //bl
        p5.arc(280, 250, 80, 80, 3*p5.PI/2-p5.QUARTER_PI/2,p5.PI+p5.QUARTER_PI/2); //br
    }

}