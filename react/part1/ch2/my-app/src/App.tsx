import React from "react";
import "./App.css";
import Extraction from "./components/2-4.props/Extraction/Extraction";
import FunctionComponent from "./components/2-5.state/FunctionComponent";
import Event from "./components/2-7.event/Event";
import Condition from "./components/2-8.conditional/Condition";
import { Blog, List } from "./components/2-9.list/List";
import Composition from "./components/Composition";

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <FunctionComponent />
      <Event />
      <Condition />
      <List />
      <Blog />
    </div>
  );
}

export default App;
