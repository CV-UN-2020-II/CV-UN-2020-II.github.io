import React from "react";
import Wraper from "../components/wrapper";
import ilusion1 from "../components/ilusion1";
import ilusion2 from "../components/ilusion2";
import ilusion3 from "../components/ilusion3";
import ilusion4 from "../components/ilusion4";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const ilusiones=()=>(
    <Layout>
       <h1>Ilusiones</h1>
       <ol>
           <h2><li>Kanizsa Illusion</li></h2>
           <p>
            Esta es una variación del clasico ejemplo de las llamadas ilusiones de contorno.
            Las cuales consisten en la visualización de una figura que en un principio no existe,
            en este caso particular se puede observar como resultado de ls ilusion una estrella.
           </p>
           <Wraper sk={ilusion1}/>
           <h2><li>Motion Binding Illusion</li></h2>
           <p>
            Es una ejemplo de ilusión optica donde se supone que hay un rectangulo o cuadrado que esta 
            es movimiento pero en realidad son 4 lineas las cuales se comportan arbitrariamente. Esta ilusion
            se logra gracias a los 4 cuadrados estaticos de las esquinas.
           </p>
           <span>Nota: </span> Click para quitar o poner los cuadrados
           <Wraper sk={ilusion2}/>
           <h2><li>Breathing Square Illusion</li></h2>
           <p>
            Visualmente, el cuadrado escondido parece estar haciéndose más grande o más pequeño, pero solo está rotando. Presione IZQUIERDA para ocultar los cuadrados naranjas y DERECHA para mostrarlos. Tomado de https://michaelbach.de/ot/mot-breathingSquare/index.html
           </p>
           <Wraper sk={ilusion3}/>
           <h2><li>Stepping feet Illusion</li></h2>
           <p>
            Los dos rectángulos se mueven igual, pero pareciera que se mueven de a pasos. Presione ESPACIO para quitar las franjas. Tomado de https://michaelbach.de/ot/mot-feetLin/index.html
           </p>
           <Wraper sk={ilusion4}/>
       </ol>
      
    </Layout>
)
export default ilusiones;