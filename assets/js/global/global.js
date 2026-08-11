(function () {

  // Bloqueando arrastar imagens do site para baixar
  function desativarDragDrop() {
    document.addEventListener('dragstart', function (evento) {
      evento.preventDefault();
    }, false);

    document.addEventListener('drop', function (evento) {
      evento.preventDefault();
    }, false);
  }

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
        event: 'whatsapp_click',
        whatsapp_class: botaoWhatsapp.className
      });

      // Log apenas para testes
      console.log('🚀 whatsapp_click disparado:', {
        elemento: botaoWhatsapp,
        classe: botaoWhatsapp.className
      });

    }, false);
  }

  desativarDragDrop();
  rastrearCliquesWhatsapp();

})();