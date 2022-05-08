// Entrega Eventos Simulador de reserva de hotel Korax (Se esta evaluando nombre final)

let costoPorDia = 2000
let tablaHab = document.getElementById("tablaHab")
let formulario = document.getElementById("divForm")
const datos = []

class Habitacion{
    constructor(id, dormitorio, banio, cocina, living, plus){
        this.id = id 
        this.dormitorio = dormitorio
        this.banio = banio
        this.cocina = cocina
        this.living = living
        this.plus = plus
    }
}

const hab1Op1Ob = new Habitacion(1, "1", "1", "Si", "Si", "Pileta")
const hab1Op2Ob = new Habitacion(2, "1", "1", "Si", "Si", "Balcón")

const hab2Op1Ob = new Habitacion(3, "2", "1", "Si", "Si", "Pileta")
const hab2Op2Ob = new Habitacion(4, "2", "1", "Si", "Si", "Balcón")

const hab3Op1Ob = new Habitacion(5, "3", "2", "Si", "Si", "Pileta")
const hab3Op2Ob = new Habitacion(6, "3", "2", "Si", "Si", "Balcón")

const hab4Op1Ob = new Habitacion(7, "4", "2", "Si", "Si", "Pileta")
const hab4Op2Ob = new Habitacion(8, "4", "2", "Si", "Si", "Balcón")


const habitaciones = [hab1Op1Ob, hab1Op2Ob, hab2Op1Ob, hab2Op2Ob, hab3Op1Ob, hab3Op2Ob, hab4Op1Ob, hab4Op2Ob]



formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    let nombre = document.getElementById(`nombreUs`).value
    let apellido = document.getElementById(`apelUs`).value
    let usuario = nombre + " " + apellido
    let fechaDeLlegada = document.getElementById(`fechLlUs`).value
    let fechaDeIda = document.getElementById(`fechIdaUs`).value
    let diasEstadia = document.getElementById(`diasEstUs`).value
    let cantPer = document.getElementById(`cantPerUs`).value

    let cliente = {usuario: usuario, fechaDeLlegada: fechaDeLlegada, fechaDeIda: fechaDeIda, diasEstadia: diasEstadia, cantPer: cantPer}

    datos.push(cliente)
    console.log(cliente)
    formulario.reset()
    
})

cantPerUs.addEventListener(`change`, () =>{
    
    let filtro = cantPerUs.value
    let filtroHab = habitaciones.filter( habitacion => habitacion.dormitorio.includes(filtro))

    filtroHab.forEach(habitacion => {
        tablaHab.innerHTML += `
    <div class="card margin" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">Habitacion ${habitacion.id}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${habitacion.dormitorio} Dormitorio/s  </li>
            <li class="list-group-item">${habitacion.banio} Baño/s</li>
            <li class="list-group-item">Cocina: ${habitacion.cocina}</li>
            <li class="list-group-item">Living: ${habitacion.living}</li>
            <li class="list-group-item">Pileta/Balcon: ${habitacion.plus}</li>
        </ul>
        
    </div>
    `
    })
}) 

// 
/*habitaciones.forEach(habArray =>{
    tablaHab.innerHTML += `
    <div class="card margin" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">Habitacion ${habArray.id}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${habArray.dormitorio} Dormitorio/s  </li>
            <li class="list-group-item">${habArray.banio} Baño/s</li>
            <li class="list-group-item">Cocina: ${habArray.cocina}</li>
            <li class="list-group-item">Living: ${habArray.living}</li>
            <li class="list-group-item">Pileta/Balcon: ${habArray.plus}</li>
        </ul>
        
    </div>
    `
})*/



















//////////////////////////////////////////////////////////////// Elementos para uso futuro

