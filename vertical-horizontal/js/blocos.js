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
    
    blocos[1].classList.add('blocos_vertical')
  } else {
    btn.textContent = 'Horizontal'
    blocos[0].classList.remove('blocos_vertical')
    blocos[1].classList.remove('blocos_vertical')
  }

}

// function bug() {
//   btn.textContent = 'Coiso'
// }

btn.onclick = mudaTexto
// btn.onclick = bug


