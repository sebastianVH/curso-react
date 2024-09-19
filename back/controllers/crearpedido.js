import { pedidos } from "../restaurant.js";

const crearpedido = (req,res) => {

    const {plato,guarnicion,bebida} = req.body
    const nuevo_pedido = {
        plato,
        guarnicion,
        bebida,
        id: pedidos.length + 1
    }
    pedidos.push(nuevo_pedido)
    res.status(201).json({nuevo_pedido,mensaje: "Se ha creado el pedido"})

}

export default crearpedido