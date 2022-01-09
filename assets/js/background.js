let animationArea = document.getElementById('animation-area');
let images = [
    './assets/img/wallpaper1.jpg',
    './assets/img/wallpaper2.jpg',
    './assets/img/wallpaper3.jpg',
    './assets/img/wallpaper4.jpg',
    './assets/img/wallpaper5.jpg',
    './assets/img/wallpaper6.jpg'
]
let linearGrade = '#000000b9, #000000b9';
let randInt = Math.floor(Math.random()*images.length)
function background() {
    animationArea.style.backgroundImage = `linear-gradient(${linearGrade}), url(${images[randInt]})`;
}
