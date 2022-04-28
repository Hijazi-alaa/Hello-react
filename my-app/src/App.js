import logo from './logo.svg';
import './App.css';

import FunctionalGreetingWithProbs from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProbs greeting="Nice to meet you!" name="Alaa" age="33" />
    </div>
  );
}

export default App;
