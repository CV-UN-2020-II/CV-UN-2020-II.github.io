import React, { Component } from "react"
import Loadable from "@loadable/component";
import Sketch from "./sketch";

const LoadableP5 = Loadable(() => import('react-p5-wrapper'));

export default class App extends Component{
  render() {
    return( 
        <LoadableP5 sketch={Sketch}/>
       
    )
  }
}