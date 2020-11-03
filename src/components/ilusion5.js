export default function ilu5(p5){
    
    let angle
    let change
    let back
    let radius

    p5.setup=()=>{
        p5.createCanvas(400,400); 
        change=1
        back=1
        radius=155
        angle=0
    }

    p5.draw=()=>{
        if(back==1){
            p5.background(165,135,133)
            back+=1
        }else{
            angle+=(p5.PI/100)
            radius=radius/(1+.001)
            change+=1
            p5.noStroke()
            p5.fill(0,200,0)
            p5.translate(200,200)
            p5.rotate(-1*angle)
            if(change%8==0){
                p5.fill(255)
            }else if(change%8==4){
                p5.fill(0)
            }else if(change%8==1){
                p5.fill(171,236,67)
            }else if(change%8==5){
                p5.fill(163,72,225)
            }else{
                p5.noFill()
            }
            
            p5.ellipse(radius,0,radius/5,radius/3)
            
            
        }
    }

}