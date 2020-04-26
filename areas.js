class Cuadrado{
    constructor(base){
        this.base=base;
    }
        area(){
    return this.base*this.base;
    }
}

const bt=document.getElementById("btCuadrado");

bt.addEventListener('click' , ()=>{
    let base=document.getElementById("base").value;

    base=parseInt(base);

    let cuad1=new Cuadrado (base);

    let divRes=document.getElementById("resultados");

    divRes.innerHTML="<p>Cuadrado con base " + cuad1.base + "<p/>";
    
    divRes.innerHTML+="<p>con un area de " + cuad1.area() + "</p>";

});

class Rectangulo{

    constructor(base,altura){
        this.base=base;
        this.altura=altura;

    }
    area(){
        return this.base*this.altura;
    }
}
const btn=document.getElementById("btnRectangulo");

btn.addEventListener('click' , ()=>{
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);

    let rect1=new Rectangulo (base,altura);

    let divRes=document.getElementById("resultados");

    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "<p/>";
    
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";

});

class Triangulo{

    constructor(base,altura){
        this.base=base;
        this.altura=base;

    }
    area(){
        return  this.base*this.altura/2;
    }
}
const tn=document.getElementById("tnTriangulo");

tn.addEventListener('click' , ()=>{
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);

    let tri1=new Triangulo (base,altura);

    let divRes=document.getElementById("resultados");

    divRes.innerHTML="<p>Triangulo con base " + tri1.base + " y altura " + tri1.altura + "<p/>";
    
    divRes.innerHTML+="<p>con un area de " + tri1.area() + "</p>";

});