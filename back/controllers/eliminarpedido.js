import { pedidos } from "../restaurant.js";


const eliminarpedido = (req,res) => {

    //vamos a tomar desde los PARAMETROS de la URL el ID del pedido que queremos borrar
    const {id} = req.params
    //buscar en mi lista de pedidos, aquel pedido cuyo ID corresponda al ID del pedido
    const pedido_eliminado = pedidos.find(pedido => pedido.id == Number(id))
    //borrar el pedido
    pedidos.splice(pedidos.indexOf(pedido_eliminado),1)
    res.status(200).json({pedido_eliminado,mensaje:"Se ha eliminado el pedido"})

}

export default eliminarpedido