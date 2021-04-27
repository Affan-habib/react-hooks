import React from "react";
import "./App.css";
import ComponentC from "./components/ContextApiUse/ComponentC";
import exmple1 from "./components/ContextApiUse/ComponentC";
import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";
import DataFetching3 from "./components/DataFetching3";
import DataFetching4 from "./components/DataFetching4.js";
import DataFetching5 from "./components/DataFetching5";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import HookMouse from "./components/HookMouse";
import InterveralHookCounter from "./components/InterveralHookCounter";
import MouseContainer from "./components/MouseContainer";

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Affan Habib"}>
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
        {/* <DataFetching2/> */}
        {/* <DataFetching3/> */}
        {/* <DataFetching4/>
      <DataFetching5/> */}
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
