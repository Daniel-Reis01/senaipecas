var listadepecas = ["filtro","volante","amortecedor"]

if (listadepecas.length < 10){
    //É possivel cadastrar 
    console.log("È possivel cadastrar mais pecas")
    }else {
        console.log("Não tem mais espaco na lista")
    }

    let peso = 50;
    if(peso<100){ 
        console.log("A peca deve pesar no minimo 100g")
    }else {
        console.log("A peca possui peso adequado")
    }

    let nomepeca = "disco de freio"
    if(nomepeca.length>3){
        console.log("Nome de peca esta adequado para o cadastro!")
    }else{
        console.log("o nome dee ter mais de 3 caracteres,digite um nome adequado")
    }