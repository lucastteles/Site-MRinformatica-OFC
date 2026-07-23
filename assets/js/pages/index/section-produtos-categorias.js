const listaProdutos =
  document.querySelector('.lista-produtos');

const btnAnterior =
  document.querySelector('.seta-esquerda');

const btnProximo =
  document.querySelector('.seta-direita');

const cards =
  document.querySelectorAll('.lista-produtos .card');

function isMobile() {
  return window.innerWidth <= 1000;
}

function getCardWidth() {
  return cards[0].offsetWidth + 20; // gap
}

function getMaxScroll() {
  const cardWidth = getCardWidth();
  const visibleCards = Math.floor(listaProdutos.offsetWidth / cardWidth);

  return Math.max(0, cards.length - visibleCards);
}

function atualizarSetas() {
  if (isMobile()) {
    btnAnterior.classList.remove('desabilitada');
    btnProximo.classList.remove('desabilitada');
    return;
  }

  const max = getMaxScroll();

  const indexAtual = Math.round(listaProdutos.scrollLeft / getCardWidth());

  btnAnterior.classList.toggle('desabilitada', indexAtual <= 0);
  btnProximo.classList.toggle('desabilitada', indexAtual >= max);
}

function scrollPara(indice) {
  const cardWidth = getCardWidth();

  listaProdutos.scrollTo({
    left: indice * cardWidth,
    behavior: 'smooth'
  });
}

btnProximo.addEventListener('click', () => {
  if (isMobile()) return;

  const cardWidth = getCardWidth();

  const indexAtual =
    Math.round(listaProdutos.scrollLeft / cardWidth);

  const max = getMaxScroll();

  if (indexAtual < max) {
    scrollPara(indexAtual + 1);
  }
});

btnAnterior.addEventListener('click', () => {
  if (isMobile()) return;

  const cardWidth = getCardWidth();

  const indexAtual =
    Math.round(listaProdutos.scrollLeft / cardWidth);

  if (indexAtual > 0) {
    scrollPara(indexAtual - 1);
  }
});

listaProdutos.addEventListener('scroll', () => {
  atualizarSetas();
});

window.addEventListener('resize', () => {
  listaProdutos.scrollLeft = 0;
  atualizarSetas();
});

atualizarSetas();