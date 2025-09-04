import Validation from './Validation.jsx';
import {useState} from 'react';
import Button from './Button.jsx';
import './inputs.css';
import './Art.css';
function App()
{
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [error1,setError1] = useState(true);
  const [error2,setError2] = useState(true);
  const [result,setResult] = useState(false);
  const properties = [ {
    value : num1,
    setNum : setNum1,
    setError : setError1,
    error : error1,
    placeHolder : "Enter number 1"
  },
  {
    value : num2,
    setNum : setNum2,
    setError : setError2,
    error : error2,
    placeHolder : "Enter number 2"
  },
  {
    result : result,
    setResult : setResult
  }
]
  const res = {};
  return (
    <div>
      <div class = "values">
      <div ><Validation {...properties[0]} ></Validation></div>
      <div ><Validation {...properties[1]} ></Validation> </div>
      <div>{properties[2].result || <h1>{properties[2].result}</h1>}</div>
      </div>
      <div><div><Button data="+" values={properties}></Button></div></div>
    </div>
  );
}
export default App;