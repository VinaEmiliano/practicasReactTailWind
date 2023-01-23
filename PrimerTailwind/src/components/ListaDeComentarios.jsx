import { useState } from "react"
import Mensaje from "./Mensaje"
import Comentario from "./Comentario"

const ListaDeComentarios = ({comentarios, setEditarComentarios,editarComentario}) => {
    return (
        <> 
            {comentarios.length ? 'Lista de comentarios' : 'No hay comentarios'}

            {comentarios.map( comentario => (
                <Comentario
                    key={comentario.id}
                    comentario={comentario}
                    setEditarComentarios= {setEditarComentarios}
                />
            ))}
        </>
    )
    }

export default ListaDeComentarios