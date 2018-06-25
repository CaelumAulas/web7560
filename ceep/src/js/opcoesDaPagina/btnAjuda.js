// import mural from '../muralModuloES.js'

const btnAjuda = $(`
    <button id="btnAjuda" class="opcoesDaPagina-opcao opcoesDaPagina-botao">
        ?
    </button>
`)
$("#btnMudaLayout").after(btnAjuda)

btnAjuda.click(function(){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://ceep.herokuapp.com/cartoes/instrucoes")
    // xhr.responseType = "json" 
    xhr.send()

    // Funções de callback
    xhr.addEventListener("load", function(){
        const respostaObjeto = JSON.parse(xhr.response)
        const instrucoes = respostaObjeto.instrucoes

        instrucoes.forEach(instrucao =>  {
            mural.adicionaCartao(instrucao)
        })
    })
        
})

// const btnAjuda = $('#btnAjuda')
// btnAjuda.removeClass("no-js")
// {propriedades: valor}

    // const instrucoes = [
    //     {conteudo: "Bem vindos ao CEEP", cor: "#F00"},
    //     {conteudo: "Clique no botao com lixo para remover", cor: "#0F0"},
    //     {conteudo: "Clique no botao linhas para mudar o layout", cor: "#00F"},
    // ]