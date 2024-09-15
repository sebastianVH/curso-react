import './Tarea.css'

function Tarea(props){


    return(

        <>
            <h3 style={{'backgroundColor':(props.estado ? 'green': 'yellow')}}>La tarea es: {props.tarea}
            </h3>
                <p>Estado de la tarea: {props.estado ? 'Completa' : 'Pendiente'}</p>
            {/* Si el estado de completo es true, la tarea se marca como completa y de color verde, en cambio si el estado es false, la tarea se marca como pendiente y de color amarillo */}
            <button name={props.tarea} className={(props.estado ? 'boton-completo' : 'boton-completar')}  disabled={props.estado} onClick={props.completar}>{props.estado?'Finalizada': 'Marcar como completa'}</button>
        </>
    )

}

export default Tarea