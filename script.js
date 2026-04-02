var visitante = 3;
var nome = "Visitante"

//se o visitante = 3 ganha o prêmio
if (visitante === 3){
alert("olá "+nome+", Este é o meu currículo virtual")
}else {
    alert ( "Bem vindo !!!");
}

//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obétem lista
var listaMenu = document.querySelector('.menu ul');

//evento de click no menu
celular.addEventListener('click', function(){
    listaMenu.classList.toggle('mostraMenu');
});

 
