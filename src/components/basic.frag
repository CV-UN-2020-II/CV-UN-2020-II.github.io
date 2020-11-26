precision mediump int;
precision mediump float;

// Light model
uniform vec3 lightAmbient;

// Data coming from the vertex shader
varying vec4 v_Color;

void main() {

  vec3 color;

  // Component-wise product; that is:
  // ambient_red * color_red, ambient_green * color_green, ambient_blue * color_blue
  color = lightAmbient * vec3(v_Color);

  // Ambient color does not affect the alpha value of the object's color.
  gl_FragColor = vec4(color, v_Color.a);
}