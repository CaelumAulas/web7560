
;(function () {
  "use strict"  

  nome = 'Marco'
  const email = 'marco.bruno.br@gmail.com'
  const $cardMenuItem = document.querySelector('.card-menu-item')

  $cardMenuItem.addEventListener('click', () => {
    const $card = $cardMenuItem.parentNode.parentNode

    $card.classList.add('card_remove')
    $card.addEventListener('transitionend', () => {
      $card.remove()
    })
  })
})