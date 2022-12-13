import React from "react";

function Calculadora(props){
    
    const {opt, a, b} = props

    function soma(){
        return a + b
    }

    function subt(){
        return a - b
    }

    if (opt === "+")
        return (
            <div>
                <h1>Calculadora</h1>
                O resultado é: {soma()}
            </div>
        )
    else if (opt === "-")
        return (
            <div>
                <h1>Calculadora</h1>
                O resultado é: {subt()}
            </div>
        )
    return (
        <div>
            <h1>Calculadora</h1>
            Operação indisponível!
        </div>
    )
}

export default Calculadora;