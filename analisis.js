const salariosCol= colombia.map(
    function(personita){
        return personita.salary
    }
)
//ordenamos salarios de manera ascendente.
 const salariosColSorted= salariosCol.sort((a,b)=> a-b)

 

 //calculo de mediana de salarios

 function esPar(numerito){
     return (numerito%2 === 0)
 }

 function calcularMediaAritmetica(list){ 
 
  
    const  sumaLista1= list.reduce(
       function (valorAcumulado = 0 , nuevoElemento){
           return valorAcumulado + nuevoElemento 
       } 
    )
    
    const promedioLista1= sumaLista1/list.length 
    return promedioLista1
    }

 function medianaSalarios(lista){
     const mitad = parseInt(lista.length/2)

     if(esPar(lista.length)){
       const personitaMitad1= lista[mitad - 1]
       const personitaMitad2=lista[mitad]

       const mediana= calcularMediaAritmetica([personitaMitad1,personitaMitad2])
       return mediana
     }else{
         const personitaMitad= lista[mitad]
         return personitaMitad
     }
 }

 const medianaGeneralCol= medianaSalarios(salariosColSorted)
 

     //Medianatop10salarios
     const splicesStart= (salariosColSorted.length)*0.9
     const spliceCount=(salariosColSorted.length)*0.1
     const salariosColTop10= salariosColSorted.splice(
         splicesStart,
         spliceCount
     )
    
     const medianaTop10= medianaSalarios(salariosColTop10)
    
     console.log(
         {medianaGeneralCol,medianaTop10})
     

 