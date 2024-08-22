//16 Menu de ejercicios. 
let opcion = prompt("Ingrese el numero del punto a evaluar del 1 al 15")
switch (opcion) {
    case "1":
        let edad = prompt("Ingrese su edad")
        if (edad >= 18) {
            console.log("Eres mayor de edad.")
        } else {
            console.log("Eres menor de edad")
        }
        break;
    case "2":
        let numero = prompt("Ingrese un número")
if(numero >= 0){
    console.log("El número es positivo")
}else{
    console.log("El número es negativo")
}
    break;
    case "3":
        if(numero %2 == 0){
            console.log("El número es par")
        }else{
            console.log("El número es impar")
        }
        break;
    case "4":
        //4 Calculo de descuento
let totalCompra = prompt("Ingrese el total de la compra")
let descuento = (totalCompra / 100) * 10
let totalConDescuento
if(totalCompra > 100){
    totalConDescuento = totalCompra - descuento
    console.log("Total con descuento es: "+ totalConDescuento)
}else{
    console.log("Total a pagar: "+ totalCompra)
}
        break;
    case "5":
        //5 Compara dos numeros
let numero2 = prompt("Ingrese el primer número a comparar")
let numero3 = prompt("Ingrese el segundo número a comparar")
if(numero2 == numero3){
    console.log("Ambos números son el mismo")
}else if(numero2 > numero3){
    console.log("El primer número es mayor que el segundo")
}else if(numero2 < numero3){
    console.log("El primer número es menor que el segundo")
}else{
    ("Operación invalida")
}
break;
case "6":
    //6 Clasificación por edad
let edadClasificacion = prompt("Ingrese su edad")
if(edadClasificacion < 12){
console.log("Eres un niño")
}else if(edadClasificacion >= 12 && edadClasificacion <= 17){
console.log("Eres un adolescente")
}else if(edadClasificacion >= 18 && edadClasificacion <= 64){
console.log("Eres un adulto")
}else if(edadClasificacion >= 12 && edadClasificacion <= 17){
console.log("Eres un adolescente")
}else if(edadClasificacion >= 65 && edadClasificacion <=100){
console.log("Eres un adulto mayor")
}else{
console.log("Datos invalidos")
}
break;
    case "7":
        //7 Clasificación de notas
let nota = prompt("Ingrese una nota entre 0 y 100")
if(nota > 100 || nota < 0 ){
    console.log("Datos invalidos")
}else if(nota >= 90){
    console.log("Excelente")
}else if(nota >= 70){
    console.log("Bueno")
}else if(nota >= 50){
    console.log("Eres Regular")
}else if(nota < 50){
    console.log("Insuficiente")
}else{
    console.log("Datos invalidos intente de nuevo")
}
break;
    case "8":
    //8 Elección de menú
let menu = prompt("Este es el menú presione el numero de lo que desea ordenar. 1- Pizza, 2- Hamburguesa, 3- Tacos.")
switch(menu){
    case "1":
        console.log("Has escogido Pizza")
        break
    case "2":
        console.log("Has escogido Hamburguesa")    
        break    
    case "3":
        console.log("Has escogido Tacos")    
        break    
    default:
        console.log("Opcion no valida")
        break;    
}
break;
    case "9": 
        //9 Tipo de triangulo
//Este me puso a pensar bastante en como darle la respuesta al triangulo isoceles
let ladoA = prompt("Ingrese el lado A del triangulo")
let ladoB = prompt("Ingrese el lado B del triangulo")
let ladoC = prompt("Ingrese el lado C del triangulo")
if(ladoA == ladoB && ladoA == ladoC){
    console.log("Es un triangulo equilatero")
}if(ladoA == ladoB && ladoB != ladoC || ladoA == ladoC && ladoB != ladoC){
    console.log("Es un triangulo isosceles")
}if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    console.log("Es un triangulo escaleno")
}else{
    console.log()
}
break;
    case "10":
        //10 Adivinar un numero
let numeroEscogido = 4
let adivinaElNumero = prompt("Adivina un número del 1 al 10")
if(adivinaElNumero > 10){
    console.log("Número invalido")
}else if(adivinaElNumero == numeroEscogido){
    console.log("Has acertado")
}else{
    console.log("Intenta de nuevo")
}
break;
    case "11":
        //11 Calculo del precio final
let precioBaseProducto = prompt("Ingrese el precio base del producto")
let porciento = (precioBaseProducto/100)
let totalAPagar
if(precioBaseProducto > 500){
    totalAPagar = precioBaseProducto - (porciento * 15)
    console.log("El valor total del producto con descuento es: " + totalAPagar )
}else if(precioBaseProducto > 300 || precioBaseProducto < 500){
    totalAPagar = precioBaseProducto - (porciento * 10)
    console.log("El valor total del producto con descuento es: " + totalAPagar )
}else if(precioBaseProducto <= 300 || precioBaseProducto > 0){
    totalAPagar = precioBaseProducto - (porciento * 5)
    console.log("El valor total del producto con descuento es: " + totalAPagar )
}
break;
    case "12":
        //12 Verifica el año 
//Ejercicio incompleto

let año = prompt("Ingrese un año en numeros")
let division = año / 4
if(division == año %2 ){
    console.log("El año es bisiesto")
}else{
    console.log("El año no es bisiesto")
}
break;


    default:
        break;
}
  
// 1) Comparar edad: 


// // //2 Numero positivo o negativo

// // //3 Número par o impar













// //13 Autenticacion de usuario
// let usuario = prompt("Ingrese su usuario")
// let contraseña = prompt("Ingrese su contraseña")
// if(usuario == "admin" && contraseña == "1234"){
//     console.log("Acceso concedido")
// }else{
//     console.log("Acceso denegado")
// }

//14 Determinar horario del día
// let hora = prompt("ingrese la hora. (Solo el numero de 0 a 23)")
// if(hora >= 6 && hora < 12){
//     console.log("Buenos días")
// }else if(hora >= 12 && hora < 18){
//     console.log("Buenas tardes")
// }else if(hora >= 18 || hora <= 24 && hora < 0 || hora < 6 ){
//     console.log("Buenas noches")
// }

// 15 Clasificación de masa corporal
// let peso = prompt("Ingrese su peso")
// let altura = prompt("Ingrese su altura")
// let imc = peso / (altura * 2)
// if(imc <= 18.5){
//     console.log(imc)
// }else if(imc > 18.5 && imc <= 24.9){
//     console.log("Peso normal")
// }else if(imc > 24.9 && imc <= 29.9){
//     console.log("sobre peso")
// }else{
    
// }