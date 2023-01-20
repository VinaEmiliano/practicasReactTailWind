import { useState } from "react"
import VentanaModal from "./VentanaModal"

const Footer = ({modal,setModal}) => {
    const handleModal = () => {
        setModal(true)
    }
    
    
    
    return (
        <>
            <div>
                {modal && <VentanaModal modal= {modal} setModal={setModal} />}
            </div>
            <div className="flex flex-col items-center mx-auto p-4 rounded-3xl w-3/4 bg-slate-500">
                <p className="font-bold font-serif text-4xl text-orange-400 my-2 py-1">Deja tu comentario</p>
                <img src="../public/img4.webp" alt="comentarios" className="w-11/12 h-52 cursor-pointer hover:opacity-80  rounded-3xl " onClick={handleModal}/>
            </div>
        </>
    )
}

export default Footer


