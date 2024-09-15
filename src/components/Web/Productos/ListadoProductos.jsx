import { Outlet } from 'react-router-dom'
import './ListadoProductos.css'
import TarjetaProductos from './TarjetaProductos'


function ListadoProductos() {

    const productos = [
        {
            id:1,
            img:"https://mla-s1-p.mlstatic.com/620931-MLA52993222899_122022-F.jpg",
            nombre: "Placa de Video GeForce 4070",
            precio: 5000,
            stock:5
        },
        {
            id:2,
            img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/02/intel-cpu.jpg",
            nombre: "Procesador Intel",
            precio: 2000,
            stock: 10
        },
        {
            id:3,
            img: "https://www.lg.com/content/dam/channel/wcms/co/images/monitores/27mp400-b_awp_escb_co_c/gallery/large01.jpg",
            nombre: "Monitor LG",
            precio: 3000,
            stock: 3
        },
        {
            id:4,
            img:"https://logitechar.vtexassets.com/arquivos/ids/156649-800-800?v=636973479087130000&width=800&height=800&aspect=true",
            nombre: "Mouse Logitech",
            precio: 1000,
            stock: 7
        },{
            id:5,
            img:"https://http2.mlstatic.com/D_NQ_NP_865905-MLU70993720658_082023-O.webp",
            nombre: "Teclado Logitech",
            precio: 2000,
            stock: 5
        }
    ]

    return (
        <>
            <h1>Productos Disponibles</h1>
            <div className='cards'>
                {productos.map((producto,index) => 
                    <TarjetaProductos key={index} producto={producto}/>
            )}
            </div>
        </>
    )
}

export default ListadoProductos