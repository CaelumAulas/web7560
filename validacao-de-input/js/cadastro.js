const q = document.querySelector
;(function(doc) {
  'use strict'

  const $cadastro = doc.querySelector('.cadastro')
  const $cadastroText = $cadastro.querySelector('.cadastro-text')

  $cadastro.addEventListener('submit', function(event) {
    event.preventDefault()

    if ($cadastroText.value.trim().length === 0 && !this.querySelector('.cadastro-error')) {
      const regra = new RegExp('\n', 'g')
      const msgError = `<p>
        O campo acima está vázio\n, por favor \n preencha
      </p>`.replace(regra, '<br>')
      const $cadastroError = doc.createElement('div') /* <div class="cadastro-error"></div> */
      $cadastroError.classList.add('cadastro-error')
      $cadastroError.innerHTML = msgError
    
      this.insertBefore($cadastroError, this.querySelector('.cadastro-btn'))
    } else {
      const $card = $(`
      <article class="cartao">
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <p class="cartao-conteudo">${$cadastroText.value}</p>
      </article>`)

      $('.mural').append($card)
    }
  })

  const cardTemplate = document.querySelector('.cardTemplate')
  const newCard = cardTemplate.cloneNode(true)

  newCard.classList.add('foi')

  doc.body.insertBefore(newCard, null)
  
})(document)








