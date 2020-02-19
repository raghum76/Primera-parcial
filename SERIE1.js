var i;
var n=500000;
var j=1;

 function serie1(n){
var suma=0;
var ser=0;
var signo=1;
var j=1;
    for(var i=0;i<=n;i++){

        ser=(4.0/j) * (signo);
        j+=2;
        suma+=ser;
        signo*=-1;
    }
    return suma;
}
console.log(serie1(n));