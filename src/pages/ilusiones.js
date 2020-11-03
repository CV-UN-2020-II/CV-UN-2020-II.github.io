import React from "react";
import Wraper from "../components/wrapper";
import ilusion1 from "../components/ilusion1";
import ilusion2 from "../components/ilusion2";
import ilusion7 from "../components/ilusion7";
import ilusion8 from "../components/ilusion8";
import ilusion3 from "../components/ilusion3";
import ilusion5 from "../components/ilusion5";
import ilusion6 from "../components/ilusion6";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const ilusiones=()=>(
    <Layout>
       <h1>Ilusiones</h1>
       <ol>
           <h2><li>Kanizsa Illusion</li></h2>
           <p>
            Esta es una variación del clasico ejemplo de las llamadas ilusiones de contorno.
            Las cuales consisten en la visualización de una figura que en un principio no existe,
            en este caso particular se puede observar como resultado de la ilusion una estrella.
           </p>
           <Wraper sk={ilusion1}/>
           <h2><li>Breathing Square Illusion</li></h2>
           <p>
            Visualmente, el cuadrado escondido parece estar haciéndose más grande o más pequeño, pero solo está rotando.
           </p>
           <Wraper sk={ilusion7}/>
           <h2><li>Stepping feet Illusion</li></h2>
           <p>
            Los dos rectángulos se mueven igual, pero pareciera que se mueven de a pasos.
           </p>
           <Wraper sk={ilusion8}/>
           <h2><li>Motion Binding Illusion</li></h2>
           <p>
            Es una ejemplo de ilusión optica donde se supone que hay un rectangulo o cuadrado que esta 
            es movimiento pero en realidad son 4 lineas las cuales se comportan arbitrariamente. Esta ilusion
            se logra gracias a los 4 cuadrados estaticos de las esquinas.
           </p>
           <b>Nota: </b> Click para quitar o poner los cuadrados
           <Wraper sk={ilusion2}/>
  
  
            <h2><li>Motion Dots Illusion</li></h2>
           <p>
              Pareciera que los circulos se movieran en armonia como si fuera el movimiento de una
              ola pero la realidad es que solo se estan movimiendo en su propio lugar.Esta ilusion tambien
              es conocida como Wave Illusion
           </p>
           <Wraper sk={ilusion3}/>
           <h2><li>Rotating spiral</li></h2>
           <p>
               Ilusión donde pareciera que el espiral esta rotanto en todas sus capas pero la realidad es 
               que solamente se agregan nuevas capas de circulos concentricas
           </p>
           <Wraper sk={ilusion5}/>
           <h2><li>Muller-Lyer Illusion</li></h2>
           <p>
               Sabes donde se encuentra el centro de la linea? Pues a menos que estes muy entrenado lo más 
               probable es que hayas errado con tu respuesta. 
           </p>
            <b>Nota: </b> Para ver la respuesta correcta presionar la flecha hacia la derecha
            <br/>
           <Wraper sk={ilusion6}/>
           
       </ol>
        <h2>Preguntas complementarias</h2>
        <ol>
            <li>Complete la tabla</li>
             <table>
                <tr>
                    <th>Ilusión</th>
                    <th>Categoria</th>
                    <th>Referencia</th>
                    <th>Interactividad</th>
                </tr>
                <tr>
                    <td>Kanizsa</td>
                    <td>Contorno</td>
                    <td><a href="https://commons.wikimedia.org/wiki/File:Illusory_star.svg">https://commons.wikimedia.org/wiki/File:Illusory_star.svg</a> </td>
                    <td>No aplica</td>
                </tr>
                <tr>
                    <td>Breathing Square</td>
                    <td>Geometrica,<br/>movimiento</td>
                    <td><a href="https://michaelbach.de/ot/mot-breathingSquare/index.html">https://michaelbach.de/ot/mot-breathingSquare/index.html</a></td>
                    <td>Flecha izquierda para ocultar cuadrados</td>
                </tr>
                <tr>
                    <td>Stepping feet</td>
                    <td>Movimiento</td>
                    <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">https://michaelbach.de/ot/mot-feetLin/index.html</a> </td>
                    <td>Espacio para quitar las lineas</td>
                </tr>
                <tr>
                    <td>Motion Binding</td>
                    <td>Movimiento,<br/>interactividad</td>
                    <td><a href="https://michaelbach.de/ot/mot-motionBinding/index.html">https://michaelbach.de/ot/mot-motionBinding/index.html</a> </td>
                    <td>Click izquierdo para mostrar cuadrados</td>
                </tr>
                <tr>
                    <td>Motion Dots</td>
                    <td>Movimiento</td>
                    <td><a href="https://medium.com/@naziafakhruddin/creating-illusions-in-p5-js-part-3-moving-dot-illusion-a67157723838">https://medium.com/@naziafakhruddin/creating-illusions-in-p5-js-part-3-moving-dot-illusion-a67157723838</a> </td>
                    <td>No aplica</td>
                </tr>
                <tr>
                    <td>Rotating Spiral</td>
                    <td>Movimiento</td>
                    <td></td>
                    <td>No aplica</td>
                </tr>
                <tr>
                    <td>Muller-Lyer</td>
                    <td>Distorsion, <br/> Interactividad</td>
                    <td><a href="https://michaelbach.de/ot/sze-muelue/index.html">https://michaelbach.de/ot/sze-muelue/index.html</a> </td>
                    <td>Flecha derecha para punto central</td>

                </tr>
            </table>
            <li>Describa brevememente las referencias estudiadas y los posibles temas en los que le gustaría profundizar</li>
            <p>
                A titulo personal (Andrés Fernando Román Arévalo) de estos temas cubiertos hasta el momento no me gustaria
                profundizar en ninguno.Aunque si hablamos globalmente me gustaria investigar y profundizar en temas relacionados
                con la visualización de la información. 
            </p>
        </ol>
    </Layout>
)
export default ilusiones;