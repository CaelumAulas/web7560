;(function () {
  "use strict"

  const $card = document.querySelector('.card')
  const $cardMenuItems = document.querySelectorAll('.card-menu-item')
  const $section = document.querySelector('#listaCartoes')

  $section.addEventListener('click', function(event) {
    const $origin = event.target
    
    if ($origin.classList.contains('card-menu-item')) {
      const $card = $origin.parentNode.parentNode
      removeCartaoDeFormaAnimada($card)
    }
  })

  $card.addEventListener('keydown', () => {
    // console.log('Apertando')
  })

  $card.addEventListener('keyup', function(event) {
    const $origin = event.target
    const keyPress = event.key

    if ($origin.tagName === 'BUTTON' && 
        $origin.classList.contains('card-menu-item') && 
        keyPress === 'Delete') {
      $origin.click()
    }
  })

  $card.addEventListener('focusin', function(event) {
    // console.log('Elemento que disparou o evento:', event.target)
    this.classList.add('card_focus')
  })

  $card.addEventListener('focusout', function() {
    this.classList.remove('card_focus')
  })

  // $cardMenuItems.forEach(($cardMenuItem)=> {
  //   $cardMenuItem.addEventListener('click', removeCartaoDeFormaAnimada)
  // })

  function removeCartaoDeFormaAnimada($card) {
    $card.classList.add('card_remove')
    $card.addEventListener('transitionend', () => {
      $card.remove()
    })
  }
  
})()