function Moda(lista1){
    
    const lista1Count= {} //objeto vacio

    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){   //se lee: si  existe más de una vez el elemento(por ejemplo "1") de la list1 ...
                lista1Count[elemento] += 1  // entonces sumale 1 al value("list1Count")
            }else{
                lista1Count[elemento]=1  //se lee: si solamente existe una vez el value del "Elemento" será 1
            }
           
        }
    )
  
    const lista1Array =Object.entries(lista1Count).sort((a,b)=>a[1]-b[1])
  
    const moda= lista1Array[lista1Array.length - 1]

    return moda
}

console.log(Moda([2,2,2,2,4,5,6,76,5,5,8,9]))  //poner cualquier arreglo que se te venga a la mente y calculara la moda.
  

 

