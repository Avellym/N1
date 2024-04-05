const calcSalario = document.getElementById('salariocalcSalario');
const nomeInput = document.getElementById('nome');
const valorHoraInput = document.getElementById('valorHora');
const horaInput = document.getElementById('hora');
const salarioBrutoInput = document.getElementById('salarioBruto');
const irrfInput = document.getElementById('irrf');
const sLInput = document.getElementById('sL');
const inssInput = document.getElementById('inss');

function calculoIRRF(salarioBruto) {
    let irrf = 0;

    if (salarioBruto > 4664.68) {
        irrf = salarioBruto * 0.275;
    } else if (salarioBruto >= 3751.05 && salarioBruto < 4664.67) {
        irrf = salarioBruto * 0.225;
    } else if (salarioBruto >= 2826.66 && salarioBruto < 3751.04) {
        irrf = salarioBruto * 0.15;
    } else if (salarioBruto >= 2640 && salarioBruto < 2826.65) {
        irrf = salarioBruto * 0.075;
    } else if (salarioBruto >= 2212.01 && salarioBruto < 2640){
        irrf = salarioBruto - 528;
      }
    return irrf;
}


function calculoINSS(salarioBruto) {
    let inss = 0;
    if (salarioBruto <= 1412) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68 && salarioBruto > 1412) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 4000.03 && salarioBruto > 2666.68) {
        inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 7786.02 && salarioBruto > 4000.02) {
        inss = salarioBruto * 0.14;
    } else {
        inss = 751.99;
    }
    return inss;
}


calcSalario.addEventListener('submit', function (e) {
    e.preventDefault();


    const horaValue = parseFloat(horaInput.value);
    const valorHoraValue = parseFloat(valorHoraInput.value);



    if (!isNaN(horaValue) && !isNaN(valorHoraValue)) {

        const calculodsalarioBruto = (horaValue * valorHoraValue);


        const calculodINSS = calculoINSS(calculodsalarioBruto);


        const calculodIRRF = calculoIRRF(calculodsalarioBruto);


        const calculodsL = calculodsalarioBruto - calculodINSS - calculodIRRF;


        salarioBrutoInput.value = calculodsalarioBruto.toFixed(2);
        irrfInput.value = calculodIRRF.toFixed(2);
        sLInput.value = calculodsL.toFixed(2);
        inssInput.value = calculodINSS.toFixed(2);
    } else {

        alert('Por favor, insira valores válidos para valorHoras trabalhadas e valor da valorHora.');
    }
});


document.getElementById('reset').addEventListener('click', function () {

    nomeInput.value = '';
    valorHoraInput.value = '';
    horaInput.value = '';
    salarioBrutoInput.value = '';
    irrfInput.value = '';
    sLInput.value = '';
});
