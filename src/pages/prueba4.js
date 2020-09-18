import React from "react";
import Wraper from "../components/wrapper";
import Sketch from "../components/test";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const prueba4 = () => (
    <Layout>
        <h1>Hola</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex perferendis dolorem! Earum ipsum tenetur nemo consequatur unde vero sed officiis, quaerat non obcaecati reiciendis quibusdam aliquid modi, iure aspernatur.</p>
        <div id="my">
            <Wraper sk={Sketch}/>
        </div>
    </Layout>
)
export default prueba4