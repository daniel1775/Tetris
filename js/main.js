import { Pieza, Z, Zi, L, Li, C, T, P } from './Piezas.js';

let canvas;
let ctx;
let anchoF = 20;
let altoF = 20;
let fichas = [new Z(), new Zi(), new L(), new Li, new C(), new T(), new P()];

canvas = document.getElementById("canva");
ctx = canvas.getContext("2d");

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

// Dibujar pieza en el estado inicial
function dibujarFicha(obj , tipo){
   if(tipo=="abajo"){
      if(obj.coordenadas[0][0]!=19 && obj.coordenadas[1][0]!=19 && obj.coordenadas[2][0]!=19 && obj.coordenadas[3][0]!=19){
         obj.desplazarAbajo();
      }
   }else if(tipo=="izquierda"){
      if(obj.coordenadas[0][1]!=0 && obj.coordenadas[1][1]!=0 && obj.coordenadas[2][1]!=0 && obj.coordenadas[3][1]!=0){
         obj.desplazarIzquierda();
      }
   }else if(tipo=="derecha"){
      if(obj.coordenadas[0][1]!=9 && obj.coordenadas[1][1]!=9 && obj.coordenadas[2][1]!=9 && obj.coordenadas[3][1]!=9){
         obj.desplazarDerecha();
      }
   }
   ctx.fillStyle = obj.color;
   ctx.fillRect(obj.coordenadas[0][1]*anchoF, obj.coordenadas[0][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[1][1]*anchoF, obj.coordenadas[1][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[2][1]*anchoF, obj.coordenadas[2][0]*altoF, anchoF, altoF);
   ctx.fillRect(obj.coordenadas[3][1]*anchoF, obj.coordenadas[3][0]*altoF, anchoF, altoF);
}

// Pinta el tablero con un determinado color
function rellenarTablero(){
   for(let i=0 ; i<tablero.length ; i++){
      for(let j=0 ; j<tablero[i].length ; j++){
         ctx.fillStyle = "white";
         ctx.fillRect(j*anchoF, i*anchoF, altoF, anchoF);
      }
   }
}

function generarPiezaAleatoria(){
   return fichas[parseInt(Math.random())];
}

// Funcion principal
function principal(){
   let z = new P();
   document.addEventListener('keydown', (tecla) =>{
      if(tecla.key == 'ArrowLeft'){
         rellenarTablero();
         dibujarFicha(z, "izquierda");
      }else if(tecla.key == 'ArrowRight'){
         rellenarTablero();
         dibujarFicha(z, "derecha");
      }else if(tecla.key == 'ArrowDown'){
         rellenarTablero();
         dibujarFicha(z, "abajo");
      }else if(tecla.key == "ArrowUp"){
         rellenarTablero();
         z.rotar();
         z.con++;
         if(z.con>1){
            z.con=0;
         }
         dibujarFicha(z);
      }
   });

   let intervalo = setInterval(() => {
      rellenarTablero();
      dibujarFicha(z, "abajo");
   }, 1000);
}

principal();