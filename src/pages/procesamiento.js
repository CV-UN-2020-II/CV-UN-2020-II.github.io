import React from "react";
import Wraper from "../components/wrapper";
import Sketch from "../components/test";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const procesamiento = () => (
    <Layout>
        <h1>Procesamiento de imagenes y videos</h1>
        <p>
            Dentro del procesamiento de imagenes y videos existen una variadad de efectos que pueden ser aplicados, 
            a continuación se presentaran algunos de ellos desde un punto de vista teorico y practico mediante
            el uso de la libreria p5.js que es el homologo del programa de processing pero diseñado para poder 
            desplegar el resultado en web.
        </p>
        <h2>Procesamiento de imagenes</h2>
        <p>
            Cuando se carga una imagen esta es representada internamente en p5.js mediante una arreglo llamado
            pixels[] el cual difiere un poco a como se maneja en processing.
        </p>
        <p>
            Como se observa en la imagen el arreglo en p5.js es 4 veces más grande ya que cada posición
            guarda la referencia de solo el atributo Rojo,Verde,Azul (RGB) o Transparencia del pixel es decir
            que por cada pixel tenemos 4 posiciones del arreglo pixels[].Esto nos da mucha flexibilidad pero 
            a su vez da mucha más complejidad el manejo de los pixeles a comparación de processing
        </p>
        <ol>
            <li><h3>Escala de grises</h3>
                <p>
                    El efecto consiste en dada una imagen determinada esta es convertida a escala de grises.Para 
                    llevarlo a cabo se toma cada pixel y se asigna un mismo valor a cada uno de los atributos del 
                    de RGB y la trasparencia se deja igual. Para determinar el valor se utilizaran las siguientes
                    2 tecnicas:
                </p>
                <ol>
                    <li><h4>Promedio RGB</h4></li>
                    <p>
                        En este caso el  nuevo valor se calcula sacando el promedio de los colores del RGB
                    </p>
                    <li><h4>LUMA</h4></li>
                        <p>
                            La tecnica anterior presenta algunos inconvenientes debido a que toma como si cada color del 
                            RGB aportara lo mismo para la formación de la imagen lo cual no es cierto para la mayoria de los
                            casoa.Esto hizo que se ajustara la ponderación de aporte de cada uno de los colores, haciendo 
                            que la formula quedara asi:
                        </p>
                </ol>
            </li>
            <li><h3>Mascaras de convolución</h3>
                <ol>
                    <li>
                        <h4>Efecto borroso</h4>
                    </li>
                    <li>
                        <h4>Detección de bordes</h4>
                    </li>
                    <li>
                        <h4>Efecto sharpen</h4>
                    </li>
                </ol>
            </li>
            <li><h3>Histograma de la imagen</h3></li>
            <li><h3>Segmentación de imagenes</h3></li>
        </ol>
        <div id="my">
            <Wraper sk={Sketch}/>
        </div>
        <h2>Procesamiento de videos</h2>
        <ol>
            <li>
                <h3>Escala de grises</h3>
                <ol>
                    <li><h4>Promedio RGB</h4></li>
                    <li><h4>Promedio LUMA</h4></li>
                </ol>
            </li>
            <li>
                <h3>Mascaras de convolución</h3>
                <ol>
                    <li><h4>Efecto borroso</h4></li>
                    <li><h4>Detección de bordes</h4></li>
                    <li><h4>Efecto sharpen</h4></li>
                </ol>
            </li>
            <li>
                <h4>Eficiencia computacional</h4>
            </li>
        </ol>
    </Layout>
)
export default procesamiento