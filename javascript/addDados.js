var eviarDadosCadastrados = document.querySelector("#btn-enviarDados")
eviarDadosCadastrados.addEventListener("click", function (adicionarDadosCadastrados){
    
    adicionarDadosCadastrados.preventDefault();

    var adicionarDespesa = document.querySelector("#adicinarDespesa").checked;
    var adicionarReceita =  document.querySelector("#adicinarReceita").checked;
    
    var tdObservacao = document.querySelector(".td-observacao");
    var tdData = document.querySelector(".td-data");
    var tdCategoria = document.querySelector(".td-categoria");
    var tdValor = document.querySelector(".td-valor");

    var formulario = document.querySelector("#formulario")

    var dadosDespesa = coletaDadosDespesasFormuladio(formulario)

    adicionaDadosTabela(dadosDespesa)

    function adicionaDadosTabela(dadosDespesa){
        var dadosDespesaTr = montaTr(dadosDespesa);
        var tabela = document.querySelector("#tabela-dados");
        tabela.appendChild(dadosDespesaTr);
    }

    function coletaDadosDespesasFormuladio(formulario) {
        var dadosDespesa = {
            observacao: formulario.observacao.value,
            data: (formulario.data.value).replace(/(\d*)-(\d*)-(\d*).*/, `$3/$2/$1`),
            categoria: formulario.categoriaDespesa.value,
            valor: parseFloat((formulario.valor.value).replace(`,`,`.`)),
        }
        return dadosDespesa;
    }

    function montaTr(dadosDespesa){
        var linhaDados = document.createElement("tr");

        if (adicionarDespesa){
            linhaDados.appendChild(montaTd(dadosDespesa.observacao, "despesaAdicionada"));
        } else if (adicionarReceita){
            linhaDados.appendChild(montaTd(dadosDespesa.observacao, "receitaAdicionada"));
        }
        
        linhaDados.appendChild(montaTd(dadosDespesa.data,"td-data" ));
        linhaDados.appendChild(montaTd(dadosDespesa.categoria, "td-categoria"))
        linhaDados.appendChild(montaTd(dadosDespesa.valor.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` }), "td-valor"))

        return linhaDados;
    }

    function montaTd(dados,classe){
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        return td;
    }

    document.querySelector(".informacoesCadastradas").style.display = "block";
    
})