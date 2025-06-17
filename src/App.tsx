import Header from './components/Header'
import Hero from './components/Hero'
import Oferty from './components/Oferty'
import Doswiadczenie from './components/Doswiadczenie'
import Cennik from './components/Cennik'
import Kontakt from './components/Kontakt'

function App() {

  return (
    <div className='w-full w-screen-xl mx-auto'>
      <Header />
      <Hero />
      <Oferty />
      <Doswiadczenie />
      <Cennik />
      <Kontakt />
    </div>
  )
}

export default App
