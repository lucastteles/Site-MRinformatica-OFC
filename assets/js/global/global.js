(function (){

  // Bloqueando arrasta imagens do site para baixar

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  desativarDragDrop()

  // Botões de orçamento
  document.querySelectorAll('.btn-whatsapp').forEach(function (button) {
    button.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'event': 'whatsapp_click' })

      var phone = button.getAttribute('data-phone')
      var message = button.getAttribute('data-message') || ''

      window.open(
        'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message),
        '_blank'
      )
    })
  })

  // Botões de produto
  document.querySelectorAll('.btn-whatsapp-produto').forEach(function (button) {
    button.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'event': 'whatsapp_click' })

      var phone = button.getAttribute('data-phone')
      var message = button.getAttribute('data-message') || ''

      window.open(
        'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message),
        '_blank'
      )
    })
  })

  // Clique no telefone (rastreamento de conversão)
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'event': 'phone_click' })
    })
  })

}())