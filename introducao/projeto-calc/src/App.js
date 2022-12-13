import './App.css';
import Calculadora from './components/Calculadora/Calculadora';

function App() {
  return (
    <div className="App">
      <Calculadora opt={"+"} a={27} b={81} />
    </div>
  );
}

export default App;
