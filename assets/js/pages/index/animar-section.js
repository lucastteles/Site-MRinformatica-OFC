document.addEventListener('DOMContentLoaded', () => {

  if (window.innerWidth > 1000) return;

  const cards = document.querySelectorAll(
    '.servicos .quadros-servicos .quadro'
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          cards.forEach(card => {
            card.classList.remove('ativo');
          });

          entry.target.classList.add('ativo');

        }

      });

    },
    {
      threshold: 0.3,
      rootMargin: "-40% 0px -40% 0px"
    }
  );

  cards.forEach(card => observer.observe(card));

});