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

            <li><h2>Deteccion de bordes</h2></li>
        </ol>
        <h2>Resultados y algunos gráficos</h2>
        <p><strong>Link al repositorio de procesing: </strong><a href="https://github.com/CV-UN-2020-II/talleres/tree/main/Taller1">Taller 1</a></p>
    </Layout>
)
export default procesamiento2;