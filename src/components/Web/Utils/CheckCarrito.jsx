

export default function useCheckCarrito() {

    const chequearProductoEnCarrito = (carrito, id) => {
        return carrito.some( producto => producto.id === id)
    }

    const verificarStock = (cantidad,producto) => {
        return producto.stock >= cantidad
    }

    const agregarCarrito = (producto) => {
        //antes de guardar las cosas, directamente en el carrito, verifiquemos que no exista algo, o si existe,agregarlo
        const carrito = JSON.parse(localStorage.getItem("carrito")) || []
        //primero, chequeamos que el producto no exista en nuestro carrito
        if (chequearProductoEnCarrito(carrito, producto.id)) {
            return alert("El producto ya existe en el carrito")
        }
        const cantidad = Number(prompt("Cuantas unidades?"))

        //verificamos que haya stock disponible
        if (!verificarStock(cantidad,producto)) {
            return alert("No hay stock disponible")
        }

        localStorage.setItem("carrito",JSON.stringify([...carrito,{...producto,cantidad}]))
        alert("Agregado al carrito!")
    }

    return {agregarCarrito}

}