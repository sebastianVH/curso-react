import './Boton.css'


function Boton(props){

    //propiedades: mensaje de alerta, color de boton, texto para el interior del boton

    const alerta = () => alert(props.mensaje)

    return(

        <>
            <button className='boton-personalizado' style={{'backgroundColor':props.color}} onClick={alerta}>{props.texto} </button>
        </>
    )
}

export default Boton