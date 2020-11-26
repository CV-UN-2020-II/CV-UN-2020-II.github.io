import React from "react";
import Wraper from "../components/wrapper";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

import ambiental from "../components/ambiental";
import combinada from "../components/combinada";
import escena from "../components/scene.js"


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
        <h2>Fog</h2>
        <p>
            Tambien conocida como niebla y esta se modelo en la libreria de Three.js gracias al objeto Fog
            que integra la libreria. Esto se logra gracias a una aproximación donde las partes alejadas de la escena
            en este caso del cubo son neblina mientras que el resto es normal.

            Fuente base para el trabajo: <a href="https://threejsfundamentals.org/threejs/lessons/threejs-fog.html">https://threejsfundamentals.org/threejs/lessons/threejs-fog.html</a> 
        </p>
        <img src="res.gif" ></img>
        <Wraper sk={escena}/>
        <h2>Combinada</h2>
        <p>
            Para este caso particular se aplicaron 3 efectos de luz (ambiental, difuso y especular)sobre el cubo que ya se venia trabajando desde antes
            cabe aclarar que principalmete se logra apreciar el efecto ambiental y el especular. Ademas se aplico un breve efecto
            cuando se utiliza el mouse.

            Fuente base para el trabajo: <a href="https://observablehq.com/@camargo/three-js-utah-teapot-with-a-custom-phong-shader-material">https://observablehq.com/@camargo/three-js-utah-teapot-with-a-custom-phong-shader-material</a>
        </p>
        <Wraper sk={combinada}/>
        
    </Layout>
)
export default luces;