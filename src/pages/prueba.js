import React from "react";
import Wraper from "../components/wrapper";
import Sketch from "../components/sketch";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const prueba = () => (
    <Layout>
        <h1>Prueba</h1>
        <p>Esto es una prueba de p5 usando wrapper</p>
        <Wraper sk={Sketch}/>
    </Layout>

  )

  export default prueba