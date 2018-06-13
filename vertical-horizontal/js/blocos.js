var btn = window.document.querySelector('.btn')
var blocos = window.document.querySelectorAll('.blocos')

console.log(blocos[2])

function mudaTexto() {
  if(btn.textContent === 'Horizontal') {
    btn.textContent = 'Vertical'

    blocos.forEach(function(bloco, index) {
      bloco.classList.add('blocos_vertical')
    })

    // for(var index = 0; index < blocos.length; index = index + 1) {
    //   blocos[index].classList.add('blocos_vertical')
    // }
  } else {
    btn.textContent = 'Horizontal'
    blocos.forEach(function(bloco, index) {
      bloco.classList.remove('blocos_vertical')
    })
  }

}

btn.onclick = mudaTexto



