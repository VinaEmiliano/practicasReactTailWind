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
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if(Object.keys(editarComentario).length > 0) {
      setModal(true)
    }
  },[editarComentario])
  
  const guardarComentarios = (comentario) => {
    if(comentario.id){
      // si vamos a actualizar un comentario
      const comentariosActualizados = comentarios.map( comentarioState => comentarioState.id === comentario.id ? comentario : comentarioState)
      setComentarios(comentariosActualizados)
      setEditarComentarios({})
    }else{
      // si hay un comentario nuevo
      comentario.id = generarId();
      comentario.fecha = Date.now();
      setComentarios([...comentarios, comentario])
    }
    setModal(false)
  }

  const eliminarComentario = (id) => {
    const comentariosActualizados = comentarios.filter( comentario => comentario.id !== id)
    setComentarios(comentariosActualizados)
  }

  return (
    <>
      <Header />
      <Body />
      <ListaDeComentarios
        comentarios= {comentarios}
        setEditarComentarios= {setEditarComentarios}
        id= {id}
        setId= {setId}
        fecha= {fecha}
        setFecha= {setFecha}
        eliminarComentario= {eliminarComentario}
      />
      <Footer 
        modal= {modal}
        setModal= {setModal}
        guardarComentarios= {guardarComentarios}
        editarComentario= {editarComentario}
        setEditarComentarios= {setEditarComentarios}
        id= {id}
        setId= {setId}
      />
    </>
  )
}

export default App