// Funcion para mostrarle el detallado de cada habitacion al usuario
/*function opcionHab(cantFam){
    
    if (cantFam == 1){
        alert("--Opcion 1--" + "\n" + hab1Op1.join("\n") + "\n" + "--Opcion 2--" + "\n" + hab1Op2.join("\n"))
        op = parseInt(prompt("Igrese habitacion que desee"))        
    }
    
    if (cantFam == 2){
        alert("--Opcion 1--" + "\n" + hab2Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab2Op2.join("\n"))
        op = parseInt(prompt("Igrese habitacion que desee"))
        
    }

    if (cantFam == 3){
        alert("--Opcion 1--" + "\n" + hab3Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab3Op2.join("\n"))
        op = parseInt(prompt("Igrese habitacion que desee"))
        
    }

    if (cantFam == 4){
        alert("--Opcion 1--" + "\n" + hab4Op1.join("\n") +  "\n" + "--Opcion 2--" + "\n" + hab4Op2.join("\n"))
        op = parseInt(prompt("Igrese habitacion que desee"))
        
    }
    
    // Hago entrar en boucle al usuario en caso de que coloque una opcion incorrecta
    while (op > 2 || op < 1){
        op = parseInt(prompt("Dato inválido igrese su opción nuevamente"))
    }

    return op
}*/

/*const datos = []
let nombre = document.getElementById(`nombreUs`)

let apellido = document.getElementById(`apelUs`)

let usuario = nombre + " " + apellido
datos.push(usuario)

let fechaDeLlegada = document.getElementById(`fechLlUs`)
datos.push(fechaDeLlegada)

let fechaDeIda = document.getElementById(`fechIdaUs`)
datos.push(fechaDeIda)

let diasEstadia = document.getElementById(`diasEstUs`)
datos.push(diasEstadia)

let cantPer = document.getElementById(`cantPerUs`)
datos.push(cantPer)*/


// Funcion para ofrecerle al usuario algun tipo de servicio del hotel si desea all inclusive no se le pregunta las otras opciones por redundancia
/*function servicioHotel(cantFam){
    servicio = 0

    allInclusive = prompt("¿Desea all inclusive?").toLowerCase()

    if (allInclusive == "si"){
        servicio = 1000 * cantFam
    }

    else if (allInclusive == "no"){
        
        comida = prompt("¿Desea incluir desayuno, almuerzo y cena?").toLowerCase()

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

// Funcion flecha para ahorrar linea
const precioHab = (cost, dia, per) => (precioHabi = cost * dia * per)

// Guardo la opcion del usuario despues de mostrarle el detalle de cada habitacion dependiendo de la cantidad de personas
let opcion = opcionHab(cantPer)

// Uso una Funcion superior para ahorrarme declarar las 2 variables anteriores
const precioFinal = (cantFam, cost, dia) => servicioHotel(cantFam) + precioHab(cost, dia, cantFam) 


let servi = servicioHotel(cantPer)
let precioHabitacion = precioHab(costoPorDia, diasEstadia, cantPer)

// Uso un objeto a modo de ticket para mostrarlo por consola
class Ticket{
    constructor(cliente, dias, cantFam, op){
        this.cliente = cliente
        this.dias = dias
        this.cantFam = cantFam
        this.op = op
    }
    // Dependiendo de la habitacion que elija muestro el detalle separado por coma usando el join
    opHab(op, cantFam){
        if (op == 1 && cantFam == 1){
            console.log(hab1Op1.join(", "))
        }
        
        else if (op == 2 && cantFam == 1){
            console.log(hab1Op2.join(", "))
        }
        
        if (op == 1 && cantFam == 2){
            console.log(hab2Op1.join(", "))
        }
        
        else if (op == 2 && cantFam == 2){
            console.log(hab2Op2.join(", "))
        }
        
        if (op == 1 && cantFam == 3){
            console.log(hab3Op1.join(", "))
        }
        
        else if (op == 2 && cantFam == 3){
            console.log(hab3Op2.join(", "))
        }
        
        if (op == 1 && cantFam == 4){
            console.log(hab4Op1.join(", "))
        }
        
        else if (op == 2 && cantFam == 4){
            console.log(hab4Op2.join(", "))
        }
    }
}

// Declaracion del objeto
const ticketCliente = new Ticket(usuario, diasEstadia, cantPer, opcion)


// Salida por consola con todos los datos que ingreso el usuario
console.log("Señor/a " + ticketCliente.cliente)
console.log("Usted ha elegido la siguiente habitación")

// No le hago un console.log al metodo porque ya tiene incorporado en el mismo
ticketCliente.opHab(opcion, cantPer)

// Salida por consola el detallado de lo que eligio el usuario
console.log("Costo final por su estadía de " + ticketCliente.dias + " días" + " para " + ticketCliente.cantFam + " persona/s" + " es de " + "$" + precioFinal(cantPer, costoPorDia, diasEstadia))
console.log("Gracias por elegirnos.")*/