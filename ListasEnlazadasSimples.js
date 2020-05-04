class Alumno{
    constructor(){
      this.nombre="";
      this.numControl=0;
      this.sexo=0;
      this.siguiente=null; 
    }
    mostrar(){
      return "Nombre: " + this.nombre + " Edad: " + 
      this.edad + "Con numero de control: " + this.numControl;
    }
  
  class ListaSimple{
    constructor(){
      this.head=null;
    }
    agregar(nuevo){
      if(this.head===null)
        this.head=nuevo;
      else{
        let temporal=this.head;
        while(temporal.siguiente!=null)
          temporal=temporal.siguiente;
        temporal.siguiente=nuevo;
      }
    }
   
    mostrar(){
      let resultado="";
      let temp=this.head;
      while(temp!=null){
        resultado += temp.mostrar() + " , ";
        temp=temp.siguiente;
      }
      return resultado;
    }
    cosole.log(resultado);
  

