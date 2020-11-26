/* Babylon JS is available as **npm** package.  
You can easily build a simple `React` Component around a `canvas` and Babylon JS
I have created a minimal example with React+ Babylon:
 */
import React, { Component } from "react";
//import * as BABYLON from "babylonjs";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";

var scene;
var boxMesh;
var sphereMesh;
/**
 * Example temnplate of using Babylon JS with React
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
    scene.registerBeforeRender(() => {
      //boxMesh.rotation.y += 0.01;
      //boxMesh.rotation.x += 0.01;
      boxMesh.position.z += 0.01;
      if(boxMesh.position.z > 4.0){
        boxMesh.position.z=-3.0
      }
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
  }

  onWindowResize = event => {
    this.engine.resize();
  };

  /**
   * Add Lights
   */
  addLight = () => {
    //---------- LIGHT---------------------
    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    //var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    var light0 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-5, 3, -5), scene);
    light0.intensity = 0.5;
    var light1 = new BABYLON.PointLight("pointLight1", new BABYLON.Vector3(-5, 3, 5), scene);
    light1.intensity = 0.5;
    var light2 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(5, 3, -5), scene);
    light2.intensity = 0.5;
    var light3 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(5, 3, 5), scene);
    light3.intensity = 0.5;
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

    sphereMesh = BABYLON.MeshBuilder.CreateSphere(
      "sphere",
      { height: 1, width: 1, depth: 1 },
      scene
    );
    sphereMesh.position.y = 1;

    // var woodMaterial = new BABYLON.StandardMaterial("wood", scene);
    // woodMaterial.diffuseTexture = new BABYLON.Texture(
    //   "./assets/portal_cube.png",
    //   scene
    // );
    // boxMesh.material = woodMaterial;
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