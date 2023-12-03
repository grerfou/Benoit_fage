

const image = document.getElementById('image');
const imageContainer = document.getElementById('imageContainer');

const imagePaths = {
    'Particles': 'data/0224.jpeg',
    'glass': 'data/untitled.jpg',
    'mold': 'data/pres.jpeg',
    'Exp': 'data/pres1.jpeg',
    'Ant': 'data/disp.png',
    'Organism': 'data/boid.png',
    'room': 'data/VetF.png'
};

function showImage(elementId) {
    const imagePath = imagePaths[elementId];
    if (imagePath && image) {
        image.src = imagePath;
        if (imageContainer) {
            imageContainer.style.display = 'block';
        }
    }
}

function hideImage() {
    if (imageContainer) {
        imageContainer.style.display = 'none';
    }
}

Object.keys(imagePaths).forEach((elementId) => {
    document.getElementById(elementId).addEventListener('mouseover', () => showImage(elementId));
});

document.querySelectorAll('h3').forEach((element) => {
    window.addEventListener('mouseout', hideImage);
});

const handleResize = () => {
    const newWidth = window.innerWidth / 2;
    const newHeight = window.innerHeight / 2;

    renderer.setSize(newWidth, newHeight);

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
};

window.addEventListener('resize', handleResize);

handleResize();

function animate() {
    requestAnimationFrame(animate);

    //event();
    controls.update();
    rotateModels(); // Appel de la fonction de rotation
    renderer.render(scene, camera);
}

animate();



