//Promedio
function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    let promedio = sumaLista / lista.length
    return promedio
}


//Mediana
function calcularMediana(lista) {
    lista.sort(
        function(a, b) {
            return a - b
        }
    )
    let mitadLista = parseInt(lista.length / 2)
    let mediana
        //Con esta funcion determinarmos si un numero es par o impar
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    //Con esta funcion determinamos cual es la Mediana 
    if (esPar(mitadLista)) {
        mitad1 = mitadLista
        mitad2 = mitadLista - 1 //El numero es negativo por que inicias desde 0
        mediana = calcularPromedio([lista[mitad1], lista[mitad2]])
    } else {
        mediana = lista[mitadLista]
    }
    return mediana
}



//Moda
//let listaModa = [1, 1, 1, 2, 2, 1, 3, 2, 2, 1, 1, 2, 4, 6, 2, 4, 6, 4, 6, 4, 9, 8, 8, 7, 7, 8, 7, 8, 5, 4, 4, 5, 6, 5, 6, 6, 4, 4, 6, 4, 5, 6, 5]
let listaModaCount = {}

function encontrarModa(lista) {
    //Aqui agrupamos para elemento y lo contabilizamos, el resultado es un objeto llamado listaModaCount
    lista.map(
            function(elemento) {
                if (listaModaCount[elemento]) {
                    listaModaCount[elemento] += 1;
                } else {
                    listaModaCount[elemento] = 1
                }
            }
        )
        //Vamos a convertir el objeto listaModaCount en array
    const lista1Array = Object.entries(listaModaCount)
        //Vamos a ordenarlos de mayor a menor, El primer elemento de la lista sera la moda
    function ordenarListaModa(lista) {
        lista.sort(
            function(a, b) {
                return a[1] - b[1]
            }
        )
        return lista
    }
    moda = ordenarListaModa(lista1Array).pop()
    return moda
}


// Tomas lista de datos

function calcularEstadistica() {
    input = document.getElementById("listado").value



    var laListaArray = input.split(',').filter(Boolean)
    var ListaFinal = laListaArray.map(
        function(item) {
            return parseInt(item)
        }
    )
    console.log(typeof(laListaArray[1]))


    var SuperMediana = calcularMediana(ListaFinal)
    var SuperPromedio = calcularPromedio(ListaFinal)
    var SuperModa = encontrarModa(ListaFinal)


    console.log(SuperPromedio, SuperMediana, SuperModa)

    //Aqui se imprime el precio a pagar
    let resultado1 = document.getElementById('media')
    resultado1.innerText = SuperPromedio

    //Aqui se imprime el precio a pagar
    let resultado2 = document.getElementById('mediana')
    resultado2.innerText = SuperMediana

    //Aqui se imprime el precio a pagar
    let resultado3 = document.getElementById('moda')
    resultado3.innerText = SuperModa[0]

    //Cambiar el hidden
    document.getElementById('output').classList.remove('hidden')
}