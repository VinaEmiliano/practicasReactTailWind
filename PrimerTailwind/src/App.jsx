import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import ListaDeComentarios from './components/ListaDeComentarios'
import Footer from './components/Footer'
import { generarId } from './helpers'
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false)
  const [comentarios, setComentarios] = useState([])
  
  const guardarComentarios = (comentario) => {
    comentario.id = generarId();
    comentario.fecha = Date.now();
    setComentarios([...comentarios, comentario])
    setModal(false)
  }

  return (
    <>
      <Header />
      <Body />
      <ListaDeComentarios
        comentarios= {comentarios}
      />
      <Footer 
        modal= {modal}
        setModal= {setModal}
        guardarComentarios= {guardarComentarios}
      />
    </>
  )
}

export default App
