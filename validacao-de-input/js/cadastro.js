;(function() {
  'use strict'

  const $cadastro = document.querySelector('.cadastro')
  const $cadastroText = $cadastro.querySelector('.cadastro-text')
  const $cadastroError = $cadastro.querySelector('.cadastro-error')

  $cadastro.addEventListener('submit', function(event) {
    event.preventDefault()

    if ($cadastroText.value.trim().length === 0) {
      const msgError = '<p>O campo acima está vázio\n, por favor \n preencha</p>'
      const regra = new RegExp('\n', 'g')

      $cadastroError.innerHTML = msgError.replace(regra, '<br>')
    }
  })
})()
