import { useMemo, useState } from 'react'
import './Carrito.css'


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
        </div>
    )

}