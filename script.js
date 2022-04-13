// Desafio complementario

//Pedir 2 numeros, sumarlos entre si y mostrar el resultado en consola

//Se le pide al usuario que cargue 2 numeros
let num1 = parseInt(prompt("Ingrese un número")) 
let num2 = parseInt(prompt("Ingrese otro"))

//Se los suma entre si
let suma = num1 + num2

//"Mientras" que num1 no valga 0 el ciclo sigue

while (num1 !==0){
    console.log(num1 + " + " + num2 + " = " + suma)
    num1 = parseInt(prompt("Ingrese nuevamente un numero"))
    num2 = parseInt(prompt("Ingrese otro"))
    suma = num1 + num2
}

//Le pido al usuario que ingrese sus 3 animales favoritos
/*let animal

for(let i = 1; i <= 3; i++){
    let animal = prompt("Ingrese su animal favorito")
    console.log("Animal " + i + " = " + animal)
}*/

