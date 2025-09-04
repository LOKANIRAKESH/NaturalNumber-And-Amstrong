import React,{useState} from 'react';
function Validation(props)
{
    function handleEvent(event) {
        var t = event.target.value;
        var valid = true;
        for (var i = 0; i < t.length; i++) {
            if (t.charCodeAt(i) >= 48 && t.charCodeAt(i) <= 57) {
                continue;
            }
            else {
                valid = false;
                break;
            }
        }
        if(!valid)
        {
            props.setError("Enter Only Numbers");
            props.setNum("");
        }
        else
        {
            props.setNum(t);
            props.setError("");
        }
        
    }
    return (
        <div>
            <table>
                <tr>
                    <td>
                            <input value={props.value} placeHolder={props.placeHolder} onChange={handleEvent}></input><b/>
                    </td>
                </tr>
                
            </table>
           
            
        </div>
    );
}
export default Validation;