import React from 'react'

function Calculadora(props){

    function soma(valor1, valor2){
        
        return (valor1+valor2)
    }
    
    return(
        <div>
            <h1>{soma(props.x, props.y)}</h1>
        </div>
    )
}

export default Calculadora