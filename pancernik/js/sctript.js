var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
} );

controls = new THREE.OrbitControls( camera, renderer.domElement );
// var light = new THREE.AmbientLight( 0xd3d3d3 );
var light = new THREE.DirectionalLight( 0xffffff ,1);

scene.add( light );

//obj
// var objLoader = new THREE.OBJLoader();
// objLoader.setPath('model/');
// objLoader.load('pancernik.obj', 
//     function(object)
//     {
//         // object.position.y -= 60;
//         scene.add(object);
//     }
// );
//glb
const loader = new THREE.GLTFLoader();
loader.load('model/pancernik.glb', function(glb)
{
    console.log(glb);
    scene.add(glb.scene)
},
function(xhr)
{
    console.log((xhr.loaded/xhr.total * 100) + "% ladaed");
},
function(error)
{
    console.log('error');
}
)

camera.position.z = 50;

var update = function()
{

};
var render = function()
{
    renderer.render( scene, camera);
};
var GameLoop = function()
{
    requestAnimationFrame(GameLoop);

    light.position.z = camera.position.z;
    light.position.x = camera.position.x;
    light.position.y = camera.position.y;

    light.rotation.z = camera.rotation.z;
    light.rotation.x = camera.rotation.x;
    light.rotation.y = camera.rotation.y;

    update();
    render();

}

GameLoop();