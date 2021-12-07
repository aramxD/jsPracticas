// PRECIOS Y DESCUENTOS ESTATICO

// let precioOriginal = 100;
// let descuento = 30;
// let porcentajePagar = 100 - descuento

//     let descuento = precioOriginal * descuento *.1
//     let precioConDescuento = precioOriginal * porcentajePagar *.1


// FUNCION






function calcularPrecioConDescuento(precio, descuento) {
    let porcentajePagar = 100 - descuento

    let totalDescuento = precio * descuento * .01
    let precioConDescuento = (precio * porcentajePagar * 0.01)
    resultado = { totalDescuento, precioConDescuento }
    return resultado
}
let prueba = calcularPrecioConDescuento(10, 30)
console.log(resultado.totalDescuento + "-" + resultado.precioConDescuento)


function onClickCalcularPrecioConDescuento() {
    precioInput = document.getElementById('precio').value
    descuentoInput = document.getElementById('descuento').value

    precioConDescuento = calcularPrecioConDescuento(precioInput, descuentoInput)

    //Aqui se imprime el precio a pagar
    let resultadoH3 = document.getElementById('precioDescuento')
    resultadoH3.innerText = "$" + precioConDescuento.precioConDescuento

    //Aqui se imprime el ahorro
    let AhorroH5 = document.getElementById('ahorroTotal')
    AhorroH5.innerText = `Ahorraste $${precioConDescuento.totalDescuento}`

    //Cambiar el hidden
    document.getElementById('output').classList.remove('hidden')


}