import './App.css';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookMouse from './components/HookMouse';
import InterveralHookCounter from './components/InterveralHookCounter';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/>
      <hr/>
      <HookCounter2/>
      <hr/>
      <HookCounter3/>
      <hr/>
      <HookCounter4/>
      <hr/>
      <HookMouse/>
      <MouseContainer/>
      <InterveralHookCounter/>
      <DataFetching1/> */}
      <DataFetching2/>
    </div>
  );
}

export default App;
