import { useEffect, useMemo, useState } from 'react'
import './Carrito.css'
import { Button } from '@mui/material'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function Carrito() {

    //vamos a guardar en una variable, el carrito del almacenamiento local
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

    const total = useMemo(() => {
        return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)
    }, [carrito])

    const quitarDelCarrito = (id) => {
        //usar la funcion de FILTRO, para quitar el producto que indiquemos
        const nuevoCarrito = carrito.filter(producto => producto.id !== id )
        localStorage.setItem("carrito",JSON.stringify(nuevoCarrito))
        setCarrito(nuevoCarrito)
    }

    const finalizarCompra = async () => { 
        //vamos a mandar los datos de nuestra compra al backend
        const productos_carrito = JSON.parse(localStorage.getItem("carrito"))
        //para evitar mandar al back un carrito vacio, chequeamos que no se encuentre vacio y devolvemos un mensaje de info
        if(!productos_carrito){
            return Swal.fire("Atencion","Debe agregar por lo menos un producto al carrito","info")
        }
        try {
            const {data} = await axios.post('http://localhost:3000/finalizarcompra',{productos_carrito,total})
            Swal.fire("Compra Finalizada",data.message,"success")
            localStorage.removeItem("carrito")
            setCarrito([])
             
        } catch (error) {
            Swal.fire("Ups! Ha ocurrido un error",error.response.data.message,"error")
        }
    }

    useEffect(() => {
    }, [carrito])

    return (
        <div className='carrito'>
            <h1>Carrito</h1>
            {!carrito.length && <h3>No hay productos en el carrito</h3>}
            {carrito.map((producto, index) => {
                return (
                <div key={index} className="card-carrito">
                    <img src={producto.img} alt="" className="producto-img"/>
                    <div>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <p>Unidades: {producto.cantidad}</p>
                    <button className='card-button-quitar'
                    onClick={()=>quitarDelCarrito(producto.id)}
                    >Quitar Producto</button>
                    </div>
                </div>
                )
            })}
            <h2>Total: ${total} </h2>
            <Button onClick={finalizarCompra} variant='contained' color='success' endIcon={<CheckCircleOutlinedIcon/>} >Finalizar compra</Button>
        </div>
    )

}