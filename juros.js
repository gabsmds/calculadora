const calcular = document.getElementById('calcular');
function juros(){
    const nome = document.getElementById('nome').value;
    const taxa = +document.getElementById('taxa').value;
    const capital = +document.getElementById('capital').value;
    const tempo = +document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');


    if(nome !== ''&& taxa !=='' && capital !== '' && tempo !== ''){
        const valorjuros = ((taxa/100)*capital*tempo).toFixed(1);
        let classificacao = '';
        if (valorjuros <= 1){
            classificacao = 'juros baixo.';
        }else if(valorjuros >= 5 && valorjuros <10){
            classificacao = 'juros médio.';
        }else if (valorjuros >= 10){
            classificacao = 'juros alto.';
        }
        resultado.textContent = `${nome} seu juros é ${valorjuros} e ele está classificado como ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}



calcular.addEventListener('click', juros);