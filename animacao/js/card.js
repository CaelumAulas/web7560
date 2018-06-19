;(function () {
  "use strict"

  const $card = $('.card')
  const $cardMenuItems = $('.card-menu-item')
  const $section = $('#listaCartoes')

  $section.on('click', function(event) {
    const $origin = $(event.target)
    
    if ($origin.hasClass('card-menu-item')) {
      const $card = $origin.closest('.card')
      removeCartaoDeFormaAnimada($card)
    }
  })

  $card.on('keydown', () => {
    // console.log('Apertando')
  })

  $card.on('keyup', function(event) {
    const $origin = event.target
    const keyPress = event.key

    if ($origin.tagName === 'BUTTON' && 
        $origin.classList.contains('card-menu-item') && 
        keyPress === 'Delete') {
      $origin.click()
    }
  })

  $card.on('focusin', function(event) {
    // console.log('Elemento que disparou o evento:', event.target)
    // this.classList.add('card_focus')
    $(this).addClass('card_focus')
    
  })

  $card.on('focusout', function() {
    // this.classList.remove('card_focus')
    $(this).removeClass('card_focus')
  })

  // $cardMenuItems.forEach(($cardMenuItem)=> {
  //   $cardMenuItem.on('click', removeCartaoDeFormaAnimada)
  // })

  function removeCartaoDeFormaAnimada($card) {
    $card.addClass('card_remove')
    $card.on('transitionend', () => {
      $card.remove()
    })
  }
  
})()