import { useParams} from "react-router-dom"
import useFetchData from "../Hooks/useFetchData"


function TareasUsuario(){

    const {idUsuario} = useParams()
    const {data,loading,error} = useFetchData(`users/${idUsuario}/todos`)

    if (error) {
        return <h1>Se encontro un error al cargar las tareas</h1>
    }

    if (loading) {
        return <h1>Cargando...</h1>
    }

    const estadoTarea = (state) => {
        if (state === true) {
            return <h3 style={{color: 'green'}}>Completada</h3>
        } else {
            return <h3 style={{color: 'red'}}>No completada</h3>
        }
    }


    return(
        <>
        <h1>Tareas del usuario</h1>
        {data.map(tarea => {

            return(
                <div key={tarea.id}>  
                    <h3>Id: {tarea.id}</h3>
                    <h3>Titulo: {tarea.title}</h3>
                    {estadoTarea(tarea.completed)}
                    <hr />
                </div>   

            )

        })}
        </>
    )
}

export default TareasUsuario