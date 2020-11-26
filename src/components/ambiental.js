export default function ambiental(p5){
    //this variable will hold our shader object
let theShader;

p5.preload=()=>{
  //theShader = p5.loadShader('basic.vert', 'basic.frag');
}

p5.setup=()=>{
  // shaders require WEBGL mode to work
  p5.createCanvas(400, 400, p5.WEBGL);
  p5.noStroke();
}

p5.draw=()=>{  
  // shader() sets the active shader with our shader
  //p5.shader(theShader);
  p5.background(51);
  p5.ambientLight(150); // white light
  p5.ambientMaterial(255, 102, 94); // magenta material
  //box(30);
  p5.sphere(40);
}

}