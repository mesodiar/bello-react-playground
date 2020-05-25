import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";
import NameForm from "./NameForm";
import Routing from "./Routing";
import "./App.css";

function App() {
  return (
    <div>
      <Clock />
      <Toggle />
      <NameForm />
      <Routing />
    </div>
  );
}

export default App;
