export default function testeo(p5){
    // a shader variable
var theShader;
var vertex = `
precision mediump float;

attribute vec2 vertPosition;

void main() {
   gl_Position = vec4(vertPosition, 0.0, 1.0);
}
`;
var fragment = `
precision mediump float;

void main() {
   gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}
`;


p5.preload=()=>{
  // load the shader
  theShader = p5.loadShader('testeo.vert', 'testeo.frag');
}

p5.setup=()=> {
  // shaders require WEBGL mode to work
  p5.createCanvas(400, 400, p5.WEBGL);
  p5.shader(theShader);
  p5.noStroke();
}

p5.draw=()=> {  
  // send resolution of sketch into shader
  theShader.setUniform('u_resolution', [p5.width, p5.height]);

  // shader() sets the active shader with our shader
  

  // rect gives us some geometry on the screen
  p5.rect(0,0,p5.width, p5.height);
}

}