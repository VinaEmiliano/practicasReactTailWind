import React from 'react'
import { formatearFecha } from '../helpers'

const Comentario = ({comentario, setEditarComentarios}) => {
    const {email, textArea, id, fecha} = comentario

    const handleEdit = (e) => {
        e.prevenDefault
        
        setEditarComentarios(comentario)
    }

    return (
                    <div>
                        <div className=' flex flex-col mx-auto p-4 my-4 rounded-3xl w-3/4 border-4 shadow-2xl bg-slate-500 text-white font-semibold'>
                            <div className='flex space-x-20 border-b-2 py-1'>
                            <p className=''>{email}</p>
                            <p className='text-sm'>{formatearFecha(fecha)}</p>
                            </div>
                            <p className=' py-2'>{textArea}</p>
                            <div className='flex justify-center space-x-20 mt-3'>
                                <button className=' py-2 px-8 border-2' onClick={handleEdit}>Editar</button>
                                <button className=' py-2 px-8 border-2'>Eliminar</button>
                            </div>
                        </div>

                    </div>
    )
}

export default Comentario