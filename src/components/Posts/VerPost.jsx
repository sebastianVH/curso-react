//ver un posteo hecho por un usuario, con los datos que correspondan a ese post:

import { useParams } from "react-router-dom"
import useFetchData from "../Hooks/useFetchData"

//nombre del usuario creador, comentario, y titulo del comentario



function VerPosteo(){

    const { idPost } = useParams()
    //buscar el comentario 
    const posteo = useFetchData(`posts/${idPost}`)
    const comentarios = useFetchData(`posts/${idPost}/comments`)


    if (posteo.loading || comentarios.loading) {
        return <h1>Cargando...</h1>
    }

    if (posteo.error || comentarios.error) {
        return <h1>Se encontro un error al cargar los datos</h1>
    }

    return(
        <>
        <h1>Posteo</h1>
        <h2>{posteo.data.title}</h2>
        <p>{posteo.data.body}</p>
        {/*agregaremos una linea para simular la separacion del post con los comentarios */}
        <hr />
        <h2> Comentarios</h2>
        {comentarios.data.map(comentario => (
           <div key={comentario.id}>
                <h3>Titulo: {comentario.name}</h3>
                <h3>Autor: {comentario.email}</h3>
                <p>{comentario.body}</p>
                <hr />
            </div>
        ))}
        </>
    )

}

export default VerPosteo