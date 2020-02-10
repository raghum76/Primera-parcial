var x= Math.floor(Math.random()*20+1);
var y= Math.floor(Math.random()*20+1);
var z= Math.floor(Math.random()*20+1);

console.log(x +" "+ y + " " + z)
if(x>y && x>z){
    console.log("es mayor"+" " + x);
}
else if(y>x && y>z){
    console.log("es mayor"+" " +y);
}
else{
    console.log("es mayor"+" " +z);
}