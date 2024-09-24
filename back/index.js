//pasos para crear el server de express:

//-1: importamos express
import express from 'express'
import listarProductos from './controllers/web/listarproductos.js'
import cors from 'cors'
import finalizarCompra from './controllers/web/crearcompra.js'

//-2: creamos el server
const app = express()
//!!!! NO OLVIDEMOS PONER EL EXPRESS.JSON, PARA QUE NUESTRO BACKEND PUEDA MANDAR LAS OPCIONES DE JSON Y RECIBIR EN FORMATO DE JSON
app.use(express.json())

//! iNSTALEMOS CORS PARA QUE NUESTRO FRONT PUEDA HACER PETICIONES DE UNA MANERA SENCILLA SIN RESTRICCION
app.use(cors(
    // {
    // origin: 'http://localhost:5173'
    // }
))


//3- definir un puerto en el cual va a correr el server
const PORT = 3000

export const data_productos = {
    productos:[
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
            stock: 1
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
}

export const database_compras = {
    compras:[]
}


app.get('/productos',listarProductos)
app.post('/finalizarcompra',finalizarCompra)


//-4 levantamos el servidor para que corra en el puerto 3000
app.listen(PORT,()=>{ console.log(`Servidor corriendo en el puerto ${PORT}`);
})
