
import './App.css';
import Countdown from './components/Countdown';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
  
    <div className='contenedor'>
      <DigitalClock></DigitalClock>
      <Countdown></Countdown>
    </div>

  );
}

export default App;
