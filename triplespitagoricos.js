var lado1=3;
var lado2=4;
var lado3=5;
var hipotenusa=0;
var pita=0;

for(var i=1;i<=166;i++){
    pita= (Math.pow(lado1,2)) + (Math.pow(lado2,2));
    hipotenusa= Math.pow(lado3,2);

    if(pita=hipotenusa){
        console.log(lado1, lado2, lado3, "son triples pitagoricos");
    }
    lado1+=3;
    lado2+=4;
    lado3+=5;
}
