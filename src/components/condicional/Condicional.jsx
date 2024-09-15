 import { useState } from "react";
 import Tarea from "../Tareas/Tarea";

function Condicional (){

    const [tareas,setTareas] = useState([

    ]
)

    const [error,setError] = useState("")

    const completar = (e) => {

        const {name} = e.target

        setTareas(tareas.map(tarea => {
            if (tarea.nombre === name) {
                return {...tarea, estado: true}
            } else {
                return {...tarea}
            }
        }))
        
    }

    const agregarTarea = (e) => {
        
        e.preventDefault()
        const {value} = e.target[0]

        if (value === "") {
            setError("Complete el campo")
            return
        }

        setTareas([...tareas,{nombre:value,estado:false}])
        //vaciar el input
        e.target[0].value = ""
    }

    const verificarError = (e) => {

        const {value} = e.target

        if (value === "") {
            setError("Complete el campo")
            return
        }
        setError("")
    }

    return (
        <>
            <h1>Listado de Tareas</h1>
            <form onSubmit={agregarTarea} action="">
                <input onChange={verificarError} type="text" name="tarea" placeholder="Agregar Tarea" />
                {error && <p>{error}</p>}
                <button type="submit" >Agregar</button>
            </form>
            {/*<Tarea estado={false} tarea={"Sacar a pasear al perro"}/>
            <Tarea estado={true} tarea={"Limpiar el garage"}/>*/}
            { tareas.map( tarea => { 
                return <Tarea estado={tarea.estado} tarea={tarea.nombre} completar={completar}/>
                } 
            )}
        </>
    )


}

export default Condicional