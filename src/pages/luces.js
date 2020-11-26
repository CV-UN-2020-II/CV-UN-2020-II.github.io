import React from "react";
import Wraper from "../components/wrapper";
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

import ambiental from "../components/ambiental";
import testeo from "../components/testeo";
import combinada from "../components/combinada";

const luces=()=>(
    <Layout>
        <h1>Ambiental</h1>
        <Wraper sk={ambiental}/>
        <h1>Combinada</h1>
        <Wraper sk={combinada}/>
        
    </Layout>
)
export default luces;