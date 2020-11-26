export default function combinada(p5){
    p5.setup=()=> {
        p5.createCanvas(400, 400, p5.WEBGL);
      }
      
    p5.draw=()=> {
        p5.background(0);
      
        let locX = p5.mouseX - p5.height / 2;
        let locY = p5.mouseY - p5.width / 2;
      
        p5.ambientLight(50);
        p5.directionalLight(255, 0, 0, 0.25, 0.25, 0);
        p5.pointLight(0, 0, 255, locX, locY, 50);
      
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.specularMaterial(100);
        p5.box(100, 100, 100);
        p5.pop();

      }
}