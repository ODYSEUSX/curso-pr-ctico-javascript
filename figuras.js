console.group("CUADRADO")
const ladocuadrado = 5
console.log(`Los lados del cuadrado miden : ` + ladocuadrado*4)
 function Areacuadrado(lado) { 
   let area= lado*lado
  return area;
}
console.log(areacuadrado(17));

function Perimetrocuadrado(lado){ 
     let perimetro= 4*lado
   return  perimetro ;
  }


  

 console.group("TRIANGULOS")
 
const lado1triangulo= 6
const lado2triangulo= 6
const basetriangulo= 4
const alturatriangulo=5.5

const perimetrotriangulo = basetriangulo + lado1triangulo + lado2triangulo

const areatriangulo= basetriangulo*alturatriangulo/2


console.log(`El perimetro del triangulo es :` + perimetrotriangulo)
console.log(`El area del triangulo es :` + areatriangulo)
console.log(`Los lados del triangulo son :` + lado1triangulo  + "," +lado2triangulo + "," + basetriangulo)

console.groupEnd();

console.group("CIRCULO")

const radiocirculo=4 

//llamando a una función dentro de una función
function  diámetrocirculo(radio){ 
  return diámetro=2*radio ;
} 

//PI
const PI = Math.PI

function perimetrocirculo(radio){ 
  let diametro= diámetrocirculo(radio)
  return (`El perimetro del circulo es:` + PI*diametro);
}
console.log(perimetrocirculo(5));
//-----------------------------------------------------

const areacirculo= PI*radiocirculo*radiocirculo

console.log(`El radio del circulo es:`+ radiocirculo)
console.log(`el diametro del circulo es :` + diámetrocirculo)
console.log (`el area del circulo es :`+ areacirculo)
console.log(`El perimetro del circulo es :` + perimetrocirculo)
console.log(`El número PI ES :`+ PI)
// FUNCIONES PARA CALCULAR AREA Y PERIMETRO QUE EL USUARIO PONGA DENTRO DE NUESTRO INPUT

function CalcularPerimetroCuadrado(){
  const input= document.getElementById("inputcuadrado")
  const value=input.value
  const perimetro=Perimetrocuadrado(value)
  alert(perimetro)
}

function CalculArareaCuadrado(){
 const input =document.getElementById("inputcuadrado")
 const value=input.value
 const area=Areacuadrado(value)
 alert(area)
}
