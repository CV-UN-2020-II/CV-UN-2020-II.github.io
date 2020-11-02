export default function ilu2(p5){
    
    let x11,y11,x12,y12;
    let x21,y21,x22,y22;
    let x31,y31,x32,y32;
    let x41,y41,x42,y42;
    let cont,change;
    let des;
    var leftPressed=false;
    p5.setup=()=>{
        p5.createCanvas(200,200);
        //linea 1
        x11=40;
        y11=90; 
        x12=85; 
        y12=50;
        //linea 2
        x21=100 
        y21=45
        x22=155 
        y22=90
        //linea 3
        x31=105
        y31=145 
        x32=150 
        y32=105
        //linea 4
        x41=40 
        y41=105
        x42=90
        y42=150 
        cont=1
        change=0.3
        des=true
    }

    p5.draw=()=>{
        p5.background(220);
         p5.line(x11, y11, x12, y12); //top
         p5.line(x21, y21, x22, y22);
         p5.line(x31, y31, x32, y32); //bottom
         p5.line(x41, y41, x42, y42); //
         
        
        
         if(des==true){
            //Linea 1
            x11+=change
            y11+=change
            x12+=change
            y12+=change
            //Linea 2
             x21-=change
             y21+=change
             x22-=change
             y22+=change
            //linea 3
            x31+=change
            y31+=change
            x32+=change
            y32+=change
            //linea 4
            x41-=change
            y41+=change
            x42-=change
            y42+=change
         }else{
              //linea 1
            y11-=change
            x11-=change
            x12-=change
            y12-=change
            //Linea 2
            x21+=change
            y21-=change
            x22+=change
            y22-=change
            //linea 3
            x31-=change
            y31-=change
            x32-=change
            y32-=change
            //linea 4
            x41+=change
            y41-=change
            x42+=change
            y42-=change
         }
         if(cont%20==0){
             des=!des
         }
         cont+=1

         if(!leftPressed){
             //rightPressed=false;
               //square 1
                p5.quad(100, 25, 125, 50, 100, 75, 75, 50);
                //square 2
                p5.quad(150, 75, 175, 100, 150, 125, 125, 100);
                //square 3
                p5.quad(100, 125, 125, 150, 100, 175, 75, 150);
                //square 4
                p5.quad(45, 75, 70, 100, 45, 125, 20, 100);
         }

        
    }

    p5.mouseClicked=()=>{
        if(p5.mouseButton === p5.LEFT) {
            leftPressed = !leftPressed;
        }
    }
}