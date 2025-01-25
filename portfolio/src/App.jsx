
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <NavbarComponent />        
    </div>
    
  )
}

export default App
