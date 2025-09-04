import {useState} from 'react'
function Amstrong(props)
{
    const [num,setNumb] = useState(0);
    const [ans,setAns] = useState("Enter the Number");
    function handleNumber(event)
    {
        setNumb(event.target.value);
    }
    function handleButton(event)
    {
        event.preventDefault();
    let c = 0;
    let number  = parseInt(num);
    let temp = number;
    while(temp!==0)
    {
        c++;
        temp=Math.floor(temp/10);
        console.log(temp)
    }
    console.log("count" ,c);
    temp = number;
    let sum = 0;
    while (temp!==0)
    {
        sum = sum + Math.pow(temp%10,c);
        temp = Math.floor(temp/10);
    }
    
    if(sum===number)
    {
        setAns("Given number is amstrong number");
    }
    else
    {
        setAns("Given number not is amstrong number");
    }
    }
    return (
       <div>
            <h1>Amstrong Number</h1>
            <input onChange={handleNumber} value={num} type="text"></input>
            <button onClick={handleButton}>Check</button>
            {ans}
       </div>
    );

}
export default Amstrong;