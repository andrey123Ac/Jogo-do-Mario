const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botaoStar = document.querySelector('.botaoStar')
const reiciniar = document.querySelector('.reiniciar')
const pontos = document.querySelector('.pontos');
const areaPontos = document.querySelector('.areaPontos');


const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'nome'
        pipe.classList.add('left');


        mario.style.animation = 'nome'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        reiciniar.classList.remove('hide');
        pontos.innerHTML = ''
        contador = 0
        som.pause()



        reiciniar.addEventListener('click', () => {

            pipe.classList.remove('left');
            pipe.style.removeProperty("animation");

            mario.style.removeProperty("animation");
            mario.src = 'img/mario.gif';
            mario.style.width = '150px'
            mario.style.bottom = 0
            som.play()

            setTimeout(() => {
        
                contador = 0
                pontos.innerHTML = "";
              
            }, 400);

            setTimeout(() => {

                reiciniar.classList.add('hide');

            }, 500);

        });


    } else {

    }






});

botaoStar.addEventListener('click', () => {

    pipe.classList.remove('posicaoInicialcano');
    pipe.classList.add('inimacaoCano');
    botaoStar.classList.add('hide');  
    som = new Audio('audio_theme.mp3')
    som.play()


    setTimeout(() => {

        contador = 0
        pontos.innerHTML = "";
      
    }, 400);

    

});

document.addEventListener('click', () => {
    jump()
    aumentarContador()

});

document.addEventListener('keydown', () => {
    jump()
    aumentarContador()

});

// Inicializa o contador
let contador = 0;

function aumentarContador() {
    contador++;
    atualizarContador();
}


function atualizarContador() {

    pontos.textContent = contador;
}


