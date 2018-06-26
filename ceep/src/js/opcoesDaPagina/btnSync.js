;(function(){
    "use strict"

    const $btnSync = $("#btnSync")

    $btnSync.click(function(){

        $btnSync.addClass("botaoSync--esperando")
        $btnSync.removeClass("botaoSync--sincronizado")
        $btnSync.removeClass("botaoSync--deuRuim")

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
        
        // MIME Type
        xhr.setRequestHeader("Content-Type", "application/json")
        // xhr.timeout = 500
        
        xhr.send(JSON.stringify({
            // cartoes: Array.from(document.querySelectorAll(".cartao")).map(function($cartao){
            //     return {
            //         conteudo: $cartao.querySelector(".cartao-conteudo").textContent
            //         ,cor: $cartao.style.backgroundColor
            //     }
            // })
            cartoes: mural.cartoes
            ,usuario: "artur.adam@caelum.com.br"
        }))

        xhr.addEventListener("load", function(){
            $btnSync.addClass("botaoSync--sincronizado")
            $btnSync.removeClass("botaoSync--esperando")
        })

        xhr.addEventListener("error", function(){
            $btnSync.addClass("botaoSync--deuRuim")
            $btnSync.removeClass("botaoSync--esperando")
        })
    })
    $btnSync.removeClass("no-js")
})()