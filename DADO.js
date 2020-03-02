function dado(){
    var x=0;
    x=Math.floor(Math.random()*6+1);
    return x;
}

function avance(){
    var tiro1 = dado();
    var suma=0;
 
    if(tiro1==1){
        suma+=3;
    }
    else if(tiro1==2 || tiro1==4 || tiro1==6){
        suma+=2;
    }
    else{
        suma+=1;
    }

    return suma;
}

function carrera(){
    var v1=0,v2=0;
    while(v1<100 && v2<100){
        v1+=avance();
        v2+=avance();
        console.log("valor de corredor 1:", v1);
        console.log("valor de corredor 2:", v2);
    }

    if(v1>=100 && v2>=100){
        console.log("Empate");
    }
    else if(v1>=100){
        console.log("El ganador es corredor 1: "+ v1);
    }
    else (v2>=100)
        console.log("El ganador es corredor 2: "+ v2);
    
}

carrera();