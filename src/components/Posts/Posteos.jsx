import axios from "axios"
import { useState, useEffect } from "react"
import useFetchData from "../Hooks/useFetchData"
import { useNavigate } from "react-router-dom"
import VerPosteo from "./VerPost"


function Posteos() {


    const {data,loading,error} = useFetchData('posts')
    const usuarios = useFetchData('users')
    const navigate = useNavigate()


    if (error) {
        return <h1>Se encontro un error al cargar los datos</h1>
    }

    if (loading || usuarios.loading) {
        return <h1>Cargando...</h1>
    }

    const buscarUsuario = (id) =>{
       const user = usuarios.data?.find(usuario => (id === usuario.id))
        return user.username
    }

    const verPosteo = (id) => {
        navigate(`/posteos/${id}`)
    }

    return (

        <>
        <h1>Posteos</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Autor</th>
                    <th>Titulo</th>
                    <th>Ver post completo</th>
                </tr>
            </thead>
            <tbody>
                {data.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{buscarUsuario(post.userId)}</td>
                        <td>{post.title}</td>
                        <td><button style={{cursor: 'pointer'}} onClick={() => verPosteo(post.id)}>Ver</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>

    )
}

export default Posteos