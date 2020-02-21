var n=15;
function exp(n){
    var factorial=1;
    var suma=0;

    for(var i=1;i<=n;i++){
        factorial*=i;
        suma+= (1/factorial);
    }
    return suma+1;
}
console.log(exp(n));