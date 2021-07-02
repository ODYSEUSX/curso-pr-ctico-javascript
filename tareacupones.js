const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          
           const inputCoupon = document.getElementById("inputCoupon");
           const couponValue = inputCoupon.value;
      
           const resultCoupon = document.getElementById("priceWithCoupon")
        
           let descuento;
           let precioConCupon; 


            if (!coupons.includes(couponValue)) {
                alert("El cupón " + couponValue + " no es válido");
             } else if (couponValue === "JuanDC_es_Batman") {
                descuento = 15;
                precioConCupon = calcularPrecioConDescuento(priceValue,descuento);
                resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConCupon} dólares`
                
             } else if (couponValue === "pero_no_le_digas_a_nadie") {
                descuento = 30;
                precioConCupon = calcularPrecioConDescuento(priceValue,descuento);
                resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConCupon} dólares`
             } else if (couponValue === "es_un_secreto") {
                descuento = 25;
                precioConCupon = calcularPrecioConDescuento(priceValue,descuento);
                resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConCupon} dólares`
             }
             
        }
  
//   function onClickButtonPriceDiscount() {
//       const inputPrice = document.getElementById("InputPrice");
//       const priceValue = inputPrice.value;
      
//       const inputCoupon = document.getElementById("inputCoupon");
//       const couponValue = inputCoupon.value;
  
//       const resultCoupon = document.getElementById("priceWithCoupon")
    
//       let descuento;
//       let precioConDescuento; 
    
//       switch(true) {
//         case couponValue === "JuanDC_es_Batman":
//           descuento = 15;
//           precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
//           resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dólares`
//         break;
//         case couponValue === "pero_no_le_digas_a_nadie":
//           descuento = 30;
//           precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
//           resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dólares`
//         break;
//         case couponValue === "es_un_secreto":
//           descuento = 25;
//           precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
//           resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dólares`
//         break;
//         default:
//           resultCoupon.innerText = "el cupón ingresado no es valido"
//       }
//   }

