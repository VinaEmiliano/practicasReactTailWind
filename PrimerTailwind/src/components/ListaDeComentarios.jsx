import { useState } from "react"
import Mensaje from "./Mensaje"
import Comentario from "./Comentario"

const ListaDeComentarios = ({comentarios}) => {
    return (
        <> 
            {comentarios.length ? 'Lista de comentarios' : 'No hay comentarios'}

            {comentarios.map( comentario => (
                <Comentario
                    key={comentario.id}
                    comentario={comentario}
                />
            ))}
        </>
    )
    }

export default ListaDeComentarios