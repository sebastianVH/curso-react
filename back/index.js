//pasos para crear el server de express:

//-1: importamos express
import express from 'express'
//-2: creamos el server
const app = express()

//3- definir un puerto en el cual va a correr el server
const PORT = 3000

// cuando mi app este en el servidor en la ruta "/", me va a ejecutar, lo que sigue en la funcion
app.get('/',(req,res)=>{
    res.send("Te envio esta respuesta desde el servidor")
})

app.get('/saludo',(req,res)=> res.send("Hola mundo!!!"))

//-4 levantamos el servidor para que corra en el puerto 3000
app.listen(PORT,()=>{ console.log(`Servidor corriendo en el puerto ${PORT}`);
})
