var movies = [
    { name: 'harry potter', director: 'juanito', actors: ['daniel', 'emma'] },
    { name: 'avengers', director: 'juanito2', actors: [ { name: 'chris', age: 40 }, { name: 'robert', age: 55 } ] },
   ];

// imprimir juanito2
// imprimir chris
// imprimir la edad de robert
// imprimir el primer actor de harry potter
// imprimir el quinto actor de harry potter xxx
// crear una pelicula
// imprimir la clasificacion de la pelicula avengers xxx

console.log(movies[1].director)
console.log(movies[1].actors[0].name)
console.log(movies[1].actors[1].age)
console.log(movies[0].actors[0])
console.log(movies[0].actors[4]) // Arroja undefined
movies.push({name: 'Eternal sunshine of the spotless mind', director: 'Michael Gondry', actors: ['Jim', 'Kate']})
console.log(movies) // Se agrega impresion en consola para que se vea el nuevo array
console.log(movies[1].rated) // Arroja undefined