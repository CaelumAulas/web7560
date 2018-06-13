const $btn = document.querySelector('.btn')

function comprado() {
  console.log('Oi')
  console.log(this)
  this.parentNode.classList.add('comprou')
}

// $btn.onclick = comprado

$btn.addEventListener('click', comprado)

$btn.addEventListener('click', function() {
  alert('Oi')
})

// $btn.onclick = function () {
//   alert('Parabéns!!!')
// }
