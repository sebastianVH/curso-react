import axios from "axios"
import { useState, useEffect } from "react"
import './Tablas.css'
import { useNavigate } from "react-router-dom"
import useFetchData from "../Hooks/useFetchData"


function Albums() {

    
    const {data,loading,error} = useFetchData("albums")
    const navigate = useNavigate()


    if (error) {
        return <h1>Se encontro un error al cargar los datos</h1>
    }

    if (loading) {
        return <h1>Cargando...</h1>
    }

    const verUsuario = (id) => {
        navigate(`/usuarios/${id}`)
    }

    return (

        <>
        <h1>Albums</h1>

        <table className="tabla">
            <thead>
                <tr>
                    <th>ID usuario</th>
                    <th>Id Album</th>
                    <th>Titulo</th>
                </tr>
            </thead>
            <tbody>
                {data.map(album => (
                    <tr className="filas" key={album.id}>
                        <td onClick={()=> verUsuario(album.userId)}>
                           <button style={{cursor: 'pointer'}}>
                            {album.userId}
                            </button> 
                        </td>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>

    )
}

export default Albums