import { useState } from "react"
import Mensaje from "./Mensaje"


const VentanaModal = ({modal, setModal, guardarComentarios}) => {
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')
  const [mensaje, setMensaje] = useState('')


  const handleCloseModal = () => {
    setModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([email, textArea].includes('')){
      setMensaje('completa todos los campos')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }
    
    guardarComentarios({email, textArea})
  }

  return (
    <section className="flex flex-col bg-black w-full ">
      
      <div className="w-10 h-10 ">
        <img src="../../public/cerrar.svg" alt="boton cerrar" className=" " onClick={handleCloseModal} />
      </div>
      
      <form action="" 
        className="flex flex-col p-4 m-4 text-white"
        onSubmit={handleSubmit}
        >
        
        <legend>Deja tu comentario</legend>
        
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
        
        <label htmlFor="email" className="p-4 m-4">Ingresa tu email</label>
        <input 
          id="email"
          type="email" 
          className="p-4 m-4 text-black"
          value={email}
          onChange ={ e => setEmail(e.target.value)}
        />
        
        <label htmlFor="textArea" className="p-4 m-4">Deja tu comentario</label>
        <textarea 
          name="textArea" 
          id="textArea" 
          cols="30" rows="10" 
          className="p-4 m-4 text-black"
          value= {textArea}
          onChange= {e => setTextArea(e.target.value)}>
        </textarea>
        
        <button
          id="btn-submit"
          type="submit"
          className="p-4 m-4 text-3xl"
          >Enviar comentario
        </button>
      </form>
    
    </section>
  )
}

export default VentanaModal