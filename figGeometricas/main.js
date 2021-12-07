// //Formula Cuadrado

// let ladoCuadrado = 5;
// let perimetroCuadrado = ladoCuadrado * 4
// let areaCuadrado = ladoCuadrado * ladoCuadrado

// console.log(`los lados del cuadrado miden ${ladoCuadrado}cm y el perimetro es de ${perimetroCuadrado}cm y el area es ${areaCuadrado}cm2`)

// //Formula Triangulo

// let lado1 = 4
// let lado2 = 4
// let lado3 = 8
// let alturaTriangulo = 5

// let perimetroTrinagulo = lado1 + lado2 + lado3
// let areaTriangulo = (lado1 * alturaTriangulo *.5)

// console.log(`El perimetro del triangulo es ${perimetroCuadrado}cm y el area es de ${areaTriangulo}`)

// //Formula de circulo

// let radioCirculo = 4
// let piCirculo = Math.PI

// let perimetroCirculo = radioCirculo * 2 * piCirculo
// let areaCirculo = radioCirculo * radioCirculo * piCirculo

// console.log(`pi es igual a = ${piCirculo}, el perimetro es de ${perimetroCirculo}cm y el area es de ${areaCirculo}cm2`)


// FUNCIONES 

//Cuadrado
function perimetroCuadrado(lado){
    return lado *4
}

function areaDeCuadrado(lado){
    let area = lado * lado
    return console.log("El area es "+area)
}

//Triangulo 
function perimetroTrinagulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}

function areaTriangulo(lado1,altura){
     return (lado1 * altura * .5)
}

 //Circulo

function perimetroCirculo(radio){
     return 2 * radio * Math.PI
}

function areaCirculo(radio){
    return radio * radio * Math.PI
}


// Aqui conectamos con el HTML


function calcularPerimetroCuadrado(){
    input = document.getElementById("ladoCuadrado").value 
    perimetro = perimetroCuadrado(input)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    input = document.getElementById("ladoCuadrado").value 
    area = input * input
}