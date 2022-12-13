# **Documentação**

Este programa é um exemplo simples de um código de uma calculadora simples, com duas operações: adição e subtração.

## **Entendendo o que foi feito**

Neste diretório encontram-se alguns arquivos e subdiretórios. Iremos focar no que se encontra dentro do diretório "src". 

### **Components**

No diretório "components" encontram-se os componentes React que iremos utilizar no exemplo. Há apenas um único componente presente nesse diretório, o componente "Calculadora", um diretório que contém o arquivo Calculadora.jsx. Nele, encontra-se o seguinte código:

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
    
O código apresentado acima apresenta um código simples de uma calculadora com operações básicas de adição e subtração. Como há apenas uma única função, com apenas um único retorno, não há problema em utilizar o "export default" para exportar a função.

### **App.js**
No arquivo App.js encontra-se o seguinte código:

    import './App.css';
    import Calculadora from './components/Calculadora/Calculadora';

    function App() {
    return (
        <div className="App">
            <Calculadora opt={"+"} a={27} b={81} />
        </div>
    );
    }

    export default App;

Para que o componente "Calculadora" possa ser utilizado no arquivo "App.js" é necessário importá-lo. Isso é feito na seguinte na seguinte linha:

    import Calculadora from './components/Calculadora/Calculadora';

 Assim, basta chamar o componente "Calculadora" dentro de App. Para isso, é só escrever, dentro da tag "div" do App, a seguinte linha:

     <Calculadora opt={"+"} a={27} b={81} />

A linha acima "chama" o componente "Calculadora" importado no App e o utiliza conforme ele foi especificado no diretório do componente. Como esse código é apenas um exemplo introdutório, não há interação com o usuário e, portanto, na chamada do componente passamos os parâmetros para que ele funcione adequadamente. 

Por fim, o código deverá retorna um html simples, que retorna apenas o resultado do cálculo de soma ou subtração, conforme especificado no código. Há também a opção de não retornar nada, caso uma operação inválida seja especificada. Copie o código e teste para testar a calculadora simples!

**Observação:** Os demais arquivos e diretórios presentes não são importantes para a compreensão do código, eles são arquivos e diretórios gerados automaticamente ao se criar um novo projeto React.