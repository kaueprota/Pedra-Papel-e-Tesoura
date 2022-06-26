{
  var pedra = document.querySelector('.player > div > .pedra');
  var papel = document.querySelector('.player > div > .papel');
  var tesoura = document.querySelector('.player > div > .tesoura');
  var player = document.querySelector('.player')

  var jogadaPlayer = [pedra, papel, tesoura]
  

  var pedraEnemy = document.querySelector('.player-enemy > div > .pedra');
  var papelEnemy = document.querySelector('.player-enemy > div > .papel');
  var tesouraEnemy = document.querySelector('.player-enemy> div > .tesoura');


  

  {//jogada do usuário e aleatoridade do bot
    function jogadaEnemy(){
      let listaEnemy = [pedraEnemy, papelEnemy, tesouraEnemy]
      let index = listaEnemy[Math.floor(Math.random() * 3)];
      var respostaBot = index.dataset.jogada
      pedraEnemy.style.opacity = '0.4'
      papelEnemy.style.opacity = '0.4'
      tesouraEnemy.style.opacity = '0.4'
      index.style.opacity='1'
      return respostaBot
      
     }

     console.log(jogadaEnemy())
    
      player.addEventListener('click', (element)=> {
        var player = element.target;
        var jogada = player.dataset.jogada
          pedra.style.opacity = '0.4'
          papel.style.opacity = '0.4'
          tesoura.style.opacity = '0.4'
          player.style.opacity = '1'
        
        vencedor(jogada, jogadaEnemy())
        

        playerEnemy.innerHTML = `Derrotas: ${loseGames.length}`
        playerResultado.innerHTML = `Vitórias: ${winsGames.length}`

        })
      var winsGames = []
      var loseGames = []
      var playerEnemy = document.querySelector('#playerEnemy')
      var PlayerResultado =document.querySelector('#PlayerResultado')
      

      function vencedor(jogadaPlayer, jogadaBot){

        console.log(loseGames.length)

        let resultadoH1 = document.querySelector('#resultado')
        let resultadop = document.querySelector('#detalhe')
        if(jogadaPlayer == 'pedra' && jogadaBot == 'papel'){
          resultadoH1.innerHTML = "LOSE"
          resultadop.innerHTML = "O inimigo venceu!"
          loseGames.push('1')

          
          }
        else if(jogadaPlayer == 'pedra' && jogadaBot == 'tesoura'){
          resultadoH1.innerHTML = "WIN"
          resultadop.innerHTML = "Você venceu o inimigo!"
          winsGames.push('1')
          }
        else if(jogadaPlayer == 'pedra' && jogadaBot == 'pedra'){
          resultadoH1.innerHTML = "OH!"
          resultadop.innerHTML = "Houve um empate!"
        }

        if(jogadaPlayer == 'papel' && jogadaBot == 'tesoura'){
          resultadoH1.innerHTML = "LOSE"
          resultadop.innerHTML = "O inimigo venceu!"
          loseGames.push('1')
          }
        else if(jogadaPlayer == 'papel' && jogadaBot == 'pedra'){
          resultadoH1.innerHTML = "WIN"
          resultadop.innerHTML = "Você venceu o inimigo!"
          winsGames.push('1')
          }
        else if(jogadaPlayer == 'papel' && jogadaBot == 'papel'){
          resultadoH1.innerHTML = "OH!"
          resultadop.innerHTML = "Houve um empate!"
        }

        if(jogadaPlayer == 'tesoura' && jogadaBot == 'papel'){
          resultadoH1.innerHTML = "LOSE"
          resultadop.innerHTML = "O inimigo venceu!"
          loseGames.push('1')
          }
        else if(jogadaPlayer == 'tesoura' && jogadaBot == 'pedra'){
          resultadoH1.innerHTML = "WIN"
          resultadop.innerHTML = "Você venceu o inimigo!"
          winsGames.push('1')
          }
        else if(jogadaPlayer == 'tesoura' && jogadaBot == 'tesoura'){
          resultadoH1.innerHTML = "OH!"
          resultadop.innerHTML = "Houve um empate!"
        }

      }

      
    

  }//jogada do usuário e aleatoridade do bot
  
  


}
 
    