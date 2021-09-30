import Web3 from "web3";
import React, { useEffect, useState } from "react";

const ETHAddress = ()=>{

  const [ethname, setETHName] = useState("");
  const [myresult, setResult] = useState(null);
  const [web3, setWeb] = useState(new Web3());

  const getBalance = async() => {
    web3.eth.getBalance(ethname, (err, result1) => {
      if (err) {
        console.log(err);
      } else {
        setResult(web3.utils.fromWei(result1, "ether"));
      }
    });
  };



  useEffect(() => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/e1e1503ef9c84471864cffb4f252ef66"
      )
    );
    console.log(web3);
    setWeb(web3);
  }, []);

  const onChangeValue=(e)=>{
      setETHName(e.target.value);
  }


    return(
      <div className="container"> 
      <form
        className="form-element"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          className="user-element2"
          htmlFor="username"
        >
          Ether Balance
        </label>
        <div className="div-2">
          <label
            className="title"
            htmlFor="username"
          >
           Enter Wallet address
          </label>
          <br></br>
          <input
            className="input-box"
            type="text"
            id="username"
            onChange={onChangeValue}
            value={ethname}
          />
        </div>
        <div className="div-3">
          <button
            className="btn"
            onClick={getBalance}
          >
            Show Balance Adress
          </button>
        </div>
        {myresult ? (
          <label
            className="balance"
            htmlFor="username"
          >
            {`Your Balance : ${myresult}  ETH`}
          </label>
        ) : null}
      </form>
    </div>
    )
}
export default ETHAddress;