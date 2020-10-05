import React from "react";
import Wraper from "../components/wrapper";
import Sketch from "../components/test";
import Video from "../components/pruvideo";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const procesamiento = () => (
    <Layout>
        <h1>Procesamiento de imágenes y videos por software</h1>
        <p>
                Dentro del procesamiento de imágenes y videos existen una variedad de efectos que pueden ser aplicados, a continuación se presentarán algunos de ellos desde un punto de vista teórico y práctico mediante el uso de la librería p5.js que es el homólogo del programa de Processing pero diseñado para poder desplegar el resultado en web.
        </p>
        <h2>Procesamiento de imágenes</h2>
        <Wraper sk={Sketch}/>
        <p>
            Cuando se carga una imagen esta es representada internamente en p5.js mediante una arreglo llamado
            pixels[] el cual difiere un poco a como se maneja en Processing.
        </p>
        <img src="pixels.png" alt="No hay"/>
        <p>
            Como se observa en la imagen a diferencia de processing en en p5.js en cada posición del arreglo se guarda el valor de un solo atributo Rojo,Verde,Azul o Transparencia (por sus siglas en inglés RGBA) que conforma el pixel es decir que por cada píxel tenemos 4 posiciones del arreglo pixels[].Esto nos da mucha flexibilidad pero a su vez da mucha más complejidad el manejo de los pixeles a comparación de processing.
        </p>
        <p>
            Por el contrario en Processing usted solo accede al píxel y a su vez puede acceder a sus atributos respectivos.
        </p>
        <ol>
            <li><h3>Escala de grises</h3>
                <p>
                El efecto consiste en dada una imagen determinada esta es convertida a escala de grises.Para llevarlo a cabo se toma cada píxel y se asigna un mismo valor a cada uno de los atributos del de RGB y la transparencia se deja igual. Para determinar el valor se utilizarán las siguientes 2 técnicas:
                </p>
                <ol>
                    <li><h4>Promedio RGB</h4></li>
                    <p>
                        En este caso el  nuevo valor se calcula sacando el promedio de los colores del RGB y conservando la misma transparencia.
                    </p>
                    <img src="https://latex.codecogs.com/png.latex?P=\frac{R&plus;G&plus;B}{3}" alt=""/>
                    <li><h4>LUMA</h4></li>
                        <p>
                            La técnica anterior presenta algunos inconvenientes debido a que toma como si cada color del RGB aportará lo mismo para la formación de la imagen lo cual no es cierto para la mayoría de los casos.Esto hizo que se ajustara la ponderación de aporte de cada uno de los colores, haciendo que la formula quedaria asi:
                        </p>
                        <img src="https://latex.codecogs.com/png.latex?P=0.2126*R&space;&plus;&space;0.7152*G&space;&plus;&space;0.0722*B" alt=""/>
                </ol>
            </li>
            <li><h3>Máscaras de convolución</h3>
            <p>
                Consiste en calcular el nuevo pixel transformado de la imagen mediante la sumatoria de la multiplicación matricial entre el kernel y la matriz formada por el pixel y los píxeles de los vecinos colindantes. Los valores del kernel y el tamaño del mismo es el que determina el efecto a aplicar y el nivel de intensidad del mismo.
            </p>
                <ol>
                    <li>
                        <h4>Efecto borroso</h4>
                        <p>
                            Para el caso del efecto borroso se utilizó la técnica conocida box blur la cual toma una matriz de 3x3, donde cada una de las celdas tiene el valor de 1/9 como se presenta a continuación.
                        </p>
                        <img src="https://latex.codecogs.com/png.latex?K=\begin{pmatrix}&space;\frac{1}{9}&space;&&space;\frac{1}{9}&space;&&space;\frac{1}{9}&space;\\[6pt]&space;\frac{1}{9}&space;&&space;\frac{1}{9}&space;&&space;\frac{1}{9}\\[6pt]&space;\frac{1}{9}&space;&&space;\frac{1}{9}&space;&&space;\frac{1}{9}&space;\end{pmatrix}" alt=""/>
                    </li>
                    <li>
                        <h4>Detección de bordes</h4>
                        <p>
                            Para este efecto existen distintas soluciones pero para nuestro caso particular
                            se eligió una sencilla donde cada uno de las celdas toma un valor de -1 con excepción 
                            de la del centro la cual toma un valor de 8
                        </p>
                        <img src="https://latex.codecogs.com/png.latex?K=\begin{pmatrix}&space;-1&space;&&space;-1&space;&&space;-1&space;\\&space;-1&space;&&space;8&space;&&space;-1&space;\\&space;-1&space;&&space;-1&space;&&space;-1&space;\end{pmatrix}" alt=""/>
                    </li>
                    <li>
                        <h4>Efecto sharpen</h4>
                        <p>
                            Igual que en los efectos anteriores se decidio utilizar una matriz 3x3, la cual presentamos 
                            a continuación:
                        </p>
                        <img src="https://latex.codecogs.com/png.latex?K=\begin{pmatrix}&space;0&space;&&space;-1&space;&&space;0&space;\\&space;-1&space;&&space;5&space;&&space;-1&space;\\&space;0&space;&&space;-1&space;&&space;0&space;\end{pmatrix}" alt=""/>
                    </li>
                </ol>
                <p>
                    Como la matriz utilizada en los 3 casos es la misma entonces se decidió utilizar el mismo 
                    código presentado a continuación:
                </p>
            </li>
            <li>
				<h3>Histograma de la imagen</h3>
				<p>
					Es una distribución gráfica de los distintos tonos de una imagen, la mostrada en la presente pŕactica representa
					256 tonos de los colores Rojo, Verde y Azul, además de 256 niveles de brillo.
				</p>
				<h4>Creación de la gráfica</h4>
				<p>
					Para la creación de la gráfica, se declararon 4 arreglos, uno para cada color RGB y otro para el brillo, luego se
					evaluó cada pixel de la imagen, calculando su brillo (siendo este valor transformado en un entero entre 0 y 255),
					e incremmentando el valor correspondiente al tono de cada color y brillo en su arreglo correspondiente.
				</p>
				<p>
					Finalmente se mapea la longitud de los arrays con el tamaño de la imagen, para dibujar las líneas que representen
					los diferentes tonos y brillos procesados.
				</p>
				<h4>Interpretación de la Gráfica</h4>
				<p>
					En esta se ven 4 gráficas superpuestas, donde la que tiene el color negro representa el brillo, y las demás tienen
					el color de los tonos que buscan representar.
				</p>
				<h5>Tonos Oscuros</h5>
				<p>
					La gráfica tiende a desplazarse a la izquierda, ya que los tonos de los colores utilizados son más oscuros, y por ende
					su brillo es más bajo.
				</p>
				<img src="images/histogram_00.png"/>
				<h5>Tonos Claros</h5>
				<p>
					La gráfica tiende a desplazarse a la derecha, puesto que los tonos presentes en la misma son claros y su brillo es más alto.
				</p>
				<img src="images/histogram_01.png"/>
				<h5>Distribución Homogénea</h5>
				<p>
					El histograma se distribuye a lo largo de todo el eje horizontal, esto porque no existen zonas quemadas ni excesivamente
					oscuras, por lo que no se encontrarán grandes picos en la gráfica.
				</p>
				<img src="images/histogram_02.png"/>
			</li>
            <li>
				<h3>Segmentación de imagenes</h3>
				<p>
					La segmentación es el proceso de dividir la imagen en grupos de pixeles, el objetivo es simplificar o cambiar la representación de
					la misma que resulta más significativa y fácil de analizar. Esta es utilizada para localizar objetos como para encontrar los
					límites de estos en una imágen.
				</p>
				<p>
					Para la creación de esta funcionalidad, se procesó la imagen, transformandola a un formato de escala de grises utilizando el
					algorítmo luma, luego de ello se definieron 4 grupos y se les asignó un color:
					<ul>
						<li>Aquellos cuyo brillo estuviera entre 0 y 63, fueron redefinidos con el color negro.</li>
						<li>Aquellos cuyo brillo estuviera entre 64 y 127, fueron redefinidos con el color cyan.</li>
						<li>Aquellos cuyo brillo estuviera entre 128 y 191, fueron redefinidos con el color magenta.</li>
						<li>Aquellos cuyo brillo estuviera entre 192 y 255, fueron redefinidos con el color blanco.</li>
					</ul>
					El resultado de la segmentación previamente explicado, es el siguiente:
				</p>
				<img src="images/segmentation.png"/>
			</li>
        </ol>
        <h2>Procesamiento de videos</h2>
        <p>
            Se utilizaron las mismas tecnicas aplicadas para imágenes para el procesamiento del video. En este casos
            debido a la cantidad de frames y pixeles que tiene que procesar el algoritmo no fue posible los efectos que impliquen
            convolución de imagen (borroso,detección de bordes y sharpen). Por tal motivo se determino llevar a cabo ese algoritmo 
            a processing.
        </p>
        <Wraper sk={Video}/>
        <p>
            Se aplicaron las mismas tecnicas utilizadas para las imagenes pero debido a causas desconocidas los efectos
            que involucran mascaras de convolución no son los suficientemente eficientes para ser procesados, por tal motivo
            se decidio pasar a realizarlos en processing. A continuación se explicara la tecnica utilizada en processing para el 
            procesamiento de video.
        </p>
        <ol>
            <li>
                <h3>Máscaras de convolución</h3>
                <p>
                    Cabe aclarar que en processing como discutiamos anteriormente los pixeles son representados 
                    de forma distinta a como lo realiza P5JS de ahi a que haya tocado modificar y cambiar el código respectivo
                </p>
                
                <ol>
                    <li><h4>Efecto borroso</h4></li>
                    <p>
                        En este caso se utilizo la siguiente matriz para aplicar dicho efecto,pero al parcer
                        no se alcanza a percibir muy claramente el efecto borroso en la imagen
                    </p>
                    <img src="https://latex.codecogs.com/gif.latex?\begin{pmatrix}&space;0.11&space;&&space;0.11&space;&&space;0.11\\&space;0.11&space;&&space;0.11&space;&&space;0.11\\&space;0.11&space;&&space;0.11&space;&&space;0.11&space;\end{pmatrix}"/>
                    <li><h4>Detección de bordes</h4></li>
                    <p>
                        En este caso se utilizo la siguiente matriz para aplicar dicho efecto,aqui si se logra ver claramente como el efecto fue aplicado y como utilizamos el mismo algoritmo 
                        que el efecto borroso solo que se modifico la matriz utilizada      
                    </p>
                    <img src="https://latex.codecogs.com/gif.latex?\begin{pmatrix}&space;-6&space;&&space;0&space;&&space;0\\&space;0&space;&&space;6&space;&&space;0\\&space;0&space;&&space;0&space;&&space;-6&space;\end{pmatrix}"/>
                    <p>
                    <strong>PD:</strong> Para ejecutar el programa en processing hay que pulsar una tecla b para borroso y e para detección de bordes
                    </p>
                </ol>
            </li>
        </ol>
        <h2>Dificultades encontradas</h2>
        <ul>
            <li>Difilcultad para el manejo del arreglo de pixels en P5JS</li>
            <li>La falta de funciones equivalentes de un lenguaje a otro que en teoria son hermanos hizo que el resultado presentado en uno sea distinto a como se muestra en otro</li>
        </ul>
    </Layout>
)
export default procesamiento