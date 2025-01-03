<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Pentagon demo</title>
    <style>
      body {
        margin: 0;
      }
    </style>
    <script type="importmap">
      {
        "imports": {
          "three": "https://cdn.jsdelivr.net/npm/three@v0.170.0/build/three.module.js",
          "three/addons/": "https://cdn.jsdelivr.net/npm/three@v0.170.0/examples/jsm/"
        }
      }
    </script>
  </head>
  <body>
    <script src="http://uopeopleweb.com/js/Detector.js"></script>
    <script type="module">
      import * as THREE from 'three';

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
      camera.position.z = 100;

      const material = new THREE.MeshBasicMaterial({ color: 'red' });

      const pentagonVertices = new Float32Array([
        // left triangle
        -24, -40, 0, 0, 7, 0, -40, 7, 0,

        // center triangle
        25, -40, 0, 0, 7, 0, -24, -40, 0,

        // right triangle
        25, -40, 0, 40, 7, 0, 0, 7, 0,

        // bottom triangle
        -40, 7, 0, 40, 7, 0, 0, 36, 0,
      ]);

      const pentagonGeometry = new THREE.BufferGeometry();
      pentagonGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(pentagonVertices, 3)
      );

      const pentagonMesh = new THREE.Mesh(pentagonGeometry, material);
      scene.add(pentagonMesh);

      function animate() {
        pentagonMesh.rotation.x += 0.01;
        pentagonMesh.rotation.y += 0.01;
        pentagonMesh.rotation.z += 0.01;
        renderer.render(scene, camera);
      }
      renderer.setAnimationLoop(animate);
    </script>
  </body>
</html>