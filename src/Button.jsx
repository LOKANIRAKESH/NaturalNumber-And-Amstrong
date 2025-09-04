import './Button.css';
import Result from './Result.jsx';
function Button(props)
{
     console.log("props",props.values[0])
    function calculate(event)
    {
         console.log("inside calculate")
        const num1 = parseInt(props.values[0].value);
      
        const num2 = parseInt(props.values[1].value);
          console.log("num1",num1);
        if (props.data==="+")
        {
            console.log(num1);
            console.log(num2);
            if(num1 && num2)
            {
                 console.log("num1",num1)
                  console.log("num2",num2)
                props.values[2].setResult(num1+num2);
            }
            else{
                if(!num1 && !num2)
                {
                    props.values[2].setResult("Enter the Number 1 & 2 :");
                }
                else if(!num1)
                {
                    props.values[2].setResult("Enter the Number 1 :");
                }
                else
                {
                    props.values[2].setResult("Enter the Number 2 :");
                }
                
            }
        }
    }
    return (
        
            <div><button onClick={calculate}>{props.data}</button></div>
            
       
    );
}
export default Button;