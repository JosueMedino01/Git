function classificar(){
//LINK
const massa = Number(document.getElementById('peso').value)
const altura = Number(document.getElementById('altura').value)
let imc = massa/(altura*altura)
let saida = document.getElementById('output')

//Classificação 
if(massa==null || altura == null || altura ==0){
    alert('Valores Inválidos!')
} else{




if(imc<18.5){
    //Baixo Pesso
    saida.innerHTML = `Classificação: Peso Baixo`
    saida.innerHTML += `<br> IMC: ${imc}`
} else if(imc<24.9){
    //Peso Normal
    saida.innerHTML = `Classificação: Peso Normal`
    saida.innerHTML += `<br> IMC: ${imc}`
} else if (imc<29.9){
    //Excesso de Peso
    saida.innerHTML = `Classificação: Excesso de Peso`
    saida.innerHTML += `<br> IMC: ${imc}`
} else if (imc<34.9){
    //Obesidade Grau 1
    saida.innerHTML = `Classificação: Obesidade de Grau I`
    saida.innerHTML += `<br> IMC: ${imc}`
} else if (imc<39.9){
    //Obesidade Grau 2 (Severa)
    saida.innerHTML = `Classificação: Obesidade de Grau II`
    saida.innerHTML += `<br> IMC: ${imc}`
} else{
    //Obesidade Grau 3 (Mórbida)
    saida.innerHTML = `Classificação: Obesidade de Grau III`
    saida.innerHTML += `<br> IMC: ${imc}`
}
}




}


