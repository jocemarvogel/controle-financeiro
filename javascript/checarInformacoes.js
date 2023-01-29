function checar() {

    var adicionarDespesa = document.querySelector("#adicinarDespesa").checked;
    var adicionarReceita =  document.querySelector("#adicinarReceita").checked;

    document.querySelector("#formulario").style.display = "block"

    if (adicionarDespesa) {
        document.querySelector("#categoriaReceita").style.display = "none";
        document.querySelector("#categoriaDespesa").style.display = "block";
        document.querySelector("#nome").focus();
    } else if (adicionarReceita) {
        document.querySelector("#categoriaDespesa").style.display = "none";
        document.querySelector("#categoriaReceita").style.display = "block";
        document.querySelector("#nome").focus();
    }
}

