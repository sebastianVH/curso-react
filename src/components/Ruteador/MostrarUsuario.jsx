
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function MostrarUsuario() {

    const [usuario,setUsuario] = useState({})
    const [loading, setLoading] = useState(true)
    const {userId} = useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then( response => {
            setUsuario(response.data)
            setLoading(false)
        }).catch( error => console.log(error))
    },[])


    return (
        <div>
            <h1>Datos del usuario</h1>
            <ul>
                <li>Id: {usuario.id}</li>
                <li>Nombre: {usuario.name}</li>
                <li>Nombre de usuario: {usuario.username}</li>
                <li>Email: {usuario.email} </li>
                <li>Telefono: {usuario.phone} </li>
                <li>Compañia: {usuario?.company?.name} </li>
            </ul>
        </div>
    )

}


export default MostrarUsuario