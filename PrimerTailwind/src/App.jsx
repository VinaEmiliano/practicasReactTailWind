import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const[modal, setModal] = useState(false)
  
  return (
    <>
      <Header />
      <Body />
      <Footer 
        modal= {modal}
        setModal= {setModal}
      />
    </>
  )
}

export default App
