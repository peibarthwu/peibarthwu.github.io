import * as THREE from '../threejs/build/three.js';
import { EffectComposer } from '../threejs/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../threejs/examples/jsm/postprocessing/RenderPass.js';

let scrollable = document.querySelector('.scrollable');

let current = 0;
let target = 0;
let ease = 0.075;
let perspective = 10;


// Linear inetepolation
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// init function triggered on page load to set the body height to enable scrolling and EffectCanvas initialised
function init() {
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

// translate the scrollable div using the lerp function for the smooth scrolling effect.
function smoothScroll() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
}

class EffectCanvas {
    constructor() {
        this.container = document.getElementById('container');
        this.images = [...document.querySelectorAll('img')];
        this.meshItems = []; // Used to store all images in the scene
        this.setupCamera();
        this.createMeshItems();
        this.render();
    }

    // Getter function used to get screen dimensions used for the camera and mesh materials
    get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        return {
            width,
            height,
            aspectRatio
        };
    }

    setupCamera() {

        container.addEventListener('resize', this.onWindowResize.bind(this), false);
        

        // Create new scene
        this.scene = new THREE.Scene();

        // Initialize perspective camera
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI; // see fov image for a picture breakdown of this fov setting.
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000)
        this.camera.position.set(0, 0, perspective); // set the camera position on the z axis.
        this.camera.lookAt( new THREE.Vector3(0,0,0) )

        // renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); //antialias is false bc we are using post processing
        this.renderer.setSize(this.viewport.width, this.viewport.height); // uses the getter viewport function above to set size of canvas / renderer
        this.renderer.setPixelRatio(window.devicePixelRatio); // Import to ensure image textures do not appear blurred.
        this.container.appendChild(this.renderer.domElement); // append the canvas to the main element

        // post processing
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
       
    }



    onWindowResize() {
        // Lookup the size the browser is displaying the canvas in CSS pixels.
        const canvas = document.querySelector("canvas");
        const displayWidth  = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        console.log("displayWidth: " + displayWidth)

        this.camera.aspect = displayWidth/displayHeight; // readjust the aspect ratio.
        this.camera.updateProjectionMatrix(); // Used to recalulate projectin dimensions.
        this.renderer.setSize(displayWidth, displayHeight);

    }


    moveCamera() {
        if(this.camera){
            gsap
            .to(this.camera.position, {z: perspective*4, duration: 1, ease: "power2" })
            console.log("camera moved")
        }
       
    }


    createMeshItems() {
        // Loop thorugh all images with class "mesh" and create new MeshItem instances
        this.images.forEach(image => {
            let meshItem = new MeshItem(image, this.scene);
            this.meshItems.push(meshItem);
        })
        // Create a mesh for the stem
        let stem = new Stem(this.stem, this.scene)
        this.meshItems.push(stem)
    }

    // Animate smoothscroll and meshes. Repeatedly called using requestanimationdrame
    render() {
        smoothScroll();
        for (let i = 0; i < this.meshItems.length; i++) {
            this.meshItems[i].render();
        }

        //this.renderer.render(this.scene, this.camera)
        
        this.composer.render();
        requestAnimationFrame(this.render.bind(this));
    }


}

class MeshItem {
    // Pass in the scene as we will be adding meshes to this scene.
    constructor(element, scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0, 0); // Positions of mesh on screen. Will be updated below.
        this.sizes = new THREE.Vector2(0, 0); //Size of mesh on screen. Will be updated below.
        this.createMesh();
        this.zpos = 0;
    }

    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        // this.sizes.set(width*(1-(1/perspective)*this.zpos), height*(1-(1/perspective)*this.zpos));
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
    }

    createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 100, 100);
        this.imageTexture = new THREE.TextureLoader().load(this.element.src);
        this.rotation = -1;
        this.speed = 1;
        this.uniforms = {
            uTexture: {
                //texture data
                value: this.imageTexture
            },
            uOffset: {
                //distortion strength
                value: new THREE.Vector2(0.0, 0.0)
            },
            uAlpha: {
                //opacity
                value: 1.
            },
            uPosition: {
                //opacity
                value: new THREE.Vector3(0.0, 0.0, 0.0)
            }
        };
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            // wireframe: true,
            side: THREE.DoubleSide
        })

        //rotate right, default is rotate left   
        if (this.element.classList.contains("right")) {
            this.rotation = 1;
        }
        if (this.element.classList.contains("front")) {
            this.zpos = 2;
            console.log(this.zpos)

        } else {
            // this.zpos = -10;
            // console.log(this.zpos)

        }
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.getDimensions(); // set offsetand sizes for placement on the scene

        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.mesh.position.set(this.offset.x, this.offset.y, this.zpos);
        this.scene.add(this.mesh);
    }

    render() {
        // this function is repeatidly called for each instance in the aboce 
        this.getDimensions();
        //animate rotation
        //to switch to rotation by shader import and use rotationVertex.glsl as the vertex shader 
        this.mesh.rotation.y = this.rotation * (this.mesh.position.y * 0.00002);
        this.mesh.position.set(this.offset.x, this.offset.y, this.zpos)
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)
        this.uniforms.uOffset.value.set(this.offset.x * 0.0, -(target - current) * 0.0003)
        this.uniforms.uPosition.value.set(this.mesh.position)
    }

}


init()
new EffectCanvas()