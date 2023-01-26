import { useState } from "react";
import propTypes from "prop-types";

export const CounterApp = ({value}) =>{

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // console.log(event)
        setCounter (counter + 1);
        // setCounter ( (c) => c + 1 ); 
    }
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);
    
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        
        <button onClick={  handleAdd }>+1</button>    
        <button onClick={  handleSubtract }>-1</button>    
        <button onClick={  handleReset }>Reset</button>    
        </>
    )

}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

// CounterApp.defaultProps = {
//     value: 0987876
// } 