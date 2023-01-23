import { useState, useEffect } from "react"
import Mensaje from "./Mensaje"


const VentanaModal = ({modal, setModal, guardarComentarios, editarComentario, id, setId}) => {
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')
  const [mensaje, setMensaje] = useState('')
/*   const [id, setId] = useState('') */

  useEffect( () => {
    if(Object.keys(editarComentario).length > 0) {
      setEmail(editarComentario.email)
      setTextArea(editarComentario.textArea)
      setMensaje(editarComentario.setMensaje)
      setId(editarComentario.id)
    }
  }, [] )


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
    
    guardarComentarios({email, textArea, id})
  }

  return (
    <section className="flex flex-col bg-slate-800 opacity-90 w-4/5 mx-auto rounded-3xl ">
      
      <div className=" m-5 w-10 h-10 ">
        <img src="../../public/cerrar.svg" alt="boton cerrar" className="" onClick={handleCloseModal} />
      </div>
      
      <form action="" 
        className="flex flex-col p-4 m-4 text-white"
        onSubmit={handleSubmit}
        >
        
        <legend className="text-4xl font-semibold">{editarComentario.email ? 'Edita tu comentario' : 'Deja tu comentario'}</legend>
        
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
        
        <label htmlFor="email" className="text-2xl font-semibold p-4 m-4">Ingresa tu email</label>
        <input 
          id="email"
          type="email" 
          placeholder="email"
          className="p-4 m-4 text-black"
          value={email}
          onChange ={ e => setEmail(e.target.value)}
        />
        
        <label htmlFor="textArea" className="text-2xl font-semibold p-4 m-4">Deja tu comentario</label>
        <textarea 
          name="textArea" 
          id="textArea" 
          cols="30" rows="10"
          placeholder="Aqui va tu comentario" 
          className="p-4 m-4 text-black"
          value= {textArea}
          onChange= {e => setTextArea(e.target.value)}>
        </textarea>
        
        <input
          id="btn-submit"
          type="submit"
          className="text-2xl font-semibold p-4 m-4 bg-fuchsia-600 rounded-3xl"
          value={editarComentario.email ? 'Guardar cambios' : 'Agregar comentario'}
          >
        </input>
      </form>
    
    </section>
  )
}

export default VentanaModal