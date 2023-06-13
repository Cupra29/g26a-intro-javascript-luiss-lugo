/* 1. Representar con if/else un algoritmo de compra de medicamentos cuando estoy o no esoy enfermo.
si tienen dinero 
si pueden ir ustedes mismos o no  
el medio de transporte 

Mostrar un mensaje del resultado de condicion

2. Un switch que cada que ingrese un numero les diga a que mes pertenece. */

// EJERCICIO UNO.

let isSick = true
let hasMoney = false
let byMySelf = true
let hasCar = true

if (isSick && hasMoney && byMySelf && hasCar) {
    console.log('Ve por medicamento!')
} else if (isSick && hasMoney && hasCar && !byMySelf) {
    console.log('Pidele a alguien que vaya a comprar el medicamento en tu auto')
} else if ((isSick && hasMoney && byMySelf) && !hasCar) {
    console.log('Pide paro a alguien con auto')
} else if ((isSick && byMySelf && hasCar) && !hasMoney) {
    console.log('Pide prestado a alguien para el medicamento')
} else {
    console.log('De que te preocupas si no estas enfermo')
}

// EJERCICIO DOS.

let number = 1

switch (number) {
    case 1:
        console.log('Enero')
        break;
    case 2:
        console.log('Febrero')
        break;
    case 3:
        console.log('Marzo')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Mayo')
        break;
    case 6:
        console.log('Junio')
        break;
    case 7:
        console.log('Julio')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Septiembre')
        break;
    case 10:
        console.log('Octubre')
        break;
    case 11:
        console.log('Noviembre')
        break;
    case 12:
        console.log('Diciembre')
        break;
    default:
        console.log('Ingresa un numero del 1 al 12 por favor.')
        break;
}