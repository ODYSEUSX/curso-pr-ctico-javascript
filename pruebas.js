

// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }
// console.log(arr)
function DesviacionStandard(ArrayUlyses) {
    //--CALCULO DEL PROMEDIO--
    var total = 0;
    for(var key in ArrayUlyses)
    total += ArrayUlyses[key];
    var meanVal = total / ArrayUlyses.length;  
    //--CALCULO DE LA DESVIACIÓN STANDARD--
    var SDprep = 0;
    for(var key in ArrayUlyses)
    SDprep += Math.pow((parseFloat(ArrayUlyses[key]) - meanVal),2);
    var SDresult = Math.sqrt(SDprep/ArrayUlyses.length);
   
     console.log(SDresult);
    } 
   var ArrayUlyses = [10, 19, 12, 32];
   DesviacionStandard(ArrayUlyses);