import { pedidos } from "../restaurant.js"



const listarpedidos = (req,res) => {

    return res.json(pedidos)
}

export default listarpedidos