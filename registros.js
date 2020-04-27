var h=0;
var m=0;
var suma=0;
var suma2=0;
var mayor=0;

var alumnos= function(){
    var sexo;
    var nombre;
    var edad;
}

var total=25;
var vector=new Array(total);

for(i=0;i<total;i++){
    vector[i]=new alumnos();
}

for(i=0;i<total;i++){

    vector[i].edad = 16+Math.floor(Math.random()*4);
    if(vector[i].edad>mayor){
        mayor=vector[i].edad;
    }

    vector[i].sexo= Math.floor(Math.random()*2);
    if(vector[i].sexo==1){
        suma+=vector[i].edad;
        h++;
    }
    else{
        suma2+=vector[i].edad;
        m++;
    }

    vector[i].nombre=String.fromCharCode(65+Math.floor(Math.random()*25))+String.fromCharCode(65+Math.floor(Math.random()*24))+String.fromCharCode(65+Math.floor(Math.random()*25));
    


console.log("el promedio de la edad de mujeres es " + suma2/m);
console.log("el promedio de la edad de los hombres es " + suma/h);

console.log("el total de alumnos mujeres es "+ m);
console.log("el total de alumnos hombres es "+ h);

console.log("el alumno con mayor edad es "+ vector[i].nombre + mayor);

