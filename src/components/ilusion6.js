export default function ilu6(p5){
    let flecha,dib=false;
    p5.setup=()=>{
        p5.createCanvas(360,300);
        flecha = new Flecha(240,100,200,150,240,200);
    }

    p5.draw=()=>{
        p5.background(220);
        
        flecha.show(p5.mouseX, p5.mouseY);
        p5.stroke(p5.color(0, 0, 255));
        p5.strokeWeight(4);
        p5.line(50, 150, 350, 150);
        p5.noFill()
        p5.beginShape()
            p5.vertex(10, 100); 
            p5.vertex(50, 150);
            p5.vertex(10, 200);
        p5.endShape()
        
        p5.beginShape()
            p5.vertex(310, 100); 
            p5.vertex(350, 150);
            p5.vertex(310, 200);
        p5.endShape()

        if(dib){
            p5.fill(p5.color(0,255,0));
            p5.circle(200, 150, 10);
        }
        
    }

    p5.keyPressed=()=>{
        
        if(p5.keyCode==p5.RIGHT_ARROW){
            console.log("Aqui a");
            dib=!dib
        }
        return false
    }

    p5.mousePressed=()=> {
        flecha.pressed(p5.mouseX,p5.mouseY);
    }

    p5.mouseReleased=()=>{
        flecha.notPressed();
    }

    class Flecha {
        
        constructor(x1,y1,x2,y2,x3,y3) {
          this.x1 = x1;
          this.y1 = y1;
          this.x2 = x2;
          this.y2 = y2;
          this.x3 = x3;
          this.y3 = y3
          this.offsetX = 0;
          this.dragging = false;
        }
      
         show(px) {
          if (this.dragging) {
            
            this.x1= px +this.offsetX+40;
            this.x2 = px + this.offsetX;
            this.x3 = px + this.offsetX+40;
          }
          p5.noFill();
          p5.beginShape()
            p5.vertex(this.x1, this.y1); 
            p5.vertex(this.x2, this.y2);
            p5.vertex(this.x3, this.y3);
          p5.endShape()
        }
      
        pressed(px,py) {
            //Mejorar limites
            //if ( px > this.x1 && px < this.x1 + 50 && py > this.y1 && py < this.y1 + 50 ) {
                this.dragging = true;
                
            //}
        }
      
        notPressed() {
            this.dragging = false;
        }
      }

}