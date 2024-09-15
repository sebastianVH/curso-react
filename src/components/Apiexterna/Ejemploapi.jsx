import { useState,useEffect } from "react"
import axios from "axios" //nos permite realizar peticiones HTTP a una API
import './Ejemploapi.css'


function Ejemploapi(){

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [recarga, setRecarga] = useState(false)
    const recargarDatos = () => {
        setRecarga(true)
    }

    useEffect (()=>{
        //vamos a simular que esta peticion demora 3 segundos en llegar
        setTimeout(()=>{    
            axios.get( // con el get estoy indicando que hago un PEDIDO a una API para que me devuelva datos
                "https://jsonplaceholder.typicode.com/users"
            ).then( // luego que me responda, voy a trabajar con los datos
                (response) => {
                    console.log(response.data);
                    setUsuarios(response.data)
                    setLoading(false)
                    setRecarga(false)
                }
            )
        },3000)
    },[
        //nos indica bajo que condicion se va a volver a ejecutar el useEffect
        recarga
    ])

    if(loading){
        return <h1>Cargando...</h1>
    }

    if (recarga){
        return <h1>Recargando...</h1>
    }

    return(
        <>
            <h1>Ejemplo a API Externa</h1>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nombre y apellido
                    </th>
                    <th>
                        Nombre de Usuario
                    </th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { //vamos a usar .map para recorrer el array de usuarios que se cargaron y poder mostrarlos en la tabla
                    usuarios.map( (usuario,index) => {
                        return (
                            <tr key={index}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        )
                    })     
                    }
                </tbody>
            </table>
            <button onClick={recargarDatos}  >Recargar Datos</button>
        </>
    )
}



export default Ejemploapi