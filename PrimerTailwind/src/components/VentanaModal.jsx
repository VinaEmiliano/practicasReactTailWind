import { useState } from "react"


const VentanaModal = ({modal, setModal}) => {

  const handleCloseModal = () => {
    setModal(false)
  }


  return (
    <section className="flex flex-col absolute bg-black w-full h-screen">
      <div className="w-10 h-10 ">
        <img src="../../public/cerrar.svg" alt="boton cerrar" className=" " onClick={handleCloseModal} />
      </div>
      <form action="" className="flex flex-col p-4 m-4 text-white">
        <label htmlFor="" className="p-4 m-4">Ingresa tu email</label>
        <input type="email" className="p-4 m-4"/>
        
        <label htmlFor="" className="p-4 m-4">Deja tu comentario</label>
        <textarea name="" id="" cols="30" rows="10" className="p-4 m-4"></textarea>

        <button
          id="btn-submit"
          type="submit"
          className="p-4 m-4"
        >Enviar comentario</button>
      </form>
    </section>
  )
}

export default VentanaModal