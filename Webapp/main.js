import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

window.addEventListener('DOMContentLoaded', () => {
  window.model = new Model();
});

class Model {
  constructor() {
    this.Initialize();
  }

  Initialize() {
    this.threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.threejs.shadowMap.enabled = true;
    this.threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this.threejs.setPixelRatio(window.devicePixelRatio);

    document.getElementById('3d_model').appendChild(this.threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    this._camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    this._camera.position.set(0, 150, -250);
    this._OnWindowResize();
    this._scene = new THREE.Scene();

    let light = new THREE.AmbientLight(0xFFFFFF, 4.0);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this.threejs.domElement);
    controls.target.set(0, 80, 0);
    controls.update();

    this._scene.background = new THREE.Color( 0xa0a0a0 );
		this._scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

    var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    this._scene.add(mesh);

    var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    this._scene.add(grid);



    this.LoadModel(0);
    this._RAF();
  }

  LoadModel(index) {
    const loadingManager = new THREE.LoadingManager();
    loadingManager.setURLModifier(function (url) {
      //console.log(url)
      if (!url.endsWith("fbx")) {
        url = './models/Madera' + index + '.jpg'
      }
      return url;
    });
    this.loader = new FBXLoader(loadingManager);
    this.loader.setPath('./models/');
    this.loader.load('Banana Box.fbx', (fbx) => {
      this._scene.add(fbx);
    });

  }

  _OnWindowResize() {
    let w = document.getElementById('3d_model').clientWidth;
    let h = document.getElementById('3d_model').clientHeight;
    this._camera.aspect = w / h;
    this._camera.updateProjectionMatrix();
    this.threejs.setSize(w, h);
  }

  _RAF() {
    requestAnimationFrame((t) => {
      if (this._previousRAF === null) {
        this._previousRAF = t;
      }

      this._RAF();

      this.threejs.render(this._scene, this._camera);

      this._previousRAF = t;
    });
  }

}


