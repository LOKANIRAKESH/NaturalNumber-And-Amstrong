import {useState} from 'react';
function Natural(props)
{
    const [num,setNum] = useState();
    const [res,setRes] = useState([]);
    function handleNumber(event)
    {
        setNum(event.target.value);
    }
    function handlebutton(event)
    {
        setRes([]);
        let numbers=[];
        for(let i=1;i<=parseInt(num);i++)
        {
            numbers.push(i);
            numbers.push(" ");
        }
        setRes(numbers);
    }
    function handleReset(event)
    {
        event.preventDefault();
        setNum(0);
        setRes([]);
    }
    return (

        <div>
        <h1>Natural Numbers </h1>
        <input type="number" onChange={handleNumber} value={num}></input>
        <h1>{res}</h1>
        <button onClick={handlebutton}>GetNumber</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    );
}
export default Natural; 