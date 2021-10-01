import React,{useEffect,useState} from "react";
import Web3 from "web3";
import abi from "./ABI";

const ContractAddress=()=>{
    
    const [web3,setWeb]=useState(new Web3());
    const [tname,setTName]=useState("");
    const [myresult, setResult] = useState(null);

    console.log(Web3);
    useEffect(() => {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(
            "https://mainnet.infura.io/v3/e1e1503ef9c84471864cffb4f252ef66"
          )
        );
        // console.log(web3);
        setWeb(web3);
      }, []);

      const getBalance=async()=>{
        var contract=new web3.eth.Contract(abi,tname);
        contract.methods.balanceOf(tname).call((err,res)=>{
            // console.log(web3.utils.fromWei(res, "ether"));
            if(err){
                console.log(err);
            }else{
                setResult(web3.utils.fromWei(res,'ether'))
            }
        });
      }

      const onChangeValue=(e)=>{
          setTName(e.target.value);
      }

    // var contractAddress='0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';

    // var contract=new web3.eth.Contract(abi,contractAddress);
    // contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err,res)=>{
    //    console.log(web3.utils.fromWei(res, "ether"));
    // });
    // console.log(contract.methods)
    // // console.log(abi);


    //  console.log(web3);
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
              value={tname}
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
              {`Your Balance : ${myresult.toFixed(2)}`}
            </label>
          ) : null}
        </form>
      </div>
      )
}

export default ContractAddress;