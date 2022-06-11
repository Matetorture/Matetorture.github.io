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
light.position.set(2, 2, 5);

var light2 = new THREE.DirectionalLight( 0xffffff ,1);
light2.position.set(2, -2, -15);

var light3 = new THREE.DirectionalLight( 0xffffff ,1);
light3.position.set(-1, 10, 0);

var light4 = new THREE.DirectionalLight( 0xffffff ,1);
light4.position.set(0, -12, 3);

scene.add( light );
scene.add( light2 );
scene.add( light3 );
scene.add( light4 );

//glb loader
const loader = new THREE.GLTFLoader();
loader.load('model/h.glb', function(glb)
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
    console.log(error);
}
)

camera.position.x = 10;
camera.rotation.y = 90;

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

    update();
    render();

}

GameLoop();