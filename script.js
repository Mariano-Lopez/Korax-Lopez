// Entrega Eventos Simulador de reserva de hotel Korax (Se esta evaluando nombre final)

let costoPorDia = 2000

let tablaHab = document.getElementById("tablaHab")

let formUsuario = document.getElementById("divForm")

let formDatos = document.getElementById('formDatos')

let datos = []

let datosAcompaniante = []

let datosJson = document.getElementById('datosJson')

let paquetesCliente = document.getElementById('paquetesCliente')



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

class Adicional {
    constructor(id, tit, item1, item2, item3){
        this.id = id
        this.tit = tit
        this.item1 = item1
        this.item2 = item2
        this.item3 = item3
    }
}

const adicComida= new Adicional(1, "Incluir desayuno, merienda y cena", "Desayuno", "Merienda", "Cena")

const adicTour = new Adicional(2,"Tours por cordoba","Salida a Carlos Paz", "Trekking Cerro Uritorco", "Recorrido mirador Icho Cruz")

const adicEvento = new Adicional(3, "Eventos del hotel", "Juegos para grandes y chicos", "Pase libre al salon de eventos", "Uso parque interno del hotel" )

const adicionales = [adicComida, adicTour, adicEvento]



mostrarHabs(habitaciones)

let habitacionElegida = JSON.parse(localStorage.getItem("habitacionElegida")) ?? [] 



formUsuario.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    let nombre = document.getElementById(`nombreUs`).value

    let apellido = document.getElementById(`apelUs`).value

    let usuario = nombre + " " + apellido

    let fechaDeLlegada = document.getElementById(`fechLlUs`).value

    let fechaDeIda = document.getElementById(`fechIdaUs`).value

    let diasEstadia = document.getElementById(`diasEstUs`).value

    let cantPer = document.getElementById(`cantPerUs`).value

    let cliente = {usuario: usuario, fechaDeLlegada: fechaDeLlegada, fechaDeIda: fechaDeIda, diasEstadia: diasEstadia, cantPer: cantPer}

    

    console.log(cliente)

    if(1 >= cantPer || cantPer < 5){
        datosFamlia(cantPer)
        adicionalCliente(cantPer,costoPorDia, cliente)
        
    }
    else{
        errorCarga()
        formDatos.innerHTML = ''
        paquetesCliente.innerHTML = ''
    }
    

    /* Podrias poner esto en una funcion*/
    let botonAdicionalSi = document.getElementById('adicionalSi')

    botonAdicionalSi.addEventListener('click', ()=>{
        cliente = {
            ...cliente,
            adicional: "All inclusive"
        }
        datos.push(cliente)
        localStorage.setItem("Cliente", JSON.stringify(datos))
        
        console.log(cliente)
    })
    
    let botonAdicionalNo = document.getElementById('adicionalNo')


    botonAdicionalNo.addEventListener('click', ()=>{
        adicionalesCliente(cantPer,cliente,adicionales)
    })

    
    //////////////////////////////////////////////////////
    
})



formDatos.addEventListener('click', (e) =>{
    e.preventDefault()
})







function mostrarHabs(habitaciones){
    /*NO TOCAR TAMPOCO */
    tablaHab.innerHTML+='<h2 class=" text-center">Habitaciones recomendadas</h2> '

    habitaciones.forEach(habitacion => {
        tablaHab.innerHTML += `
        
            <div class="card margin bg-dark border border-white" style="width: 18rem; id= habitacion${habitacion.id}">
                <div class="card-body">
                    <h3 class="card-title">Habitacion ${habitacion.id}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-dark colorTextCard">${habitacion.dormitorio} Cama/s  </li>
                    <li class="list-group-item bg-dark colorTextCard">${habitacion.banio} Baño/s</li>
                    <li class="list-group-item bg-dark colorTextCard">Cocina: ${habitacion.cocina}</li>
                    <li class="list-group-item bg-dark colorTextCard">Living: ${habitacion.living}</li>
                    <li class="list-group-item bg-dark colorTextCard">Pileta/Balcon: ${habitacion.plus}</li>
                </ul>

                <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="boton${habitacion.id}">Reservar</button>
                </div>
                
            </div>
        
    `
    
    })
}



function errorCarga(){
    tablaHab.innerHTML = `
        <div class="card margin bg-dark colorTextCard" style="width: 40rem;">
            <div class="card-body">
                <h3 class="card-title">No disponemos habitacion para esa cantidad de personas (valor incorrecto)</h3>
            </div>
        </div>
        `
    
}


