import { Z, Zi, L, Li, C, T, P } from './Piezas.js';

let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
let puntaje = document.querySelector(".header__score--titleScore p");
let nivel = document.querySelector(".header__score--titleLevel p");
let btnPause = document.querySelector(".footer__button--pause");
let btnReinicio = document.querySelector(".footer__button--restart");
let mensajeIns = document.querySelector(".message__container");
let btnIzquierda = document.getElementById("footer__button--left");
let btnArriba = document.getElementById("footer__button--up");
let btnDerecha = document.getElementById("footer__button--right");
let btnAbajo = document.getElementById("footer__button--down");

// width and heigh of the piece
let anchoF = canvas.width/10;
let altoF = canvas.width/10;
// store the current piece
let pieza = generarPieza(generarNumeroAleatorio());
// store the next piece
let pieza2 = generarPieza(generarNumeroAleatorio());;
// canvas of the next piece
let piezaSiguiente = document.querySelector("#header__next--box");
let ctxNext = piezaSiguiente.getContext("2d");
// value of the interval
let tiempo = 500;

let tablero = [
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
];

// Draw a piece in the next piece canvas
function generarMini(obj){
   ctxNext.fillStyle = obj.color;
   ctxNext.strokeStyle = "black";

   let num = 20;
   let num2 = 15;
   let num3 = -35;
   let num4 = num;
   ctxNext.fillRect((obj.coordenadas[0][1]*num)+num3, (obj.coordenadas[0][0]*num)+num2, num4, num4);
   ctxNext.fillRect((obj.coordenadas[1][1]*num)+num3, (obj.coordenadas[1][0]*num)+num2, num4, num4);
   ctxNext.fillRect((obj.coordenadas[2][1]*num)+num3, (obj.coordenadas[2][0]*num)+num2, num4, num4);
   ctxNext.fillRect((obj.coordenadas[3][1]*num)+num3, (obj.coordenadas[3][0]*num)+num2, num4, num4);

   ctxNext.strokeRect((obj.coordenadas[0][1]*num)+num3, (obj.coordenadas[0][0]*num)+num2, num4, num4);
   ctxNext.strokeRect((obj.coordenadas[1][1]*num)+num3, (obj.coordenadas[1][0]*num)+num2, num4, num4);
   ctxNext.strokeRect((obj.coordenadas[2][1]*num)+num3, (obj.coordenadas[2][0]*num)+num2, num4, num4);
   ctxNext.strokeRect((obj.coordenadas[3][1]*num)+num3, (obj.coordenadas[3][0]*num)+num2, num4, num4);
}

// Clean canvas of the next piece
function limpiarMini(){
   ctxNext.fillStyle = "white";
   ctxNext.fillRect(0, 0, piezaSiguiente.width, piezaSiguiente.height);
}

// Generate a random piece
function generarPieza(random){
   let aux;
   if(random==0){
      aux = new Z();
   }else if(random==1){
      aux = new Zi();
   }else if(random==2){
      aux = new L();
   }else if(random==3){
      aux = new Li();
   }else if(random==4){
      aux = new C();
   }else if(random==5){
      aux = new T();
   }else if(random==6){
      aux = new P();
   }
   return aux;
}

// Generate a random number between 0 and 6
function generarNumeroAleatorio(){
   return Math.floor(Math.random()*(7));
}

// Fix a piece and generate a new piece
function fijarPieza(ficha){
   for(let i=0 ; i<ficha.coordenadas.length ; i++){
      tablero[ficha.coordenadas[i][0]][ficha.coordenadas[i][1]] = 1;
   }
   pieza = pieza2;
   pieza2 = generarPieza(generarNumeroAleatorio());
   limpiarMini();
   generarMini(pieza2);
}

