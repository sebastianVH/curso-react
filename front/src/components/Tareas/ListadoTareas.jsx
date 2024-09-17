import Tarea from "./Tarea.jsx"

function ListadoTareas() {

    //Vamos a crear un listado de las tareas que tengo que realizar en el dia , y si se encuentran o no pendientes de realizar. En caso que este pendiente, la tarea figura en amarillo, y en caso que este completa, figura en verde. Tambien habra un boton que dice: "Marcar como completa", el cual dara un mensaje con el nombre de la tarea y que se marco como completa. Utilizaremos una funcion en Js que se llama MAP , que nos va a permitir realizar la RENDERIZACION de multiples componentes sin tener que escribirlo uno a uno. Utilizaremos un componente llamado "Tarea" que sera el que mostrara la tarea y tendra su correspondiente boton. El componente tarea recibira por props el nombre de la tarea a realizar

    //usar un array (un listado) de tareas y luego pasarlos a un unico componente

    const tareas = [
        {nombre:"Sacar a pasear al perro",estado:false},
        {nombre:"Limpiar el garage",estado:true},
        {nombre:"Hacer la compra",estado:false},
        {nombre:"Comprar ropa",estado:true},
        {nombre: "Ir al gimnasio",estado: false}
    ]

    return (
        <>
            <h1>Listado de Tareas</h1>
            {/*<Tarea estado={false} tarea={"Sacar a pasear al perro"}/>
            <Tarea estado={true} tarea={"Limpiar el garage"}/>*/}
            { tareas.map( tarea => { 
                return <Tarea estado={tarea.estado} tarea={tarea.nombre}/>
                } 
            )}
        </>
    )
}

export default ListadoTareas