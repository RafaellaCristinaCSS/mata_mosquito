var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500
var nivel = window.location.search /* O metodo search retorna tudo que esta apos o ? da URL */
nivel = nivel.replace('?', '') /* O replace esta sendo ultilizado para tirar o ? que vira da URL e subistitui-lo por '' */
if(nivel === 'normal'){
    criaMosquitoTempo = 1800
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
}else{
    document.getElementById('cronometro').innerHTML = tempo /* innerHTML serve para incrementar um valor HTMl dentro das tegs */
}

   
},1000)


/* Criando uma funcao para definir a posicao do mosquito */
function posicaoRandomica(){
   /* Caso ja exista um mosquito criado ira remove-lo, se nao dar procedimento a funcao */
   if(document.getElementById('mosquito')){
       document.getElementById('mosquito').remove()
        if(vidas > 3){
           window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
      
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90 /* Ou seja, essa variavel pegara um valor aleatorio entre 0 e o total da largura do browser do usuario (O -90 foi adicionado para manter uma distancia do final da tela) */
                                        /* O metodo floor sera ultilizado para arredondar para baixo os valores obtidos e transformando em inteiros */
    var posicaoY = Math.floor(Math.random() * altura) - 90 /* Ou seja, essa variavel pegara um valor aleatorio entre 0 e o total da Altura do browser do usuario (O -90 foi adicionado para manter uma distancia do final da tela)*/
                                        /* O metodo floor sera ultilizado para arredondar para baixo os valores obtidos e transformando em inteiros */
    /* Apenas para garantir que o valor nunca sera menor do que zero */
    posicaoX = posicaoX < 0? 0: posicaoX
    posicaoY = posicaoY < 0? 0: posicaoY
                                        
    console.log(posicaoY, posicaoX)

    /* Criando uma imagem no HTML */
    var mosquito = document.createElement('img') //Criando o elemento e atribuindo o mesmo a uma variavel
        //Atribuindo propiedades a imagem criada
        mosquito.src = 'imagens/mosquito.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//A classe sera igual ao valor retornado pela funcao tamanhoAleatorio e a imagem atribuida a classe sera invertida quando a classe for acionada pela funcao ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id ='mosquito'
        mosquito.onclick = function(){
            this.remove() /* Ou seja, ele removera o elemento que estamos trabalhando, no caso o mosquito */
        }

        document.body.appendChild(mosquito)
      
}

/* Criando uma funcao para definir o tamanho do mosquito */
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    
    }
}