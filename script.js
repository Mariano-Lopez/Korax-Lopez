// Desafio complementario

//Pedir 2 numeros, sumarlos entre si, luego pedir otro numero mas para sumarselo al resultado anterior (corta con 0).

//Se le pide al usuario que cargue 2 numeros
/*let num1 = parseInt(prompt("Ingrese un número")) 
let num2 = parseInt(prompt("Ingrese otro"))

//Se los suma entre si
let suma = num1 + num2

//Se muestra el resultado
console.log(num1 + " + " + num2 + " = " + suma)

//"Mientras" que num1 no valga 0 el ciclo sigue
while (num1 !==0){
    //Pido nuevamente un numero para sumarselo al resultado anterior
    num1 = parseInt(prompt("Ingrese nuevamente un numero"))
    //Suma
    sumaSeguida = suma + num1
    console.log(suma + " + " + num1 + " = " + sumaSeguida)
    //Suma va a valer sumaSeguida para que el valor del resultado anterior no se pierda
    suma = sumaSeguida

}*/

//Le pido al usuario que ingrese sus 3 animales favoritos y solo 3 para que el ciclo corte.


/*let animal

console.log("Sus animales favoritos son:")

for(let i = 1; i < 4; i++){
    
    let animal = prompt("Ingrese su animal favorito")
    console.log("Animal " + i + " = " + animal)
}*/


// Entregable N°1 Calcular promedio final de 3 alumnos ingresados y mostrar por consola si estan Aprobados o no.

//Mensaje al usuario
alert("Porfavor ingrese los 3 alumnos a clasificar")

//Declaro funcion para que me devuelva el resultado de la regularidad del alumno
function estadoFinal(calif){
    if (calif >= 6){
        estado = "Aprobado"
    }
    else{
        estado = "Desaprobado"
    }

    return estado
}

//Funcion para calcular el promedio
function prom(calif1, calif2, calif3){
    
    promedio = (calif1 + calif2 + calif3) / 3

    return promedio
}

//Como son unicamente 3 alumnos uso el for
for (let i = 1; i < 4; i++){
    
    let alumno = prompt("Ingrese nombre del alumno")

    //Si el usuario ingresa un numero menor a 0 o mayor a 10 entra en un bucle hasta que no ingrese correctamente la nota
    //Suponemos que las notas son enteras
    let nota1 = parseInt(prompt("Ingrese nota del alumno"))
    while (nota1 < 1 || nota1 > 10){

        nota1 = parseInt(prompt("Nota incorrecta ingrese nuevamente"))
    }
    let nota2 = parseInt(prompt("Ingrese nota del alumno"))
    while (nota2 < 1 || nota2 > 10){

        nota2 = parseInt(prompt("Nota incorrecta ingrese nuevamente"))
    }
    let nota3 = parseInt(prompt("Ingrese nota del alumno"))
    while (nota3 < 1 || nota3 > 10){

        nota3 = parseInt(prompt("Nota incorrecta ingrese nuevamente"))
    }

    //Llamo a las funciones y guardo su retorno en una variable
    let nota = prom(nota1, nota2, nota3)

    //Llamo a las funciones y guardo su retorno en una variable
    let regularidad = estadoFinal(nota)

    //Muestro por consola el resultado del programa
    console.log("Alumno " + alumno + " está " + regularidad + " su promedio es " + nota)

}












