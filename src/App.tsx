import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
      <main>
        <Home />
        <About />
        <Projetos />
        <Contato />
      </main>
    </div>
    </>
  )
}

export default App
