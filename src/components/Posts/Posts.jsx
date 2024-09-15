


function Posts() {
    //crear un estado para almacenar el listado de posts (usar el useState)
    //crear un estado para almacenar el estado de cargando (si es True, o false) => por defecto, es True

    //crear una funcion que pida a traves de Axios (usando GET), a la api jsonplacerholder, los posts. A modo de ejemplo, van a colocarle un timeout de 2 segundos, para simular una demora. Mientras no se cargue el listado, mostrar un cartel con un h1 que diga cargando. Una vez que cargue el listado, quitar el  cartel de h1 (usando el Estado)

    //crear el useEffect que ejecutara la funcion al momento de montarse el componente

    //crear una funcion para RECARGAR los posts que van a mostrarse

    return(
        <>
            <h1>Post de usuarios</h1>
            {/* Crear una tabla para los posts*/}
            <table>
                <thead>
                    <tr>
                        {/* cargar a la cabecera los diferentes datos que van a recibir: id, usuario */}
                    </tr>
                </thead>
                <tbody>
                    {/* cargar el listado de posts, utilizando la funcion .map e iterando sobre el estado para los posts */}
                </tbody>
            </table>
        </>
    )

}


export default Posts