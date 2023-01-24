import { useState } from "react"
import Mensaje from "./Mensaje"
import Comentario from "./Comentario"

const ListaDeComentarios = ({comentarios, setEditarComentarios, eliminarComentario}) => {
    return (
        <> 
            {comentarios.length &&<p className="flex justify-center font-bold text-4xl  text-fuchsia-600">Lista de comentarios</p> }

            {comentarios.map( comentario => (
                <Comentario
                    key={comentario.id}
                    comentario={comentario}
                    setEditarComentarios= {setEditarComentarios}
                    eliminarComentario= {eliminarComentario}
                />
            ))}
        </>
    )
    }

export default ListaDeComentarios