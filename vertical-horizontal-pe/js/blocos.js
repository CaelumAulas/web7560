const $btn = document.querySelector('.btn')
const $blocos = document.querySelectorAll('.blocos')


const $noJs = document.querySelectorAll('.no-js')

$noJs.forEach(function(element, index) {
  element.classList.remove('no-js')
})


function mudaTexto() {
  if($btn.textContent === 'Horizontal') {
    $btn.textContent = 'Vertical'

    $blocos.forEach(function(bloco, index) {
      bloco.classList.add('blocos_vertical')
    })

    // for(var index = 0; index < $blocos.length; index = index + 1) {
    //   blocos[index].classList.add('blocos_vertical')
    // }
    
    $blocos[1].classList.add('blocos_vertical')
  } else {
    $btn.textContent = 'Horizontal'
    $blocos.forEach(function(bloco, index) {
      bloco.classList.remove('blocos_vertical')
    })
  }

}

// function bug() {
//   btn.textContent = 'Coiso'
// }

$btn.onclick = mudaTexto
// btn.onclick = bug


