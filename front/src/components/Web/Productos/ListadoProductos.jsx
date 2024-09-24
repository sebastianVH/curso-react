import { useEffect, useState } from 'react'
import './ListadoProductos.css'
import TarjetaProductos from './TarjetaProductos'
import { Box } from '@mui/material'
import axios from 'axios'


function ListadoProductos() {

    const [productos,setProductos] = useState([])

    const cargarProductos = async () => {
        //vamos a simular que la peticion al back demora 3 seg
        await new Promise(resolve => setTimeout(resolve, 1000))
        const {data} = await axios.get('http://localhost:3000/productos')
        setProductos(data.productos);
    }

    useEffect(() => {
        cargarProductos()
    }, [])

    if (productos.length === 0) {
        return <h1>Cargando Productos...</h1>
    }


    return (
        <>
            <h1>Productos Disponibles</h1>
            <Box display={'flex'} justifyContent={'space-around' } alignItems={'flex-start'} >
                {productos.map((producto,index) => 
                    <TarjetaProductos key={index} producto={producto}/>
            )}
            </Box>
        </>
    )
}

export default ListadoProductos