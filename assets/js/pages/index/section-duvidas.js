(function() {
  const sectionDuvidas = document.querySelector("section.duvidas");
  const duvida = sectionDuvidas.querySelectorAll("div.duvida");

  duvida.forEach(function(div) {
    div.addEventListener("click", function() {
      div.classList.toggle("ativo");
    });
  });
})();