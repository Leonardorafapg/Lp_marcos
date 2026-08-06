import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import AreasAtuacao from './components/AreasAtuacao'
import ComoFunciona from './components/ComoFunciona'
import Agendamento from './components/Agendamento'
import Duvidas from './components/Duvidas'
import Localizacao from './components/Localizacao'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Servicos />
      <AreasAtuacao />
      <ComoFunciona />
      <Agendamento />
      <Duvidas />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
