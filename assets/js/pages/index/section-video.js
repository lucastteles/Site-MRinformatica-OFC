const video = document.getElementById('videoApresentacao');
const btnPlay = document.querySelector('.btn-play');

let fadeTimeout;
let hideTimeout;

function mostrarBotao() {

    clearTimeout(fadeTimeout);
    clearTimeout(hideTimeout);

    btnPlay.classList.remove('fade');
    btnPlay.classList.remove('oculto');

    if (!video.paused) {

        // Depois de 2 segundos começa a perder opacidade
        fadeTimeout = setTimeout(() => {
            btnPlay.classList.add('fade');
        }, 1000);

        // Depois de mais 800ms desaparece
        hideTimeout = setTimeout(() => {
            btnPlay.classList.add('oculto');
        }, 2800);

    }

}

function alternarVideo() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

}

// Clique no botão
btnPlay.addEventListener('click', (e) => {
    e.stopPropagation();
    alternarVideo();
});

// Clique no vídeo
video.addEventListener('click', alternarVideo);

// Mouse em cima do vídeo
video.addEventListener('mousemove', mostrarBotao);

// Touch
video.addEventListener('touchstart', mostrarBotao);

// Começou a reproduzir
video.addEventListener('play', mostrarBotao);

// Pausou
video.addEventListener('pause', () => {

    clearTimeout(fadeTimeout);
    clearTimeout(hideTimeout);

    btnPlay.classList.remove('fade');
    btnPlay.classList.remove('oculto');

});

// Terminou
video.addEventListener('ended', () => {

    clearTimeout(fadeTimeout);
    clearTimeout(hideTimeout);

    btnPlay.classList.remove('fade');
    btnPlay.classList.remove('oculto');

});