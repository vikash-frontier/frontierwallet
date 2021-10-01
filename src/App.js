import React from "react";
import "./App.css";
import ETHAddress from "./components/ETHAddress";
import ETHName from "./components/ETHName";
import ContractAddress from "./components/ContractAddress";

function App() {
 
  return (
    <React.Fragment>
     {/* <ETHAddress />
     <ETHName /> */}
      <ContractAddress />
     </React.Fragment>
  );
}

export default App;