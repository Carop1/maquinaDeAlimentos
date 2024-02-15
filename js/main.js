let producto_ingresado = prompt("Ingrese el producto que desea comprar (A,B, o C)");
let suma = 0;
let moneda = 0;
let cambio = 0;
let costo1 = 270;
let costo2 = 340;
let costo3 = 390;
let div1 = 0;
let div2 = 0;
let div3 = 0;
let num = 0;
switch(producto_ingresado){
    case "A":
        while(suma<costo1){
        moneda = parseInt(prompt("Ingrese monedas:"));
        if(moneda == 100 || moneda == 50 || moneda == 10){
            suma += moneda;
            alert("van "+ suma);
        } else {
            alert("La moneda ingresada no es válida.");
            }
        }
        cambio = suma - costo1;
        alert("su cambio es: " + cambio);
        div1= Math.floor(cambio/100);
        div2= Math.floor(cambio/50);
        div3= Math.floor(cambio/10);
        while(num<div3){
            alert("La moneda de su cambio es: "+ 10);
            num = num + 1; 
        }
        break;
    case "B":
        while(suma<costo2){
            moneda = parseInt(prompt("Ingrese monedas:"));
            if(moneda == 100 || moneda == 50 || moneda == 10){
                suma += moneda;
                alert("van "+ suma);
            } else {
                alert("La moneda ingresada no es válida.");
                }
            }
            cambio = suma - costo2;
            alert("su cambio es: " + cambio);
            div1= Math.floor(cambio/100);
            div2= Math.floor(cambio/50);
            div3= Math.floor(cambio/10);
            if(div2>=1){
                alert("La moneda de su cambio es: "+ 50);
                alert("La moneda de su cambio es: "+ 10);
            } 
            else{
                alert("La moneda de su cambio es: "+10);
            }
        break;
    case "C":
        while(suma<costo3){
            moneda = parseInt(prompt("Ingrese monedas:"));
            if(moneda == 100 || moneda == 50 || moneda == 10){
                suma += moneda;
                alert("van "+ suma);
            } else {
                alert("La moneda ingresada no es válida.");
                }
            }
            cambio = suma - costo3;
            alert("su cambio es: " + cambio);
            div1= Math.floor(cambio/100);
            div2= Math.floor(cambio/50);
            div3= Math.floor(cambio/10);
            if(cambio==0){
                alert("No tiene cambio");
                
            } 
            else{
                alert("La moneda de su cambio es: "+10);
            }
        break;
    default:
        alert("Producto no valido");
}
