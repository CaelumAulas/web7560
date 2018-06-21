// import mural from '../muralModuloES.js'

const btnAjuda = $(`
    <button id="btnAjuda" class="opcoesDaPagina-opcao opcoesDaPagina-botao">
        ?
    </button>
`)
$("#btnMudaLayout").after(btnAjuda)

btnAjuda.click(function(){
    // {propriedades: valor}
    const instrucoes = [
        {conteudo: "Bem vindos ao CEEP", cor: "#F00"},
        {conteudo: "Clique no botao com lixo para remover", cor: "#0F0"},
        {conteudo: "Clique no botao linhas para mudar o layout", cor: "#00F"},
    ]

    instrucoes.forEach(instrucao =>  {
        mural.adicionaCartao(instrucao)
    })
})

// const btnAjuda = $('#btnAjuda')
// btnAjuda.removeClass("no-js")