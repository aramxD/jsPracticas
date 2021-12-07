// Funciones Helpers (utils)

const salariosPais = [{ "name": "Camila", "salary": 500 }, { "name": "Nath", "salary": 1500 }, { "name": "Luisa", "salary": 1800 }, { "name": "Laura", "salary": 1000 }, { "name": "Daniela", "salary": 2200 }, { "name": "Esperancita", "salary": 200 }, { "name": "Carla", "salary": 500 }, { "name": "Antonieta", "salary": 1500 }, { "name": "Alicia", "salary": 1300 }, { "name": "Ana", "salary": 2400 }, { "name": "Julia", "salary": 3400 }, { "name": "Rosa", "salary": 400 }, { "name": "Angélica", "salary": 400 }, { "name": "Tatiana", "salary": 400 }, { "name": "Lorena", "salary": 600 }, { "name": "Carolina", "salary": 1600 }, { "name": "Fernanda", "salary": 2600 }, { "name": "Nora", "salary": 1000 }, { "name": "Gisselle", "salary": 2000 }, { "name": "Bill Gates", "salary": 100 }, { "name": "Carla", "salary": 500 }, { "name": "Antonieta", "salary": 1500 }, { "name": "Alicia", "salary": 1300 }, { "name": "Ana", "salary": 2400 }, { "name": "Julia", "salary": 3400 }, { "name": "Rosa", "salary": 400 }, { "name": "Angélica", "salary": 400 }, { "name": "Tatiana", "salary": 400 }, { "name": "Lorena", "salary": 600 }, { "name": "Carolina", "salary": 1600 }, { "name": "Fernanda", "salary": 2600 }, { "name": "Nora", "salary": 1000 }, { "name": "Gisselle", "salary": 2000 }, { "name": "Bill Gates", "salary": 100 }, { "name": "Carla", "salary": 500 }, { "name": "Antonieta", "salary": 1500 }, { "name": "Alicia", "salary": 1300 }, { "name": "Ana", "salary": 2400 }, { "name": "Julia", "salary": 3400 }, { "name": "Rosa", "salary": 400 }, { "name": "Angélica", "salary": 400 }, { "name": "Tatiana", "salary": 400 }, { "name": "Lorena", "salary": 600 }, { "name": "Carolina", "salary": 1600 }, { "name": "Fernanda", "salary": 2600 }, { "name": "Nora", "salary": 1000 }, { "name": "Gisselle", "salary": 2000 }, { "name": "Bill Gates", "salary": 100 }, { "name": "Carla", "salary": 500 }, { "name": "Antonieta", "salary": 1500 }, { "name": "Alicia", "salary": 1300 }, { "name": "Ana", "salary": 2400 }, { "name": "Julia", "salary": 3400 }, { "name": "Rosa", "salary": 400 }, { "name": "Angélica", "salary": 400 }, { "name": "Tatiana", "salary": 400 }, { "name": "Lorena", "salary": 600 }, { "name": "Carolina", "salary": 1600 }, { "name": "Fernanda", "salary": 2600 }, { "name": "Nora", "salary": 1000 }, { "name": "Gisselle", "salary": 2000 }, { "name": "Bill Gates", "salary": 100 }, { "name": "Carla", "salary": 500 }, { "name": "Fernanda", "salary": 2600 }, { "name": "Nora", "salary": 1000 }, ];


const salariosOld = salariosPais.map(
    function(persona) {
        return persona.salary
    }
);

const salariosOldSorted = salariosOld.sort(
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

const medianaGeneralOld = medianaSalarios(salariosOldSorted)



// Mediana TOP10%
function salariosTOP10(lista) {
    var spliceStart = lista.length * .9 // .1 ....> 10%
    var spliceCount = lista.length - spliceStart
    console.log(spliceStart, spliceCount, )


    var salariosOldTOP10 = lista.splice(spliceStart, spliceCount)
        //console.log(salariosColTOP10)
    return salariosOldTOP10
}

var salariosOldTOP10 = salariosTOP10(salariosOldSorted)

var medianaTOP10old = medianaSalarios(salariosOldTOP10)


//Aqui se imprime el salario en HTML
let salario = document.getElementById('salarios')
salario.innerText = salariosOldSorted



//Aqui se imprime el resultados
let resultadoSalario1 = document.getElementById('resultadoSalario1')
resultadoSalario1.innerText = medianaGeneralOld

//Aqui se imprime el resultado top10
let resultadoSalario2 = document.getElementById('resultadoSalario2')
resultadoSalario2.innerText = medianaTOP10old



function agregarSalario(nombre, salario) {
    salariosPais.push({
        name: nombre,
        salary: parseInt(salario),
    });

    return salariosPais
}

function ejecutarSalarios() {
    inputNombre = document.getElementById('nombreSalario').value
    inputSalario = document.getElementById('ingresoSalario').value
    agregarSalario(inputNombre, inputSalario)
    const salariosLimpios = salariosPais.map(
        function(persona) {
            return persona.salary
        }
    );
    const salariosLimpiosSorted = salariosLimpios.sort(
        function(a, b) {
            return a - b
        }
    );


    //Aqui se imprime el resultados
    let resultadoSalario1 = document.getElementById('resultadoSalario1')
    resultadoSalario1.innerText = calcularPromedio(salariosLimpiosSorted)

    //Aqui se imprime el resultado top10
    let resultadoSalario2 = document.getElementById('resultadoSalario2')
    resultadoSalario2.innerText = medianaSalarios(salariosOldTOP10)

    //Aqui se imprime el salario en HTML
    let salario = document.getElementById('salarios')
    salario.innerText = salariosLimpiosSorted

    console.log(calcularPromedio(salariosLimpiosSorted))
}