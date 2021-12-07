// Funciones Helpers (utils)

const salariosPais = [500, 1500, 1800, 1000, 2200, 200, 500, 1500, 1300, 2400, 3400, 400, 400, 400, 600, 1600, 2600, 1000, 2000, 100, 500, 1500, 1300, 2400, 3400, 400, 400, 400, 600, 1600, 2600, 1000, 2000, 100, 500, 1500, 1300, 2400, 3400, 400, 400, 400, 600, 1600, 2600, 1000, 2000, 100, 500, 1500, 1300, 2400, 3400, 400, 400, 400, 600, 1600, 2600, 1000, 2000, 100, 500, 2600, 1000, 2000, 100, 500, 1500, 1300, 2400, 3400, 400, 400, 400, 600, 1600, 2600, 1000, 2000, 100]

const salariosCol = salariosPais.map(
    function(persona) {
        return persona.salary
    }
);

console.log(salariosCol)



const salariosColSorted = salariosCol.sort(
    function(a, b) {
        return a - b
    }
);

function esPar(numerito) {
    return (numerito % 2 == 0)
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    let promedio = sumaLista / lista.length
    return promedio

}


//Mediana General
function medianaSalarios(lista) {
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(mitadLista)) {
        let mitad1 = mitadLista
        let mitad2 = mitadLista - 1 //El numero es negativo por que inicias desde 0
        let mediana = calcularPromedio([lista[mitad1], lista[mitad2]])
        return mediana
    } else {
        mediana = lista[mitadLista]
        return mediana
    }

}

const medianaGeneralCol = medianaSalarios(salariosColSorted)



// Mediana TOP10%
const salariosTOP10Sorted = salariosColSorted
const spliceStart = salariosTOP10Sorted.length * .9 // .1 ....> 10%
const spliceCount = salariosTOP10Sorted.length - spliceStart
    //console.log(spliceStart, spliceCount, )


const salariosColTOP10 = salariosTOP10Sorted.splice(spliceStart, spliceCount)
    //console.log(salariosColTOP10)


const medianaTOP10Col = medianaSalarios(salariosColTOP10)




console.log(medianaGeneralCol, medianaTOP10Col)