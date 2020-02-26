
function factorial(numero){
    var factorial=1;
    for (var i=1;i<=numero;i++)
        factorial*=i;
    return factorial;
}
function fcos(x,n){
    var num=0;
    var signo=-1;
    var suma=1;
    var rfac;
    var potencia=2;
    for(i=0;i<=n;i++){
        rfac=factorial(potencia);
        den=Math.pow(x,potencia);
        suma+=(den/rfac) * signo;
        signo*=-1;
        potencia+=2;
    }
    return suma;
}

console.log(fcos(3,30));