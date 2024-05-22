const valorB = document.getElementById("numeroX");
const valorA = document.getElementById("numeroY");
const form = document.getElementById("form-calcular");

function calcular(numero){
    const numeroB = parseFloat( valorB.value );
    const numeroA = parseFloat( valorA.value );
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número B : ${ valorB.value }, é maior que o número A : ${valorA.value}`;
    const mensagemErro = `O número B : ${ valorB.value }, é menor que o número A : ${valorA.value}`;
    
    const mensagemElement = document.querySelector('#mensagem');
    
    if (calcular()) {
        mensagemElement.innerHTML = mensagemSucesso;
        mensagemElement.classList.add('success-message');
        mensagemElement.classList.remove('error-message');
    } else {
        mensagemElement.innerHTML = mensagemErro;
        mensagemElement.classList.add('error-message');
        mensagemElement.classList.remove('success-message');
    }
    mensagemElement.style.display = 'flex';    

    valorB.value = '';
    valorA.value = '';
})