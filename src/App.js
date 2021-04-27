import React from "react";
import "./App.css";
import ComponentC from "./components/ContextApiUse/ComponentC";
import DataFetching1 from "./components/UseEffectAndState/DataFetching1";
import DataFetching2 from "./components/UseEffectAndState/DataFetching2";
import DataFetching3 from "./components/UseEffectAndState/DataFetching3";
import DataFetching4 from "./components/UseEffectAndState/DataFetching4.js";
import DataFetching5 from "./components/UseEffectAndState/DataFetching5";
import HookCounter from "./components/UseEffectAndState/HookCounter";
import HookCounter2 from "./components/UseEffectAndState/HookCounter2";
import HookCounter3 from "./components/UseEffectAndState/HookCounter3";
import HookCounter4 from "./components/UseEffectAndState/HookCounter4";
import HookMouse from "./components/UseEffectAndState/HookMouse";
import InterveralHookCounter from "./components/UseEffectAndState/InterveralHookCounter";
import MouseContainer from "./components/UseEffectAndState/MouseContainer";
import Counter1 from "./components/UseReducerUse/Counter1";
import Counter2 from "./components/UseReducerUse/Counter2";
import Counter3 from "./components/UseReducerUse/Counter3";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Affan Habib"}>
        {/* <HookCounter />
        <hr />
        <HookCounter2 />
        <hr />
        <HookCounter3 />
        <hr />
        <HookCounter4 />
        <hr />
        <HookMouse />
        <hr/>
        <MouseContainer />
        <hr/>
        <InterveralHookCounter />
        <hr/>
        <DataFetching1 />
        <hr/>
        <DataFetching2 />
        <hr/>
        <DataFetching3 />
        <hr/>
        <DataFetching4 />
        <hr/>
        <DataFetching5 />
        <hr/>
        <ComponentC /> */}
        <hr/>
        <Counter1/>
        <hr/>
        <Counter2/>
        <hr/>
        <Counter3/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