// Draw a piece in the initial state
function dibujarFicha(obj , tipo){
   if(tipo=="abajo"){
      // Check if arrive at limit of the board or to the more fixed pieces
      if((obj.coordenadas[0][0]!=19 && obj.coordenadas[1][0]!=19 && obj.coordenadas[2][0]!=19 && obj.coordenadas[3][0]!=19) &&
         (tablero[obj.coordenadas[3][0]+1][obj.coordenadas[3][1]]!=1 && tablero[obj.coordenadas[2][0]+1][obj.coordenadas[2][1]]!=1 && tablero[obj.coordenadas[1][0]+1][obj.coordenadas[1][1]]!=1 && tablero[obj.coordenadas[0][0]+1][obj.coordenadas[0][1]]!=1)){
         obj.desplazarAbajo();
      }else{
         fijarPieza(obj);
      }
   }else if(tipo=="izquierda"){
      if((obj.coordenadas[0][1]!=0 && obj.coordenadas[1][1]!=0 && obj.coordenadas[2][1]!=0 && obj.coordenadas[3][1]!=0) &&
         (tablero[obj.coordenadas[0][0]][obj.coordenadas[0][1]-1]!=1 && tablero[obj.coordenadas[1][0]][obj.coordenadas[1][1]-1]!=1) && tablero[obj.coordenadas[2][0]][obj.coordenadas[2][1]-1]!=1 && tablero[obj.coordenadas[3][0]][obj.coordenadas[3][1]-1]!=1){
         obj.desplazarIzquierda();
      }
   }else if(tipo=="derecha"){
      if((obj.coordenadas[0][1]!=9 && obj.coordenadas[1][1]!=9 && obj.coordenadas[2][1]!=9 && obj.coordenadas[3][1]!=9) &&
      (tablero[obj.coordenadas[0][0]][obj.coordenadas[0][1]+1]!=1 && tablero[obj.coordenadas[1][0]][obj.coordenadas[1][1]+1]!=1) && tablero[obj.coordenadas[2][0]][obj.coordenadas[2][1]+1]!=1 && tablero[obj.coordenadas[3][0]][obj.coordenadas[3][1]+1]!=1){
         obj.desplazarDerecha();
      }
   }
   ctx.fillStyle = obj.color;
   ctx.strokeStyle = "black";

   ctx.fillRect(obj.coordenadas[0][1]*anchoF, obj.coordenadas[0][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[1][1]*anchoF, obj.coordenadas[1][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[2][1]*anchoF, obj.coordenadas[2][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[3][1]*anchoF, obj.coordenadas[3][0]*altoF, anchoF, altoF);

   ctx.strokeRect(obj.coordenadas[0][1]*anchoF, obj.coordenadas[0][0]*altoF, anchoF, altoF);
   ctx.strokeRect(obj.coordenadas[1][1]*anchoF, obj.coordenadas[1][0]*altoF, anchoF, altoF);
   ctx.strokeRect(obj.coordenadas[2][1]*anchoF, obj.coordenadas[2][0]*altoF, anchoF, altoF);
   ctx.strokeRect(obj.coordenadas[3][1]*anchoF, obj.coordenadas[3][0]*altoF, anchoF, altoF);
}

// Paint the board with a specific color
function rellenarTablero(){
   // This variable save the count to delete the complete lines
   let con = 0;
   for(let i=0 ; i<tablero.length ; i++){
      for(let j=0 ; j<tablero[i].length ; j++){
         if(tablero[i][j]==0){
            ctx.fillStyle = "#272727";
            ctx.fillRect(j*anchoF, i*anchoF, altoF, anchoF);
         }else if(tablero[i][j]==1){
            ctx.fillStyle = "red";
            ctx.fillRect(j*anchoF, i*anchoF, altoF, anchoF);
            ctx.strokeStyle = "black";
            ctx.strokeRect(j*anchoF, i*anchoF, altoF, anchoF);
            con++;
         }
      }
      if(tablero[i].length==con){
         tablero.splice(i, 1);
         tablero.unshift([0,0,0,0,0,0,0,0,0,0]);
         puntaje.innerText = parseInt(puntaje.innerText)+100;
         if(parseInt(puntaje.innerText) % 1000 == 0){
            nivel.innerText = parseInt(nivel.innerText)+1;
            tiempo=100;
         }
         //console.log(tablero.pop());
      }
      con=0;
   }
}

// Main function
function principal(){
   btnIzquierda.addEventListener('click', () => {
      rellenarTablero();
      dibujarFicha(pieza, "izquierda");
   });

   btnDerecha.addEventListener('click', () => {
      rellenarTablero();
      dibujarFicha(pieza, "derecha");
   });

   btnArriba.addEventListener('click', () => {
      rellenarTablero();
         pieza.rotar();
         pieza.con++;
         if(pieza.con>=pieza.numRotaciones){
            pieza.con=0;
         }
         dibujarFicha(pieza);
   });

   btnAbajo.addEventListener('click', () => {
      rellenarTablero();
      dibujarFicha(pieza, "abajo");
   });

   document.addEventListener('keydown', (tecla) =>{
      if(tecla.key == 'ArrowLeft'){
         rellenarTablero();
         dibujarFicha(pieza, "izquierda");
      }else if(tecla.key == 'ArrowRight'){
         rellenarTablero();
         dibujarFicha(pieza, "derecha");
      }else if(tecla.key == 'ArrowDown'){
         rellenarTablero();
         dibujarFicha(pieza, "abajo");
      }else if(tecla.key == "ArrowUp"){
         rellenarTablero();
         pieza.rotar();
         /* if(pieza.coordenadas[0][0]==){
            
         } */
         pieza.con++;
         if(pieza.con>=pieza.numRotaciones){
            pieza.con=0;
         }
         dibujarFicha(pieza);
      }
   });

   btnPause.addEventListener('click', () => {
      alert("EntParo");
   });
   btnReinicio.addEventListener('click', () => {
      pieza = generarPieza(generarNumeroAleatorio());
      puntaje.innerText = 0;
      nivel.innerText = 0;
      for(let i=0 ; i<tablero.length ; i++){
         for(let j=0 ; j<tablero[i].length ; j++){
            tablero[i][j] = 0;
         }
      }
   });

   let intervalo = setInterval(() => {
      rellenarTablero();
      dibujarFicha(pieza, "abajo");
   }, 1000);
}
let aux = 0;
document.body.addEventListener('click', () =>{
   aux++;
   if(aux==1){
      mensajeIns.style.display = "none";
      principal();
   }
});
