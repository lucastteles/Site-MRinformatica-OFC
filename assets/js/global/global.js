(function (){

  // Bloqueando arrasta imagens do site para baixar

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  desativarDragDrop()

  // Disparo de evento de clique no WhatsApp para o Google Tag Manager
  function rastrearCliquesWhatsapp() {

    document.addEventListener('click', function (evento) {

      // Procura o botão WhatsApp mais próximo do elemento clicado
      var botaoWhatsapp = evento.target.closest(
        '.btn-whatsapp, .btn-whatsapp-produto'
      );

      // Se o clique não aconteceu dentro de um botão WhatsApp, ignora
      if (!botaoWhatsapp) {
        return;
      }

      // Garante que o dataLayer exista
      window.dataLayer = window.dataLayer || [];

      // Dispara o evento para o Google Tag Manager
      window.dataLayer.push({
        event: 'whatsapp_click'
      });

      // Log apenas para testes
      console.log('🚀 whatsapp_click disparado:', botaoWhatsapp);

    }, false);
  }

  desativarDragDrop();
  rastrearCliquesWhatsapp();

})();