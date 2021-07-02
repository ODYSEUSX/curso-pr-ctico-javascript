const lista =[
    100,
    200,
    300,
    500
]
function calcularMediaAritmetica(lista){ 
  //let sumaLista1= 0
//  for(let i=0 ; i<lista.length; i++){
//   sumaLista1= sumaLista1 + lista[i] 
  
//   }
const  sumaLista1= lista.reduce(
   function (valorAcumulado = 0 , nuevoElemento){
       return valorAcumulado + nuevoElemento 
   } 
)

const promedioLista1= sumaLista1/lista.length 
return promedioLista1
}

console.log(calcularMediaAritmetica(lista))