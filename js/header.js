//crio essa variavel contador para fazer uma verificação!
var contador = 1;
//função que faz o menuhambuguer funcionar
function nav_responsiva(){
    contador = contador + 1;
    var resto = contador % 2;
    //se o resto da divisão do contador for 0 ele executa essa parte (isso foi feito para saber qual click a pessoa quer, clicou uma vez o resto vai ser 0, clicou novamente o resto vai ser 1, clicou novamente o resto vai ser 0 e dessa maneira o menu hamburguer sobe e desce)
    if(resto === 0){
        //descer o menu hamburguer
        document.querySelector("nav").style = "height: 510px; transition: all 0.8s; background-color: white; padding-top: 5rem; position: fixed;z-index: 9989;top: 0;";
        document.getElementById("logo__header").style = "visibility: hidden;";
        document.querySelector("ul").style = "height: 430px; transition: all 0.8s;";
        document.getElementById("imagens__logo").style = "background-color: white; display: none;";
        document.getElementById("menu__hamburguer").style = " position: fixed; z-index: 9999;";

        
    }else{
        //subir o menu hambuguerger 
        document.querySelector("nav").style = "height: 0; transition: all 0.5s; position: relative;";
        document.getElementById("logo__header").style = "visibility: visible;";
        document.querySelector("ul").style = "height: 0; transition: all 0.5s;";
        document.getElementById("menu__hamburguer").style = "position: absolute";
        setTimeout(display, 350);// vai executar a função 'display' depois de 350 milisegundos 
        
    }
}



//mesma função que a anterior mas essa função foi feita para o header que não tiver background
function nav_responsiva2(){
    contador = contador + 1;
    var resto = contador % 2;
    if(resto === 0){
        //descer o menu hamburguer
        document.querySelector("nav").style = "height: 430px; transition: all 0.8s; background-color: white; margin-top: 37rem; position: absolute;";
        document.getElementById("logo__header").style = "visibility: hidden; position: absolute;";
        document.querySelector("ul").style = "height: 430px; transition: all 0.8s;";
        document.getElementById("imagens__logo").style = "background-color: white; display: none;";
  
        
    }else{
        //subir o menu hambuguerger 
        document.querySelector("nav").style = "height: 0; transition: all 0.5s; position: relative;";
        document.getElementById("logo__header").style = "visibility: visible; position: absolute;";
        document.getElementById("container__nav-all").style = "visibility: visible; position: absolute;display:flex; justify-content: space-between;";
        document.querySelector("ul").style = "height: 0; transition: all 0.5s;";
        setTimeout(display, 350);// vai executar a função 'display' depois de 350 milisegundos 
    }
}
//função que faz aparecer a logo após o recolhimento da nav, se mexer nisso o menu hamburguer vai quebrar
function display() {
    console.log("passou aqui")
     document.getElementById("imagens__logo").style = "background-color: transparent; transition: all 12.0s; display: flex !important;";
}