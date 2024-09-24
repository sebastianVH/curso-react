import { data_productos } from "../../index.js";

const listarProductos = (req,res) => {

    return res.status(200).json(data_productos)

}

export default listarProductos