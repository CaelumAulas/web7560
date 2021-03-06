// Closure é o jeito de implementar o Module Pattern

// Module Pattern
// IIFE e Closures
const mural = Object.freeze((function(){    
"use strict"

let numeroDoCartao = 0

const muralModule = {}

muralModule.cartoes = []

muralModule.adicionaCartao = function ({conteudo, cor = "#EBEF40"}){

    const cartao = {conteudo, cor}
    muralModule.cartoes.push(cartao)

    numeroDoCartao++

    // DOM
    const $cartao = $(`
    <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color: ${cor}">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
            </label>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>

            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
    </article>
    `)

    $cartao.on("focusin", function(){
        $cartao.addClass("cartao--focado")
    })
    $cartao.on("focusout", function(){
        $cartao.removeClass("cartao--focado")
    })

    // Funcionalidade muda cor dos cartões
    $cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event){
        $cartao.css("background-color", event.target.value)
        cartao.cor = event.target.value
    })

    $cartao.on("input", ".cartao-conteudo", function(event){
        cartao.conteudo = event.target.textContent
    })

    $cartao.on("keydown", function deixaClicarComEnter(event){
        console.log(event.key)
        if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === 'Enter' || event.key === ' ')){
            event.target.click()
        }
    })
    
    //Funcionalidade remove cartão
    $cartao.on('click', ".opcoesDoCartao-remove", function(event) {
        $cartao.addClass("cartao--some")
        $cartao.on("transitionend", function(){
            $cartao.remove()
            const posicaoCartao = muralModule.cartoes.indexOf(cartao)
            muralModule.cartoes.splice(posicaoCartao, 1)
        })
    })

    $cartao.appendTo(".mural")
}

$.ajax({
    url: "http://ceep.herokuapp.com/cartoes/carregar?usuario=artur.adam@caelum.com.br"
    ,method: "GET"
    ,dataType: "jsonp"
    ,success: function (respostaObjeto){
        const cartoes = respostaObjeto.cartoes
    
        cartoes.forEach(cartao =>  {
            mural.adicionaCartao(cartao)
        })
    }
})

return muralModule

})())
