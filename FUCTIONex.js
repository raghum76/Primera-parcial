var n=4;

function expo(n){
    var numero=0;
    var factorial=1;
    var suma=0;
    for(i=1;i<=n;i++){
   factorial*=i;
    numero=Math.pow(n,i);
    suma+= (numero/factorial);
    }
    return suma + 1;
}
console.log(expo(n));