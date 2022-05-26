import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/contato'
import Empresa from './pages/empresa'
import NavBar from './components/NavBar'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      
    </Router>
  );
}

export default App