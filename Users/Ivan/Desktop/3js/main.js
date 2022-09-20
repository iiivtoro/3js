let scene, camera, renderer, cube;

function init() {
    /*scenes allows you to set up what and where
    is to be rendered by three.js. This is where you place objects, lights and cameras.
    */
    scene = new THREE.Scene();

    /*  PerspectiveCamera( fov: Number, aspect: Number, near: Number, far: Number)
    fov -> Camera frustum vertical field of view
    aspect -> Camera frustum aspect ratio.
    near -> Camera frustum near plane.
    far -> Camera frustum far plane.
        Together these define the camera's viewing frustum.
    */
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    //const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const texture = new THREE.TextureLoader().load('textures/lavatile.jpg');

    const material = new THREE.MeshBasicMaterial({ Map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;


    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
