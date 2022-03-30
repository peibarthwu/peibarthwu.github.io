import * as THREE from '/threejs/build/three.module.js';
import { GLTFLoader } from '/threejs/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/threejs/examples/js/controls/OrbitControls.js';
import { EffectComposer } from '/threejs/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '/threejs/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '/threejs/examples/jsm/postprocessing/UnrealBloomPass.js';
let scene, camera, renderer, composer, material;
let frame, frame3, frame2, disco;


function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const light = new THREE.HemisphereLight(0x333333, 0x333333, 3);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

    const container = document.getElementById('three');
    document.body.appendChild(container);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // the default
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    //const controls = new OrbitControls( camera, renderer.domElement );
    //controls.enableZoom = false;
    camera.position.z += 9;
    camera.position.y += 2;

    //controls.update();

    /**
     * MATERIALS
    */


    const loader = new GLTFLoader();
    loader.load('../img/guiville/stguis.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material.envMap = cubemap;
            }
        });
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });


    /**
    * Post Processing
    **/
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const unrealBloomPass = new UnrealBloomPass();
    composer.addPass(unrealBloomPass);
}

function render() {
    requestAnimationFrame(render);
    composer.render(); //render and post
}

init();
render();



/**
 * LISTENERS
 */

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio / 1.5);
}

