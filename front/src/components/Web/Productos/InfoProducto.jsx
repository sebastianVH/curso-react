import { useLocation } from "react-router-dom"
import './InfoProducto.css'
import useCheckCarrito from "../Utils/CheckCarrito"
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 




export default function InfoProducto() {

    const { state } = useLocation()
    const {agregarCarrito} = useCheckCarrito()

    return (
        <div className="card-info">
            <h1> Informacion del producto</h1>
            <div className='info-producto'>
                <img src={state.img} alt="" className="producto-img"/>
                <div className="detalle-producto">
                    <h2 className="card-title">{state.nombre}</h2>
                    <p className="card-text">Precio: ${state.precio}</p>
                    <p className="card-text">Unidades Disponibles: {state.stock}</p>
                    {/* <button onClick={()=>agregarCarrito(state)} className="card-button">Comprar</button> */}
                    <Button sx={{'&: hover': {backgroundColor: 'green',color: 'white',transition: '1.5s'}}} startIcon={<ShoppingCartIcon />} color="success" variant="outlined" onClick={()=>agregarCarrito(state)} >Comprar</Button>
                </div>
            </div>
        </div>
    )
}