export default function ilu3(p5){

    
    let angle
    p5.setup=()=>{
        p5.createCanvas(400,400);
        angle=0
    }

    p5.draw=()=>{
        p5.background('blue');
  
        for (let i = 50; i < p5.width - 50; i += 50) {
          for (let j = 50; j < p5.height - 50; j += 50) { 
            p5.push()
            p5.translate(i,j)
            p5.rotate(p5.QUARTER_PI+i+angle)
            p5.fill('green')
            p5.stroke('blue')
            p5.strokeWeight(3)
            p5.arc(0, 0, 30, 30, 0, p5.PI+j)
            p5.pop()
            
            p5.push()
            p5.translate(i,j)
            p5.rotate(p5.QUARTER_PI+j+angle)
            p5.fill('green')
            p5.strokeWeight(3)
            p5.stroke('cyan')
            p5.arc(0, 0, 30, 30, p5.PI+i, 0)
            p5.pop()
            
            angle+=0.0003
          }
        }
        
    }

}