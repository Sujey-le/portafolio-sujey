//console.log("Hola mundo! deesde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString(' Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<span style="color: #304d6d;"><strong>programar!</strong></span>')
    .pauseFor(2500)
    .start();




let frase = document.getElementById('frase');


let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

//Reconoces una accion porque tiene paréntesis después del nombre de la accón
// a veces tiene el operador . (punto)

typewriterFrase
    .pauseFor(1500) //milisegundos 1.5 segundos
    .typeString('Dasarrolladora web')
    .pauseFor(800)
    .deleteAll()
    .typeString('Contadora Publica')
    .pauseFor(800)
    .deleteAll()
    .typeString('Abogada')
    .pauseFor(800)
    .start();