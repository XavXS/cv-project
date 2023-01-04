import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';
import Output from './components/Output';
import './styles/App.css';

function App() {
  return (
    <div id="app">
      <form>
        <General />
        <Practical />
        <Education />
      </form>
      <Output />
    </div>
  );
}

export default App;
