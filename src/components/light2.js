/* Babylon JS is available as **npm** package.  
You can easily build a simple `React` Component around a `canvas` and Babylon JS
I have created a minimal example with React+ Babylon:
 */
import React, { Component } from "react";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

var scene;
var boxMesh;
var light1;
/**
 * Example template of using Babylon JS with React
 */
class BabylonScene extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: false };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);

    //Create Scene
    scene = new BABYLON.Scene(this.engine);

    //--Light---
    this.addLight();

    //--Camera---
    this.addCamera();

    //--Meshes---
    this.addModels();

    //--Ground---
    this.addGround();

    // Add Events
    window.addEventListener("resize", this.onWindowResize, false);

    // Render Loop
    this.engine.runRenderLoop(() => {
      scene.render();
    });

    //Animation
    // scene.registerBeforeRender(() => {
    //   boxMesh.position.z += 0.03;
    //   if(boxMesh.position.z > 10.0){
    //     boxMesh.position.z=-3.0
    //   }
    // });

    document.addEventListener('keydown', this.logKey);

  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
  }

  onWindowResize = event => {
    this.engine.resize();
  };

  logKey = (e) => {
    if(e.code == "KeyA"){
      boxMesh.position.z=-10.0
      light1.intensity = 0.5;
    }else if(e.code == "KeyD"){
      boxMesh.position.z=10.0
      light1.intensity = 0.2;
    }
  }

  /**
   * Add Lights
   */
  addLight = () => {
    //---------- LIGHT---------------------
    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    //var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    //var light0 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 10, 0), scene);
    //light0.intensity = 0.5;
    light1 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 4, -20), scene);
    light1.intensity = 0.5;
  };

  /**
   * Add Camera
   */
  addCamera = () => {
    // ---------------ArcRotateCamera or Orbit Control----------
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 4,
      4,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.inertia = 0;
    camera.angularSensibilityX = 250;
    camera.angularSensibilityY = 250;

    // This attaches the camera to the canvas
    camera.attachControl(this.canvas, true);
    camera.setPosition(new BABYLON.Vector3(5, 5, 5));
  };

  /**
   * Create Stage and Skybox
   */
  addGround = () => {
    // Create a built-in "ground" shape.
    var ground = BABYLON.MeshBuilder.CreateGround(
      "ground1",
      { height: 6, width: 6, subdivisions: 2 },
      scene
    );
    // var groundMaterial = new BABYLON.StandardMaterial("grass0", scene);
    // groundMaterial.diffuseTexture = new BABYLON.Texture(
    //   "./assets/ground.jpeg",
    //   scene
    // );
    // ground.material = groundMaterial;

    //Add SkyBox
    var photoSphere = BABYLON.Mesh.CreateSphere("skyBox", 16.0, 50.0, scene);
    // var skyboxMaterial = new BABYLON.StandardMaterial("smat", scene);
    // skyboxMaterial.emissiveTexture = new BABYLON.Texture(
    //   "assets/skybox.jpeg",
    //   scene,
    //   1,
    //   0
    // );
    // skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.emissiveTexture.uOffset = -Math.PI / 2; // left-right
    // skyboxMaterial.emissiveTexture.uOffset = 0.1; // up-down
    // skyboxMaterial.backFaceCulling = false;
    // photoSphere.material = skyboxMaterial;
  };

  /**
   * Add Models
   */
  addModels = () => {
    // Add BOX
    boxMesh = BABYLON.MeshBuilder.CreateBox(
      "box",
      { height: 1, width: 1, depth: 1 },
      scene
    );
    boxMesh.position.y = 1;

    // var woodMaterial = new BABYLON.StandardMaterial("wood", scene);
    // woodMaterial.diffuseTexture = new BABYLON.Texture(
    //   "./assets/portal_cube.png",
    //   scene
    // );
    // boxMesh.material = woodMaterial;

    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
    myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
    boxMesh.material = myMaterial;

  };

  render() {
    return (
      <canvas
        style={{ width: window.innerWidth, height: window.innerHeight }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
export default BabylonScene;