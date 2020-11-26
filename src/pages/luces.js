import React from "react";
import Wraper from "../components/wrapper";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

import ambiental from "../components/ambiental";
import combinada from "../components/combinada";
import Test from "../components/baby_test";
import Test2 from "../components/light2"


const luces=()=>(
    <Layout>
       
        
        <h1>Luces</h1>
        <h2>Ambiental</h2>
        <p>
        Una fuente de luz ambiental es una luz de fondo, la cual no tiene punto de origen y se va en todas
        las direcciones. Esta se modela mediante un vector de 3 dimensiones que modela la porción visible de 
        de una escena. Para nuestro caso particular la escena que contiene como figura un circulo se le aplico
        luz ambiental como aparece a continuación:
        </p>
        <Wraper sk={ambiental}/>
        <h2>Atenuación</h2>
        <p>
        Se situó una luz en la misma dirección que el cubo y con las teclas A y D se puede alejar y acercar el cubo para ver cómo la luz que lo alcanza se hace más tenue a medida que se aleja
        </p>
        <Test2 />
        <h2>Fog</h2>
        <p>
            Tambien conocida como niebla y esta se modelo en la libreria de Three.js gracias al objeto Fog
            que integra la libreria. Esto se logra gracias a una aproximación donde las partes alejadas de la escena
            en este caso del cubo son neblina mientras que el resto es normal.

            Fuente base para el trabajo: <a href="https://threejsfundamentals.org/threejs/lessons/threejs-fog.html">https://threejsfundamentals.org/threejs/lessons/threejs-fog.html</a> 
        </p>
        <img src="res.gif" ></img>
        
        <h2>Combinada</h2>
        <p>
            Para este caso particular se aplicaron 3 efectos de luz (ambiental, difuso y especular)sobre el cubo que ya se venia trabajando desde antes
            cabe aclarar que principalmete se logra apreciar el efecto ambiental y el especular. Ademas se aplico un breve efecto
            cuando se utiliza el mouse.

            Fuente base para el trabajo: <a href="https://observablehq.com/@camargo/three-js-utah-teapot-with-a-custom-phong-shader-material">https://observablehq.com/@camargo/three-js-utah-teapot-with-a-custom-phong-shader-material</a>
        </p>
        <Wraper sk={combinada}/>
        <h2>Multiples luces</h2>
        <p>
        Se posicionaron 4 luces alrededor de la escena para visualizar cómo iluminaban cada objeto de la misma. En la esfera se pueden ver las proyecciones de los cuatro puntos de luz así como también en el suelo si se mueve de cierta forma. El cubo muestra cómo la luz incide en él a medida que se mueve.

        Fuente base para el trabajo <a href="https://doc.babylonjs.com/divingDeeper/lights/lights_introduction">https://doc.babylonjs.com/divingDeeper/lights/lights_introduction</a>
        </p>
        <Test />
    </Layout>
)
export default luces;