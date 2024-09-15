import Boton from "./Boton";


function Reutilizable(){
    return(
        <> 
            <Boton mensaje={"Alerta boton con mensaje"} color={"blue"} texto={"Boton de Alerta"}/>
            <Boton mensaje={"Alerta boton eliminar"} color={"red"} texto={"Boton de Eliminar"}/>
            <Boton mensaje={"Alerta boton editar"} color={"green"} texto={"Boton de Editar"}/>
        </>
    )
}

export default Reutilizable