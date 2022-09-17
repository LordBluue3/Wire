var contador = 0;
var contadorV = 0;
var btn_1 = 1;
var btn_2;
var btn_3;
var btn_4;
var btn_5;
//Função de avançar, modifica o valor dos inputs do tipo botão do blog.html
function avancar() {
    //verifica se contador é igual a 0 se for ele executa essa instrução, isso foi feito pra ser executado somente uma vez.
    if (contador === 0) {
        btn_1 = document.getElementById("btn_1").value;
        btn_2 = document.getElementById("btn_2").value;
        btn_3 = document.getElementById("btn_3").value;
        btn_4 = document.getElementById("btn_4").value;
        btn_5 = document.getElementById("btn_5").value;
    }
    //pega o valor das váriaveis e incrementa um numero
    btn_1++;
    btn_2++;
    btn_3++;
    btn_4++;
    btn_5++;
  
    //troca o valor dos inputs pelas variáveis acima
    document.getElementById("btn_1").value = btn_1
    document.getElementById("btn_2").value = btn_2
    document.getElementById("btn_3").value = btn_3
    document.getElementById("btn_4").value = btn_4
    document.getElementById("btn_5").value = btn_5
    //incrementa um valor no contador
    contador++;

}
//Função de voltar, modifica o valor dos inputs do tipo botão do blog.html
function voltar() {
    //se o valor do btn_1 for diferente de 0 ele executa, isso foi feito para o input parar no numero 1 e não ficar voltando para numeros negativos
    if (btn_1 !== 1) {
        //verifica se contador é igual a 0 se for ele executa essa instrução, isso foi feito pra ser executado somente uma vez.
        if (contadorV === 0) {
            btn_1 = document.getElementById("btn_1").value;
            btn_2 = document.getElementById("btn_2").value;
            btn_3 = document.getElementById("btn_3").value;
            btn_4 = document.getElementById("btn_4").value;
            btn_5 = document.getElementById("btn_5").value;
        }
        
        btn_1--;
        btn_2--;
        btn_3--;
        btn_4--;
        btn_5--;

        document.getElementById("btn_1").value = btn_1
        document.getElementById("btn_2").value = btn_2
        document.getElementById("btn_3").value = btn_3
        document.getElementById("btn_4").value = btn_4
        document.getElementById("btn_5").value = btn_5

        contadorV++;
    }

}