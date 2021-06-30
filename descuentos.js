const precioOriginal=100
const descuento=15

const porcentajePrecioConDescuento=100 - descuento

const precioConDescuento=(precioOriginal*porcentajePrecioConDescuento)/100

// console.log({ 
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento}
// );

function CalcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100 - descuento
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100

    return precioConDescuento

}

function onClickButtonPriceDiscount(){
    const inputPrice= document.getElementById("InputPrice")
    const priceValue= inputPrice.value


    const inputDiscount= document.getElementById("InputDiscount")
    const discountValue= inputDiscount.value
    const precioconDescuento= CalcularPrecioConDescuento(priceValue,discountValue)

    const inputResultP= document.getElementById("ResultP")
    inputResultP.innerHTML= `El precio con descuento es : $` + precioconDescuento 



}