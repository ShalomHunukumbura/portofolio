
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
function App() {
  

  return (
    <div className='App'>
        <NavbarComponent /> 
        <Banner/>  
        <Skills/>     
    </div>
    
  )
}

export default App
