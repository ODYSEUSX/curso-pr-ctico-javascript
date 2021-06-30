
function validaciónDeLado(a,b){
  if(a > b){
    let Altura= alturaisosceles(a,b)
    return Altura
  }else{
    alert("usted ha ingresado mal los lados de un triangulo isósceles , revisar la teoría")
  }
}

function alturaisosceles (a,b){
 const  ladorepetido=a
 const lado=b
 const altura= Math.sqrt(a**2 - (b/2)**2)
 return altura 

}
 //creando la función para el boton de calculo de altura
 function CalcularAlturaIsosceles(){
 const input=document.getElementById("inputladorepetido")
 const input1=document.getElementById("inputlado")
 const value=input.value
 const value1=input1.value
 const alturaisosceles=validaciónDeLado(value,value1)
 alert(alturaisosceles)
 }
 