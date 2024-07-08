import Button from './assets/Components/Button'
import Navbar from './assets/Components/Button/Navbar'
import Carrusel from './assets/Components/Button/Carrusel'
import Tablas from './assets/Components/Tablas/index'
import Agendarcita from './assets/Components/Agendarcita'
import Registrousuaria from './assets/Components/Registrousuaria'
import Perfil from './assets/Components/Perfil'
import Apoyossociales from './assets/Components/Apoyossociales'
import Eventos from './assets/Components/Eventos'
import Usuarios from './assets/Components/Usuarios/Usuarios'
import RegistroVivienda from './assets/Components/Datosvivienda/Datosvivienda'
import RegistroEconomico from './assets/Components/RegistroEconomico'
import Formulario from './assets/Components/Formulario'
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
   <Apoyossociales/>
   <Eventos/>
   <Formulario/>
    </>
  )
}

export default App
