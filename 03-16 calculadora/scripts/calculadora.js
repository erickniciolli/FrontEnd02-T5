let operacao=document.getElementById("operacao");

let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

console.log(operacao.value);
console.log(num1.value);



function ExibeResultado (operacao) {
    console.log(operacao)
}

function calculadora (operacao) {
    if (operacao=="somar") {
        somar
        exibeResultado(somar)
        alert(`O resultado é ${somar}`)
    }
    else if (operacao=="subtrair") {
        subtrair;
        exibeResultado(subtrair)
    }
    else if (operacao=="dividir") {
        dividir;
        exibeResultado(subtrair)
    }
    else if(operacao=="multiplicar") {
        multiplicar;
        exibeResultado(multiplicar)
    }
    else {
        alert("Essa operação não existe!")
    }

}
