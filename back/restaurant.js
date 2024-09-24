import express from 'express'
import listarpedidos from './controllers/listarpedidos.js'
import crearpedido from './controllers/crearpedido.js'
import modificarpedido from './controllers/modificarpedido.js'
import eliminarpedido from './controllers/eliminarpedido.js'



const app = express()
const PORT = 3001
app.use(express.json())

app.listen(PORT ,()=> {
    console.log("Restaurant listo para tomar pedidos")
})


app.get('/',(req,res)=> res.send("El restaurant esta esperando tus pedidos"))

//Vamos a simular una BASE DE DATOS, utilizando simplemente un array. De entrada, voy a crear un plato, simulando que ya hay un pedido en la cocina
export const pedidos = {
    pedidos:[
        {
        id: 1,
        plato: "Milanesa de carne",
        guarnicion: "pure de papa",
        bebida:"Gaseosa"
        },
        {
        id: 2,
        plato: "Ojo de Bife",
        guarnicion: "Ensalada",
        bebida:"Agua Saborizada manzana"
        }
    ]
}

//GET: sirve para OBTENER datos. Su funcion principal es LA BUSQUEDA Y DEVOLUCION DE INFORMACION
app.get('/verpedidos',listarpedidos)

//POST: sirve para CREAR NUEVOS DATOS (crear recursos). Su funcion es CREAR ALGO y luego devolver si se pudo crear o no dicho recurso
app.post('/crearpedido',crearpedido)

//PUT: nos permite MODIFICAR un recurso que se encuentre en el servidor!. Luego, devuelve si pudo ser modificado o no

app.put('/modificarpedido/',modificarpedido)

//DELETE: se encarga de ELIMINAR un recurso! Devolvera un estado ok, si se elimina correctamente
app.delete('/eliminarpedido/:id',eliminarpedido)