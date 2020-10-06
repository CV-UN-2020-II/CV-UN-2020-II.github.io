import React from "react";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const procesamiento2=()=>(
    <Layout>
        <h1>Procesamiento de imagenes y videos por hardware</h1>
        <p>
            Muchas veces cuando los gráficos a manejar son de tamaño considerable y
            es necesario optimizar el procesamiento de los mismos, muchas veces es necesario
            recurrir al uso del GPU mediante shaders. En processing existe una api que nos permite
            utilizar shaders creados en OpenGL más especificamente en el lenguaje GLSL.
        </p>
        <p>
            En esta parte se exploro algunas técnicas básicas de procesamiento de videos  como
            lo son escala de grises usando Luma y detección de bordes.
        </p>
        <ol>
            <li><h2>Escala de grises usando Luma</h2></li>
                <p>
                    Para la escala de grises se utilizo un shader que toma cada frame del video como una textura, la cual
                    es procesada mediante el uso de la GPU de cada pixel en simultaneo y se le aplica la siguiente formula
                </p>
                <img src="https://latex.codecogs.com/png.latex?P=0.2126*R&space;&plus;&space;0.7152*G&space;&plus;&space;0.0722*B" alt=""/>
            <li><h2>Detección de bordes</h2></li>
        </ol>
        <h2>Resultados y algunos gráficos</h2>
        <p>
            A pesar de que se lograron los objetivos propuestos de realizar los diferentes efectos tanto en imagenes como en video
            los resultados obtenidos no fueron los esperados, ya que como se muestra a continuación en los 2 gráficos el uso de shaders
            hizo que el rendimiento del mismo bajara considerablemente aunque como se puede observar al final el rendimiento tanto de shader
            como por software termina siendo muy similar
        </p>
        <img src="Tabla.PNG" alt=""/>
        <br/>
        <img src="frame.PNG" alt=""/>
        <p><strong>Link al repositorio de procesing: </strong><a href="https://github.com/CV-UN-2020-II/talleres/tree/main/Taller1">Taller 1</a></p>
    </Layout>
)
export default procesamiento2;