
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import useFetchData from "../Hooks/useFetchData"


function Usuarios() {


    const {data,loading,error} = useFetchData('users')
    const navigate = useNavigate()


    if (error) {
        return <h1>Se encontro un error al cargar los datos</h1>
    }


    if (loading) {
        return <h1>Cargando...</h1>
    }

    const mostrarDatos =(id) => {
        navigate(`/usuarios/${id}`)
    }

    const mostrarTareas = (id) => {
        navigate(`/usuarios/${id}/tareas`)
    }

    return (

        <>
        <h1>Usuarios</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Mostrar Datos completos</th>
                    <th>Mostrar tareas</th>
                </tr>
            </thead>
            <tbody>
                {data.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td><button onClick={()=>mostrarDatos(usuario.id)}>Mostrar mas datos</button></td>
                        <td><button onClick={()=>mostrarTareas(usuario.id)}>Mostrar tareas del usuario</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>

    )
}

export default Usuarios