function datosFamlia(cantPer){
    
    formDatos.innerHTML = " "

    if (cantPer < 2){
        formDatos.innerHTML = " "
    }
    else if (cantPer == 2){
        formDatos.innerHTML += `<span class="tituloDatosFamiliar">Datos de acompañante</span>`}
    
    else{
        formDatos.innerHTML += `<span class="tituloDatosFamiliar">Datos de acompañantes</span>`

    }

    
    for (let i=1; i<cantPer; i++){
        
        formDatos.innerHTML += `

        <div class="row" id="idFam${i}">    
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label" required>Nombre</label>
                <input type="text" class="form-control" id="nombreFam${i}">
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="apellFam${i}">
            </div>

            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Edad</label>
                <input type="text" class="form-control" id="edadFam${i}">
            </div>
        </div>

        <div class= "d-flex justify-content-center col-md-12">
        <button class="btn btn-dark prueba1" type="submit" id= "btnCarga${i}">Cargar</button>
        </div>
        `
        
        

        
    }

    for (let i=1; i<cantPer; i++){
        btnCarga = document.getElementById(`btnCarga${i}`)
        
    btnCarga.addEventListener(`click`, ()=>{

        let idFam = i 

        let nomAcom = document.getElementById(`nombreFam${i}`).value

        let apellAcom = document.getElementById(`apellFam${i}`).value

        let edadAcom = document.getElementById(`edadFam${i}`).value

        let datosPersona = {idFam: idFam, nomAcomp: nomAcom, apellAcom: apellAcom, edadAcom: edadAcom}

        datosAcompaniante.push(datosPersona)
        Toastify({
            text: `Datos de ${nomAcom} cargados correctamente`,
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                color:"white",
                background: "black",
            },
            onClick: function(){}
        }).showToast();
        console.log(datosAcompaniante)
    })

    
}
    

}

cantPerUs.addEventListener(`change`, () =>{

    let filtro = cantPerUs.value

    let filtroHab = habitaciones.filter( habitacion => habitacion.dormitorio.includes(filtro))

    tablaHab.innerHTML = ' '

    
    if ( 1 <= filtro && filtro <= 4){
        mostrarHabs(filtroHab)
        
        }
    
    else{
        errorCarga()
    }

    // En caso de que elija habitacion con filtro
    filtroHab.forEach(habitacion =>{
        document.getElementById(`boton${habitacion.id}`).addEventListener("click", ()=>{
            
            habitacionElegida.push(habitacion)
            localStorage.setItem("habitacionElegida", JSON.stringify(habitacionElegida))
            datos.push(habitacion)
            console.log(datos)
            })
        })


    

}) 

// En caso de que elija habitacion sin filtro
habitaciones.forEach(habitacion =>{
    document.getElementById(`boton${habitacion.id}`).addEventListener("click", ()=>{
        habitacionElegida.push(habitacion)
        localStorage.setItem("habitacionElegida", JSON.stringify(habitacionElegida))
        datos.push(habitacion)
        console.log(datos)
        
    })

})

/*<img src="..." class="card-img-top" alt="...">*/ 

function adicionalCliente(cantP,cost,cliente){
    /* NO TOCAR */
    if(cantP <= 0 || cantP >5){
        paquetesCliente.innerHTML =''
    }
    
    else{
        paquetesCliente.innerHTML =`
            <div class="separador d-flex justify-content-center">
                <div class="separador card margin bg-dark border border-white " style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">All inclusive</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark colorTextCard">Incluye desayuno, almuerzo y cena</li>
                        <li class="list-group-item bg-dark colorTextCard">Tours por córdoba</li>
                        <li class="list-group-item bg-dark colorTextCard">Pase libre a eventos del hotel</li>
                    </ul>
                    
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="adicionalSi">Deseo agregar paquete</button>
                    </div>
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="adicionalNo">No, gracias</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span>Costo adicional $ ${cantP*cost}</span>
                    </div>
                </div>
            </div>
        
        `
    }
    
}




/* Sacaste como argumento a cliente */
function adicionalesCliente(cantP,cliente,adic){
        paquetesCliente.innerHTML = ''
        adic.forEach(adi =>{
            paquetesCliente.innerHTML+=`
            
            <div class="separador card margin bg-dark border border-white " style="width: 18rem;">
                
                <div class="card-body">
                    <h5 class="card-title">${adi.tit}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-dark colorTextCard">${adi.item1}</li>
                    <li class="list-group-item bg-dark colorTextCard">${adi.item2}</li>
                    <li class="list-group-item bg-dark colorTextCard">${adi.item3}</li>
                </ul>
                
                <div class= "btn btn-dark" >
                    <button class="btn btn-primary" type="submit" id ="${adi.id}Si">Deseo agregar paquete</button>
                </div>
                <div class= "btn btn-dark" >
                    <button class="btn btn-primary" type="submit" id ="${adi.id}No">No, gracias</button>
                </div>
                <div class="d-flex justify-content-center">
                    <span>Costo adicional $ ${cantP*600}</span>
                </div>
            </div>
        
            
            `
        })

        let boton1Si = document.getElementById(`1Si`)
        let boton2Si = document.getElementById(`2Si`)
        let boton3Si = document.getElementById(`3Si`)

        let boton1No = document.getElementById(`1No`)
        let boton2No = document.getElementById(`2No`)
        let boton3No = document.getElementById(`3No`)

        boton1Si.addEventListener('click', ()=>{})
        boton2Si.addEventListener('click', ()=>{})
        boton3Si.addEventListener('click', ()=>{})

        boton1No.addEventListener('click', ()=>{})
        boton2No.addEventListener('click', ()=>{})
        boton3No.addEventListener('click', ()=>{})








        
}


























