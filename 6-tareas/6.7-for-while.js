/*Resolver con while y con for los siguientes problemas

1. Del arreglo de studiantes imprimir el nombre de la calle de c/u
2. Calcular el factorial de un numero ingresado por el usuario
3. Fibonacci
    Imprimir hasta el 100 */

const  students = [
    { name: 'jose', address: { street: '5 febrero' } },
    { name: 'dany', address: { street: 'miguel hidalgo' } },
    { name: 'dolores', address: { street: 'lago del rio' } },
    ]


// EJERCICIO UNO

/* console.log('Usando el metodo While')

let index = 0
while (index < students.length) {
    console.log(index)
    console.log(students[index].address.street)
    index++
}

console.log('Usando el metodo for')

for (let j = 0; j < students.length; j++) {
    console.log(j)
    console.log(students[j].address.street)
    
} 

let numero = 5
let factorial = 1
let contador = 1

while (contador <=  numero) {
    factorial *= contador
    contador++
}

console.log(`El factorial de ${numero} es ${factorial} (while)`)

factorial = 1

for (let contador = 1; contador <= numero; contador++) {
    factorial *= contador
}

console.log(`El factorial de ${numero} es ${factorial} (for)`) */

let a = 0;
let b = 1;
let index = 2

while (index < 100) {
    const temp = a + b
    a = b
    b = temp
    console.log(a, index)
    index++
}


/* let c = 0
let d = 0

for (let index = 2; index < 100; index++) {
    const temp2 = c + d
    c = d
    d = temp2

    console.log(a, index)

} */