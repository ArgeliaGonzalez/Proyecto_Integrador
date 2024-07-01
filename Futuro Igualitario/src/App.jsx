import Button from './assets/Components/Button'
import Navbar from './assets/Components/Button/Navbar'
import Carrusel from './assets/Components/Button/Carrusel'
import Tablas from './assets/Components/Tablas/index'
import Agendarcita from './assets/Components/Agendarcita'
import Registrousuaria from './assets/Components/Registrousuaria'
import Perfil from './assets/Components/Perfil'
import './tabla.css'

import './App.css'
import './navbar.css' 

function App() {


  return (
    <>
      <Navbar/>

   <Tablas/>   
   <Agendarcita/>
   <Registrousuaria/>
   <Perfil/>
    </>
  )
}

export default App
