// Entregable N°2 Simulador de reserva de hotel Korax (Se esta evaluando nombre final)

// alert(Bienvenido a Hotel Korax por favor ingrese sus datos para poder registrarlo.)

const datos = []

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

let usuario = nombre + " " + apellido
datos.push(usuario)

let fechaDeLlegada = prompt("Ingrese fecha de llegada (formato dd/mm/aa)")
datos.push(fechaDeLlegada)

let fechaDeIda = prompt("Ingrese fecha de ida (formato dd/mm/aa)")
datos.push(fechaDeIda)

let diasEstadia = parseInt(prompt("Dias de estadia"))
datos.push(diasEstadia)

let cantPer = parseInt(prompt("Cantidad de personas"))
datos.push(cantPer)

const hab1Op1 = ["1 Dormitorio", "Baño", "Cocina", "Living", "Pileta"]
const hab1Op2 = ["1 Dormitorio", "Baño", "Cocina", "Living", "Balcón"]

const hab2Op1 = ["2 Dormitorios", "Baño", "Cocina", "Living", "Pileta"]
const hab2Op2 = ["2 Dormitorios", "Baño", "Cocina", "Living", "Balcón"]

const hab3Op1 = ["3 Dormitorios", "Baño", "Cocina", "Living", "Pileta"]
const hab3Op2 = ["3 Dormitorios", "Baño", "Cocina", "Living", "Balcón"]

const hab4Op1 = ["4 Dormitorios", "Baño", "Cocina", "Living", "Pileta"]
const hab4Op2 = ["4 Dormitorios", "Baño", "Cocina", "Living", "Balcón"]

let costoPorDia = 2000

let opcion = opcionHab(cantPer)

function opcionHab(cantFam){
    
    if (cantFam == 1){
        alert("--Opcion 1--" + "\n" + hab1Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab1Op2.join("\n"))
        op = prompt("Igrese habitacion que desee")
        
    }

    if (cantFam == 2){
        alert("--Opcion 1--" + "\n" + hab2Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab2Op2.join("\n"))
        op = prompt("Igrese habitacion que desee")
    }

    if (cantFam == 3){
        alert("--Opcion 1--" + "\n" + hab3Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab3Op2.join("\n"))
        op = prompt("Igrese habitacion que desee")
    }

    if (cantFam == 4){
        alert("--Opcion 1--" + "\n" + hab4Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab4Op2.join("\n"))
        op = prompt("Igrese habitacion que desee")
    }
    return op
}

let servi = servicioHotel(cantPer)

function servicioHotel(cantFam){
    servicio = 0

    allInclusive = prompt("¿Desea all inclusive?").toLowerCase()

    if (allInclusive == "si"){
        servicio = 1000 * cantFam
    }

    else if (allInclusive == "no"){
        
        comida = prompt("¿Desea incluir desayuno, almuerzo y cen?").toLowerCase()

        if (comida == "si"){
            servicio = 800 * cantFam
        }
        
        tour = prompt("¿Desea incluír tours?").toLowerCase()
        if (tour == "si"){
            servicio += 700 * cantFam
        }

        
        paseLibre = prompt("¿Desea pase libre eventos del hotel?").toLowerCase()
        if (paseLibre == "si"){
            servicio += 600 * cantFam
        }
    }
    return servicio
}

let precioHabitacion = precioHab(costoPorDia, diasEstadia, cantPer)

function precioHab(cost, dia, per){
    precioHabi = cost * dia * per
    return precioHabi
}

let precioFinal = servi + precioHabitacion

console.log("Señor/a " + datos[0])
console.log("Usted ha elegido la siguiente habitación")

if (opcion == 1 && cantPer == 1){
    console.log(hab1Op1.join(", "))
}

else if (opcion == 2 && cantPer == 1){
    console.log(hab1Op2.join(", "))
}

if (opcion == 1 && cantPer == 2){
    console.log(hab2Op1.join(", "))
}

else if (opcion == 2 && cantPer == 2){
    console.log(hab2Op2.join(", "))
}

if (opcion == 1 && cantPer == 3){
    console.log(hab3Op1.join(", "))
}

else if (opcion == 2 && cantPer == 3){
    console.log(hab3Op2.join(", "))
}

if (opcion == 1 && cantPer == 4){
    console.log(hab4Op1.join(", "))
}

else if (opcion == 2 && cantPer == 4){
    console.log(hab4Op2.join(", "))
}

console.log("Costo final por su estadía de " + datos[3] + " días" + " para " + datos[4] + " persona/s" + " es de " + "$" + precioFinal)
console.log("Gracias por elegirnos")



