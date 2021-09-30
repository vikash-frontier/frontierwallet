import React from "react";
import "./App.css";
import ETHAddress from "./components/ETHAddress";
import ETHName from "./components/ETHName";

function App() {
 
  return (
    <React.Fragment>
     <ETHAddress />
     <ETHName />
     </React.Fragment>
  );
}

export default App;