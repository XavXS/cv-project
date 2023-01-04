import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';
import './styles/App.css';

function App() {
  return (
    <div id="app">
      <form>
        <General />
        <Practical />
        <Education />
      </form>
      <div id="output">test</div>
    </div>
  );
}

export default App;
