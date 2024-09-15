import Boton from "../Reutilizables/Boton"
import { useState } from "react"

function Eventos(){
    // un valor del estado, y una funcion que CAMBIA ese valor del estado. Dentro del useState PODEMOS PONER, DE MANERA OPCIONAL, CUAL ES EL VALOR INICIAL
    const [contador,setContador] = useState(0)
    const [error,setError] = useState({})
    const [datos,setDatos] = useState({nombre:"",password:""})

    //useState: crea estados para el uso del Componente: el estado inicial, y el cual sera dado luego dentro del componente

    //onClick: un evento onclick hace referencia a cuando hacemos un click simple en un elemento del DOM
    //onSubmit: es un evento basado en el envio de un formulario.
    //onChange: es un evento basado en el cambio de un elemento del DOM.

    const alertaBoton = () => {
        console.log("Se clickeo el boton 2")
    }
    

    //onSubmit: controlando cada uno de los inputs del formulario
    const enviarForm = (event) => {
        event.preventDefault(); // Evita que el formulario se envie al servidor
        //vamos a verificar que alguno de los campos no hayan quedado vacios
        if (datos.nombre === "") {
            setError({...error,nombre:"Complete el campo nombre"})
        }

        if (datos.password === "") {
            setError({...error,password:"Complete el campo password"})
        }

        if (datos.password === "" || datos.nombre === "") {
            console.log(datos);
            return
        }

        //antes de enviar el form, verificamos si se coloco algun error

    }

    //onChange: controlando cada uno de los inputs del formulario
    const cambioInput = (event) =>{
        // datos[event.target.name] = event.target.value  
        // console.log(datos)

        const {name,value } = event.target
        //vamos a verificar si esta vacia. En caso que este vacia, vamos a mostrar el msj de error

        if(name === "password"){
            if(value.length < 8){
                setError({...error,password_largo: "La contraseña debe tener minimo 8 caracteres"})
            } else {
                setError({...error,password_largo: ""})
            }
        }

        if (value === "") {
            setError({...error,[name]:"Complete el campo"})
        } else {
            setError({...error,[name]:""})
            setDatos({...datos,[name]:value})
        }

    }

    // const sumarUno = () => {
    //     setContador(contador + 1)
    //     console.log(contador);
    // }

    // const restarUno = () => {
    //     setContador(contador - 1)
    //     console.log(contador);
    // }

    return (
        <div>
            {/* <Boton mensaje={"Alerta boton con mensaje"} color={"blue"} texto={"Boton de Alerta"} >Boton reutilizable</Boton>
            <button onClick={alertaBoton}> Boton numero 2</button> */}
            <h1>Formulario</h1>
            <form onSubmit={enviarForm} >
                <label htmlFor="">Nombre</label>
                <input onChange={cambioInput} name="nombre" type="text" />
                {/*vamos a usar un RENDERIZADO CONDICIONAL: primero colocamos cual es la condicion que debe cumplirse y luego QUE SE DEBERIA MOSTRAR*/}
                { error.nombre && <p style={{color:"red"}}> {error.nombre} </p>}
                <br />
                <label htmlFor="">password</label>
                <input onChange={cambioInput} name="password" type="password" />
                { error.password && <p style={{color:"red"}}> {error.password} </p>}
                { error.password_largo && <p style={{color:"red"}}> {error.password_largo} </p>}
                <br />
                <button type="submit">Enviar</button>
            </form>
            {/* <h2>Contador: {contador}</h2>
            <button onClick={sumarUno}>Sumar 1 al contador</button>
            <button onClick={restarUno}>Restar 1 al contador</button> */}
        </div>
    )   

}

export default Eventos