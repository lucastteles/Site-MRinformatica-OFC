(function (){
 
  // Bloqueando arrasta imagens do site para baixar
 
  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }
 
  desativarDragDrop()
 
  // Disparo de evento de clique no WhatsApp para o Google Tag Manager
  function rastrearCliquesWhatsapp () {
    var links = document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
 
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ 'event': 'whatsapp_click' })
      })
    })
  }
 
  rastrearCliquesWhatsapp()
 
}())