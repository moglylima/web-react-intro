import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Calculadora = () => {

    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(0);
    
    const soma  = () => {
        setResult(parseFloat(numberOne) + parseFloat(numberTwo));
    }
    const subt = () => {
        setResult(parseFloat(numberOne) - parseFloat(numberTwo));
    }
    const mult  = () => {
        setResult(parseFloat(numberOne) * parseFloat(numberTwo));
    }
    const divi  = () => {
        setResult(parseFloat(numberOne) / parseFloat(numberTwo));
    }


    return (
        <div>
            <h1> Calculadora </h1>
            <div>
            <input 
            type="number"
            value={numberOne}
            onChange={(event) => setNumberOne(event.target.value)} />

            <input 
            type="number"
            value={numberTwo}
            onChange={(event) => setNumberTwo(event.target.value)} />
            </div>

            <div>
            <button className="btn btn-primary" onClick={soma}>+</button>
            <span style={{paddingLeft:15}}/>
            <button className="btn btn-primary" onClick={subt}>-</button>
            <span style={{paddingLeft:15}}/>
            <button className="btn btn-primary" onClick={mult}>*</button>
            <span style={{paddingLeft:15}}/>
            <button className="btn btn-primary" onClick={divi}>/</button>            
            </div>

            <label> Resultado: {result} </label>
        </div>
    )
}

export default Calculadora;