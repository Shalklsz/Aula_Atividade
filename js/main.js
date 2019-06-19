var num1 = parseInt(prompt("Digite o primeiro valor"));
var num2 = parseInt(prompt("Digite o segundo valor"));
var result = 0;

var equ = prompt("Selecione a operação: a=+, b=-, c=*, d=/");

if (equ == a) {
    result = num1 + num2;
    alert(result);    
} else if (equ == b) {
    result = num1 - num2;
    alert(result);
}else if (equ == c) {
    result = num1 * num2;
    alert(result);    
}else if (equ == d) {
    result = num1/num2;
    alert(result);    
}