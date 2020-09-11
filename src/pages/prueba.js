import React from "react";
import Sketch from "react-p5";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';
 
export default (props) => {
    let r = 1;
    let g = 1;
    let b = 1;
    let a = 1;
    const setup = (p5,canvasParentRef) => {
        p5.createCanvas(500, 250).parent(canvasParentRef);
    }
 
    const draw = (p5) => {
    
        p5.loadPixels();
	// Modifica cada pixel del canvas
	for (let y = 0; y < p5.height; y++) {
		for (let x = 0; x < p5.width; x++){
			let index = (x+y*p5.width)*4; // Posicion del pixel
			p5.pixels[index+0]=(y)*r; //Red
			p5.pixels[index+1]=(y-x)*g; //Green
			p5.pixels[index+2]=(x)*b; //Blue
			p5.pixels[index+3]=p5.random(255)*a; //Alpha
		}
	}
	p5.updatePixels();
    }
    const keyPressed = (p5) => {
        if (p5.key === 'r') { // Extrae el comoponente rojo
            r = 0;
        } else if (p5.key === 'g') { // Extrae el comoponente verde
            g = 0;
        } else if (p5.key === 'b') { // Extrae el comoponente azul
            b = 0;
        } else if (p5.key === 'a') { // Extrae el comoponente alfa
            a = 0;
        } else if (p5.key === 'R') { // Agrega el comoponente rojo
            r = 1;
        } else if (p5.key === 'G') { // Agrega el comoponente verde
            g = 1;
        } else if (p5.key === 'B') { // Agrega el comoponente azul
            b = 1;
        } else if (p5.key === 'A') { // Agrega el comoponente alfa
            a = 1;
        }
    }
   
 
    return (
        
    <Layout title="Prueba">
        
    <SEO title="404: Not found" />
    <p>
      <Sketch setup={setup} draw={draw}  keyPressed={keyPressed} />
      </p>
  </Layout>
  
      
  )}
    

    

