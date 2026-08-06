import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AreasAtuacao from './components/AreasAtuacao'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Duvidas from './components/Duvidas'
import Localizacao from './components/Localizacao'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <AreasAtuacao />
      <Sobre />
      <ComoFunciona />
      <Duvidas />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
