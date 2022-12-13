import React from "react";

const IMC = ({peso, altura}) => {

    function calcularImc() {
        return peso / (altura**2)
    }

    const imc = calcularImc();

    function situacao() {
        if (imc <= 18.49) {
            return (
                <div>
                    Abaixo do peso!
                </div>
            )
        } else if (imc >= 18.50 && imc <= 24.99) {
            return (
                <div>
                    Peso normal!
                </div>
            )
        } else if (imc >= 25 && imc <= 29.99) {
            return (
                <div>
                    Sobrepeso!
                </div>
            )
        } else if (imc >= 30 && imc <= 34.99) {
            return (
                <div>
                    Obesidade Grau I!
                </div>
            )
        } else if (imc >= 35 && imc <= 40) {
            return (
                <div>
                    Obesidade Grau II!
                </div>
            )
        } else {
            return (
                <div>
                    Obesidade Mórbida!
                </div>
            )
        }
    }
    return (
        <div>
            <br />
            <h1> IMC </h1>
            O seu IMC é: {imc.toFixed(2)}
            <br />
            A sua situação é: {situacao()}
        </div>
    )
}

export default IMC;