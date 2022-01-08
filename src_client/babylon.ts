import 'pepjs';
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Sound,
  Vector3,
} from '@babylonjs/core';

// Get the canvas DOM element
const canvas: HTMLCanvasElement = document.getElementById(
  'renderCanvas',
) as HTMLCanvasElement;
// Load the 3D engine
const engine: Engine = new Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});
// CreateScene function that creates and return the scene
const createScene = (): Scene => {
  // Create a basic BJS Scene object
  const scene: Scene = new Scene(engine);
  /**** Set camera and light *****/
  const camera: ArcRotateCamera = new ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new Vector3(0, 0, 0),
    scene,
  );
  camera.attachControl(canvas, true);
  const light: HemisphericLight = new HemisphericLight(
    'light',
    new Vector3(1, 1, 0),
    scene,
  );

  // Load the sound, give it time to load and play it every 3 seconds
  /*const bounce: Sound = new Sound('bounce', 'sounds/bounce.wav', scene);
  setInterval(() => bounce.play(), 3000);*/

  const box: Mesh = MeshBuilder.CreateBox('box', {});
  box.position.y = 0.5;
  const ground: Mesh = MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  });

  // Return the created scene
  return scene;
};
// add event listener on window.load to put all process in place
//window.addEventListener('load', () => {
// call the createScene function
const scene: Scene = createScene();
// run the render loop
engine.runRenderLoop(() => scene.render());
//});
// the canvas/window resize event handler
window.addEventListener('resize', () => engine.resize());
