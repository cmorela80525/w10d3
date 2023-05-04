import './App.css';
import GetQuestion from './components/GetQuestion';
import ScoreDisplay from './components/ScoreDisplay';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <Title />
      <ScoreDisplay />
      <GetQuestion />
    </div>
  );
}

export default App;
