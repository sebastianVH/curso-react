import { pedidos } from "../restaurant.js";


const modificarpedido = (req,res) => {

    //QUERY: es una cadena que se encuentra dentro de la URL =>  clave=valor. Si son varias, se unen con el &
    const {id} = req.query
    const datos = req.body
    console.log(id,datos)
    //encontrar el pedido que voy a modificar
    const pedido_a_modificar = pedidos.find(pedido => pedido.id == Number(id))
    
    //modificar el pedido
    pedido_a_modificar.plato = datos.plato
    pedido_a_modificar.guarnicion = datos.guarnicion
    pedido_a_modificar.bebida = datos.bebida
    //devolver el pedido modificado
    res.status(200).json({pedido_a_modificar,mensaje:"Pedido modificado con exito"})

}

export default modificarpedido