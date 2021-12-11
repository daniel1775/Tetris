class Pieza {
   constructor(){
      this.coordenadas = [
         [],
         [],
         [],
         []
      ];
      this.nombre;
      this.color;
      this.con = 1;
   }

   desplazarAbajo(){
      this.coordenadas[0][0]++;
      this.coordenadas[1][0]++;
      this.coordenadas[2][0]++;
      this.coordenadas[3][0]++;
   }
   desplazarIzquierda(){
      this.coordenadas[0][1]--;
      this.coordenadas[1][1]--;
      this.coordenadas[2][1]--;
      this.coordenadas[3][1]--;
   }
   desplazarDerecha(){
      this.coordenadas[0][1]++;
      this.coordenadas[1][1]++;
      this.coordenadas[2][1]++;
      this.coordenadas[3][1]++;
   }
   rotar(){

   }
}

class Z extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 0;
      this.coordenadas[1][1] = 5;
      this.coordenadas[2][0] = 1;
      this.coordenadas[2][1] = 5;
      this.coordenadas[3][0] = 1;
      this.coordenadas[3][1] = 6;
      this.nombre = "Z";
      this.color = "red";
   }

   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]-1;
         this.coordenadas[1][0] = this.coordenadas[2][0]+1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1]-1;
      }
   }
}

class Zi extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 0;
      this.coordenadas[1][1] = 5;
      this.coordenadas[2][0] = 1;
      this.coordenadas[2][1] = 4;
      this.coordenadas[3][0] = 1;
      this.coordenadas[3][1] = 3;
      this.nombre = "Zi";
      this.color = "blue";
   }

   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]+1;
         this.coordenadas[1][0] = this.coordenadas[2][0]+1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1]-1;
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]+1;
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }
   }
}

class L extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 1;
      this.coordenadas[1][1] = 4;
      this.coordenadas[2][0] = 2;
      this.coordenadas[2][1] = 4;
      this.coordenadas[3][0] = 2;
      this.coordenadas[3][1] = 5;
      this.nombre = "L";
      this.color = "green";
   }
   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0]-2;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0]-1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]-2;
      }else if(this.con==2){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]-1;
         this.coordenadas[1][0] = this.coordenadas[2][0]+1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0]+2;
         this.coordenadas[3][1] = this.coordenadas[2][1];
      }else if(this.con==3){
         this.coordenadas[0][0] = this.coordenadas[2][0]+1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]+1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+2;
      }
   }
}

class Li extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 1;
      this.coordenadas[1][1] = 4;
      this.coordenadas[2][0] = 2;
      this.coordenadas[2][1] = 4;
      this.coordenadas[3][0] = 2;
      this.coordenadas[3][1] = 3;
      this.nombre = "Li";
      this.color = "green";
   }

   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0]-2;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0]-1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]-1;
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]+1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+2;
      }else if(this.con==2){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]+1;
         this.coordenadas[1][0] = this.coordenadas[2][0]+1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0]+2;
         this.coordenadas[3][1] = this.coordenadas[2][1];
      }else if(this.con==3){
         this.coordenadas[0][0] = this.coordenadas[2][0]+1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]-2;
      }
   }
}

class C extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 0;
      this.coordenadas[1][1] = 5;
      this.coordenadas[2][0] = 1;
      this.coordenadas[2][1] = 4;
      this.coordenadas[3][0] = 1;
      this.coordenadas[3][1] = 5;
      this.nombre = "C";
      this.color = "yellow";
   }
   rotar(){}
}

class T extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 1;
      this.coordenadas[1][1] = 4;
      this.coordenadas[2][0] = 0;
      this.coordenadas[2][1] = 3;
      this.coordenadas[3][0] = 0;
      this.coordenadas[3][1] = 5;
      this.nombre = "T";
      this.color = "red";
   }

   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]-1;
         this.coordenadas[1][0] = this.coordenadas[2][0]+1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]+1;
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1];
      }else if(this.con==2){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }else if(this.con==3){
         this.coordenadas[0][0] = this.coordenadas[2][0]-1;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1];
      }
   }
}

class P extends Pieza {
   constructor(){
      super();
      this.coordenadas[0][0] = 0;
      this.coordenadas[0][1] = 4;
      this.coordenadas[1][0] = 1;
      this.coordenadas[1][1] = 4;
      this.coordenadas[2][0] = 2;
      this.coordenadas[2][1] = 4;
      this.coordenadas[3][0] = 3;
      this.coordenadas[3][1] = 4;
      this.nombre = "P";
      this.color = "orange";
   }

   rotar(){
      if(this.con==0){
         this.coordenadas[0][0] = this.coordenadas[2][0]-2;
         this.coordenadas[0][1] = this.coordenadas[2][1];
         this.coordenadas[1][0] = this.coordenadas[2][0]-1;
         this.coordenadas[1][1] = this.coordenadas[2][1];
         this.coordenadas[3][0] = this.coordenadas[2][0]+1;
         this.coordenadas[3][1] = this.coordenadas[2][1];
      }else if(this.con==1){
         this.coordenadas[0][0] = this.coordenadas[2][0];
         this.coordenadas[0][1] = this.coordenadas[2][1]-2;
         this.coordenadas[1][0] = this.coordenadas[2][0];
         this.coordenadas[1][1] = this.coordenadas[2][1]-1;
         this.coordenadas[3][0] = this.coordenadas[2][0];
         this.coordenadas[3][1] = this.coordenadas[2][1]+1;
      }
   }
}

export {Pieza, Z , Zi, L, Li, C, T, P};