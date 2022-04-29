import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallbacks from './components/StatfulGreetingWithCallback';
import FunctionalGreetingWithProbs from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';



function App() {
  return (
    <div className="App">
      {/*<FunctionalGreetingWithProbs greeting="Nice to meet you!" name="Alaa" age="33" /> */}
      {/*<StatefulGreeting greeting="I'm a statful class compononent" name="YOLO"/> */}
      {/*< StatefulGreetingWithCallbacks /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
