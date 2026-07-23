const lista = document.querySelector('.listaTrabalhos');
const cards = document.querySelectorAll('.card');
const indicadoresContainer = document.querySelector('.indicadores');
const pause = document.querySelector('.pause');

let slideAtual = 0;
let pausado = false;

function getCardsPorAvanco() {

    if (window.innerWidth <= 768) {
        return 1;
    }

    return 3;

}

function gerarPaginas() {

    const paginas = [];
    const cardsPorAvanco = getCardsPorAvanco();

    for (
        let i = 0;
        i < cards.length;
        i += cardsPorAvanco
    ) {
        paginas.push(i);
    }

    return paginas;

}

let paginas = gerarPaginas();

function criarIndicadores() {

    indicadoresContainer.innerHTML = '';

    paginas.forEach((_, index) => {

        const indicador = document.createElement('button');

        indicador.classList.add('indicador');

        indicador.setAttribute(
            'aria-label',
            `Ir para o grupo de trabalhos ${index + 1}`
        );

        if (index === 0) {
            indicador.classList.add('ativo');
            indicador.setAttribute('aria-current', 'true');
        } else {
            indicador.setAttribute('aria-current', 'false');
        }

        indicador.innerHTML =
            '<span class="progresso"></span>';

        indicadoresContainer.appendChild(indicador);

    });

    adicionarEventosIndicadores();

}

function atualizarIndicadores() {

    const indicadores =
        document.querySelectorAll('.indicador');

    indicadores.forEach(indicador => {

        indicador.classList.remove('ativo');

        const progresso =
            indicador.querySelector('.progresso');

        progresso.style.animation = 'none';

        void progresso.offsetWidth;

    });

    const indicePagina =
        paginas.indexOf(slideAtual);

    if (indicePagina === -1) return;

    indicadores[indicePagina]
        .classList.add('ativo');

    const progresso =
        indicadores[indicePagina]
            .querySelector('.progresso');

    progresso.style.animation =
        'carregar 4s linear forwards';

}

function moverPara(indiceCard) {

    slideAtual = indiceCard;

    const larguraCard =
        cards[0].offsetWidth + 20;

    lista.style.transform =
        `translateX(-${slideAtual * larguraCard}px)`;

    atualizarIndicadores();

}

function moverSlider() {

    if (pausado) return;

    const indiceAtual =
        paginas.indexOf(slideAtual);

    const proximoIndice =
        indiceAtual + 1;

    if (proximoIndice >= paginas.length) {

        moverPara(0);

    } else {

        moverPara(
            paginas[proximoIndice]
        );

    }

}

function adicionarEventosIndicadores() {

    const indicadores =
        document.querySelectorAll('.indicador');

    indicadores.forEach((indicador, index) => {

        indicador.addEventListener('click', () => {

            moverPara(
                paginas[index]
            );

        });

    });

}

setInterval(moverSlider, 4000);

pause.addEventListener('click', () => {

    pausado = !pausado;

    const progresso =
        document.querySelector(
            '.indicador.ativo .progresso'
        );

    if (!progresso) return;

    if (pausado) {

        progresso.style.animationPlayState = 'paused';

        pause.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M8 5v14l11-7z">
            </path>
        </svg>
    `;

    } else {

        progresso.style.animationPlayState = 'running';

        pause.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M6 5h4v14H6zm8 0h4v14h-4z">
                </path>
            </svg>
        `;

    }

});

window.addEventListener('resize', () => {

    paginas = gerarPaginas();

    slideAtual = 0;

    lista.style.transform = 'translateX(0)';

    criarIndicadores();

    atualizarIndicadores();

});

criarIndicadores();
atualizarIndicadores();