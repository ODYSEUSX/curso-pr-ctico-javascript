const lista =[
    10,
    12,
    19,
    32
]
function calcularMediaAritmetica(lista){ 

  let sumaLista1= 0
  for(let i=0 ; i<lista.length; i++){
  sumaLista1= sumaLista1 + lista[i] 
  
//   }
// const  sumaLista1= lista.reduce(
//    function (valorAcumulado = 0 , nuevoElemento){
//        return valorAcumulado + nuevoElemento 
//    } 
// 
  }
const promedioLista1= sumaLista1/lista.length 
return promedioLista1
}

function desviación(lista){ 


  function calcularMediaAritmetica(lista){ 
    let sumaLista1= 0
    for(let i=0 ; i<lista.length; i++){
    sumaLista1= sumaLista1 + lista[i] 

  }
  const promedioLista1= sumaLista1/lista.length 
  return promedioLista1
  }








  let sumatoria= 0
for(let i=0; i< lista.length; i++){
   
   sumatoria+=Math.pow((parseFloat(lista[i]- 18.25)),2)
   
   
 }
 var desviacionStandard= Math.sqrt(sumatoria/lista.length)
 return desviacionStandard
}


console.log(desviación(lista))