//1. Pegar os elementos que representam as abas HTML:
const abas = document.querySelectorAll(".aba");

//2. Identificar o clique no elemento aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {     
        
    if(aba.classList.contains("selecionado")){
        return;
    }    

    //Refatorando o código
    selecionarAba(aba)
    mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba){
    //3. Desmarcar a aba quando o usuário clicar
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")
    
    //4. Marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    //5. Esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    //6. Mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
    const informacaoASerMostrada= document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}