var total = 0;
i = 0;
prendas = [];
/* Funciones de compras*/
function compra1(){
    total = total + 2000;
    alert("Su compra de Remera gris de algodón Talle M a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Remera gris de algodón Talle M");
    i++
    console.log(prendas, i)
}
function compra2(){
    total = total + 2500;
    alert("Su compra de Camisola marrón de larga Talle M a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Camisola marrón de larga Talle M");
    i++
    console.log(prendas)
}
function compra3(){
    total = total + 3250;
    alert("Su compra de Polera/Polerón rosa Talle L a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Polera/Polerón rosa Talle L");
    i++
    console.log(prendas)
}
function compra4(){
    total = total + 3300;
    alert("Su compra de Polera de fiesta verde Talle L a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Polera de fiesta verde Talle L");
    i++
}
function compra5(){
    total = total + 2100;
    alert("Su compra de Sueter cuello alto Talle S a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Sueter cuello alto Talle S");
    i++
}
function compra6(){
    total = total + 4000;
    alert("Su compra de Baggy Sueter blanco Talle XL a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Baggy Sueter blanco Talle XL");
    i++
}
function compra7(){
    total = total + 1500;
    alert("Su compra de Remera manga larga estampada Talle M a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Remera manga larga estampada Talle M");
    i++
}
function compra8(){
    total = total + 1750;
    alert("Su compra de Remera animal print Talle S a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Remera animal print Talle S");
    i++
}
function compra9(){
    total = total + 4000;
    alert("Su compra de Sueter rosa con detalles Talle S a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Sueter rosa con detalles Talle S");
    i++
}
function compra10(){
    total = total + 4500;
    alert("Su compra de Buzo estampado gris Talle S a sido realizada con éxito. Su total es $" + total + " . Contáctenos para su retiro/envío");
    prendas.unshift("Buzo estampado gris Talle S");
    i++
}

//Funciones de finalizar y reiniciar compra
function finalizo(){
    if (i == 0){
        alert("Usted no hizo ninguna compra, por favor realice alguna compra.")
    }
    else{
        nya = prompt("Ingrese nombre y apellido: ")
        while (nya == ""){
            nya = prompt("Ingrese nombre y apellido: ")
        }
        correo = prompt("Ingrese correo: ")
        while (correo == ""){
            correo = prompt("Ingrese correo: ")
        }
        alert("Su compra total fue de $" + total + ". Total de prendas: " + i + ". Listado de compras: " + prendas + ". Contáctenos para el envío. Gracias por su compra.");
        total = 0;
        i = 0;
        prendas = [];
    }

}

function reinicio(){
    if (i == 0){
        alert("Usted no hizo ninguna compra, no hay compra que reiniciar. Por favor realice alguna compra.")
    }
    else{
        prompt("Ingrese correo: ")
        alert("Su compra fue reiniciada");
        total = 0;
        i = 0;
        prendas = [];
    }

}

// Funcion de alerta contacto
function contacto(){
    alert("Su consulta fue enviada con éxito a nuestro correo. Será contestado en el menor tiempo posible. Gracias")
}