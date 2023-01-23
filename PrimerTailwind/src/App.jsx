import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import ListaDeComentarios from './components/ListaDeComentarios'
import Footer from './components/Footer'
import { generarId } from './helpers'
import { useState, useEffect } from 'react'

function App() {
  const [modal, setModal] = useState(false)
  const [comentarios, setComentarios] = useState([])
  const [editarComentario, setEditarComentarios] = useState({})

  useEffect(() => {
    if(Object.keys(editarComentario).length > 0) {
      setModal(true)
    }
  },[editarComentario])
  
  const guardarComentarios = (comentario) => {
    if(comentario.id){
      // si vamos a actualizar un comentario
      const comentariosActualizados = comentarios.map( comentarioState => {
        comentarioState.id === comentario.id ? comentario : comentarioState
      })
      setComentarios(comentariosActualizados)
    }else{
      // si hay un comentario nuevo
      comentario.id = generarId();
      comentario.fecha = Date.now();
      setComentarios([...comentarios, comentario])
    }
    setModal(false)
  }

  return (
    <>
      <Header />
      <Body />
      <ListaDeComentarios
        comentarios= {comentarios}
        setEditarComentarios= {setEditarComentarios}
      />
      <Footer 
        modal= {modal}
        setModal= {setModal}
        guardarComentarios= {guardarComentarios}
        editarComentario= {editarComentario}
        setEditarComentarios= {setEditarComentarios}
      />
    </>
  )
}

export default App