fetch("clima.json")
.then(response => response.json())
.then((data)=>{
    data.forEach((element) =>{
        datosJson.innerHTML = `
        <span>${element.temp}°</span>
        <span class="espacioClima">${element.desc}</span>
        <img src="${element.img}" class="imgNube espacioClima">
        <span class="espacioClima">${element.ubi}</span>
        
        `
    })
})


setInterval(()=>{
    fetch("clima.json")
    .then(response => response.json())
    .then((data)=>{
        data.forEach((element) =>{
            datosJson.innerHTML = `
            <span>${element.temp}°</span>
            <span class="espacioClima">${element.desc}</span>
            <img src="${element.img}" class="imgNube espacioClima">
            <span class="espacioClima">${element.ubi}</span>
            
            `
        })
    })
}, 3000)






//////////////////////////////////////////////////////////////// Elementos para uso futuro
    /*for(let i =1; i <= adic.length ; i++){
            let botonSi = document.getElementById(`${i}Si`)

            botonSi.addEventListener('click', ()=>{
                cliente = {
                    ...cliente,
                    adicionalComida: true
                }
                datos.push(cliente)
                localStorage.setItem("Cliente", JSON.stringify(datos))
                
                console.log(cliente)
            })
        }*/

        /*let botonComidaSi = document.getElementById('comidaSi')

        let botonTourSi = document.getElementById('tourSi')

        let botonEventoSi = document.getElementById('eventoSi')*/



    /*botonComidaSi.addEventListener('click', ()=>{
        cliente = {
            ...cliente,
            adicionalComida: true
        }
        datos.push(cliente)
        localStorage.setItem("Cliente", JSON.stringify(datos))
        
        console.log(cliente)
    })

    

    botonTourSi.addEventListener('click', ()=>{
        cliente = {
            ...cliente,
            adicionalTour: true
        }
        datos.push(cliente)
        localStorage.setItem("Cliente", JSON.stringify(datos))
        
        console.log(cliente)
    })

    

    botonEventoSi.addEventListener('click', ()=>{
        cliente = {
            ...cliente,
            adicionalEvento: true
        }
        datos.push(cliente)
        localStorage.setItem("Cliente", JSON.stringify(datos))
        
        console.log(cliente)
    })*/


/*paquetesCliente.innerHTML=`
        <div class="separador d-flex justify-content-center">
                <div class="separador card margin bg-dark border border-white " style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Incluir Desayuno, Almuerzo y Cena</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark colorTextCard">Desayuno</li>
                        <li class="list-group-item bg-dark colorTextCard">Almuerzo</li>
                        <li class="list-group-item bg-dark colorTextCard">Cena</li>
                    </ul>
                    
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="comidaSi">Deseo agregar paquete</button>
                    </div>
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="comidaNo">No, gracias</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span>Costo adicional $ ${cantP*600}</span>
                    </div>
                </div>
        </div>

        <div class="separador d-flex justify-content-center">
                <div class="separador card margin bg-dark border border-white " style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Tours por Córdoba</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark colorTextCard">Salida a Carlos Paz</li>
                        <li class="list-group-item bg-dark colorTextCard">Trekking Cerro Uritorco</li>
                        <li class="list-group-item bg-dark colorTextCard">Recorrido Mirador Icho Cruz</li>
                    </ul>
                    
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="tourSi">Deseo agregar paquete</button>
                    </div>
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="tourNo">No, gracias</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span>Costo adicional $ ${cantP*700}</span>
                    </div>
                </div>
        </div>

        <div class="separador d-flex justify-content-center">
                <div class="separador card margin bg-dark border border-white " style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Eventos de Hotel</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark colorTextCard">Juegos para grandes y chicos</li>
                        <li class="list-group-item bg-dark colorTextCard">Pase libre al salon de eventos</li>
                        <li class="list-group-item bg-dark colorTextCard">Uso de parque interno del hotel</li>
                    </ul>
                    
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="eventoSi">Deseo agregar paquete</button>
                    </div>
                    <div class= "btn btn-dark" >
                        <button class="btn btn-primary" type="submit" id ="eventoNo">No, gracias</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span>Costo adicional $ ${cantP*800}</span>
                    </div>
                </div>
        </div>


        `*/


/*fetch("https://api.openweathermap.org/data/3.0/onecall?lat=-64.1855922931011&lon=-31.41103239109793&exclude=current,minutely,hourly,alerts&appid=dc68c447dad3dc59fc52561a7bf67058&units=standard")
        .then(response => response.json())
        .then(response => console.log(response))
        .then(({}))
        .catch(err => console.error(err));*/

/*setInterval(()=>{
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-64.18524897037507&lat=-31.41114226939232&lang=es', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(({}))
        .catch(err => console.error(err));
}, )

https://api.openweathermap.org/data/3.0/onecall?lat=-64.1855922931011&lon=-31.41103239109793&exclude=current,minutely,hourly,alerts&appid=dc68c447dad3dc59fc52561a7bf67058&units=standard*/

/*document.getElementById(`botonHab`).addEventListener("click", ()=>{
    let habParse = JSON.parse(localStorage.getItem("habitacionElegida")) 
    console.log(habParse)
})*/


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