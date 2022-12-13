# **Documentação**

Este programa é um exemplo simples de um código de uma calculadora de IMC.

## **Entendendo o que foi feito**

Neste diretório encontram-se alguns arquivos e subdiretórios. Iremos focar no que se encontra dentro do diretório "src". 

### **Components**

No diretório "components" encontram-se os componentes React que iremos utilizar no exemplo. Há apenas um único componente presente nesse diretório, o componente "IMC", um diretório que contém o arquivo IMC.jsx. Nele, encontra-se o seguinte código:

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
    
O código apresentada acima apresenta um código simples de uma calculadora de IMC. Como há apenas uma única função, com apenas um único retorno, não há problema em utilizar o "export default" para exportar a função.

### **App.js**
No arquivo App.js encontra-se o seguinte código:

    import IMC from './components/IMC/IMC';
    import './App.css';

    function App() {
        return (
            <div className="App">
                <IMC peso={84.20} altura ={1.85} />
            </div>
        );
    }

    export default App;

Para que o componente "IMC" possa ser utilizado no arquivo "App.js" é necessário importá-lo. Isso é feito na seguinte na seguinte linha:

    import IMC from './components/IMC/IMC';

 Assim, basta chamar o componente "IMC" dentro de App. Para isso, é só escrever, dentro da tag "div" do App, a seguinte linha:

     <IMC peso={84.20} altura ={1.85} />

A linha acima "chama" o componente "IMC" importado no App e o utiliza conforme ele foi especificado no diretório do componente. Como esse código é apenas um exemplo introdutório, não há interação com o usuário e, portanto, na chamada do componente passamos os parâmetros para que ele funcione adequadamente. 

Por fim, o código deverá retorna um html simples, que retorna apenas o resultado do cálculo do IMC e a situação correpondente. Copie o código e teste para verificar o seu IMC!

**Observação:** Os demais arquivos e diretórios presentes não são importantes para a compreensão do código, eles são arquivos e diretórios gerados automaticamente ao se criar um novo projeto React.
