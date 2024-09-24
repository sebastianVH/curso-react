import { data_productos, database_compras } from "../../index.js";


const finalizarCompra = (req,res) => {

    const {productos_carrito,total} = req.body;
    //chequear si alguno de los productos, la compra fue de mas productos de los que habia en la base de datos
    for (const producto_carrito of productos_carrito) {
        const producto_ddbb = data_productos.productos.find(producto => producto.id == producto_carrito.id)
        if (producto_carrito.cantidad > producto_ddbb.stock){
            return res.status(400).json({message:`No hay stock disponible para el producto ${producto_carrito.nombre}`})
        }
    }
    
    //vamos a restar el stock de los productos que compramos
    for (const producto_carrito of productos_carrito) {
        const producto_ddbb = data_productos.productos.find(producto => producto.id == producto_carrito.id)
        if (producto_carrito.cantidad > 0){
            producto_ddbb.stock -= producto_carrito.cantidad
        }
    }

    //guardar la compra en la base de datos
    database_compras.compras.push({productos_carrito,total})
    return res.status(201).json({message:"Compra cargada con exito",database_compras})

}

export default finalizarCompra