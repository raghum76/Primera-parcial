function sinfinita(x,n){
    var suma=0;
    var num=0;
    var exponente=1;
    var den=1;
    for(i=1;i<=n;i++){
        num= (x-1)/x;
        suma+=(1/den) * Math.pow(num,exponente);
        den++;
        exponente++;
        }
    return suma;
}
console.log(sinfinita(3,40));