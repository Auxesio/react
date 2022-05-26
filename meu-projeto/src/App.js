import './App.css';
import Evento from './components/Eventos'
import Form from './components/Form'
import Nome from './components/SayMyName'



function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Nome nome='heisenberg'/>
      <Evento numero='1' />
      <Evento numero='2'/>
      <Form />
    </div>
  );
}

export default App;
