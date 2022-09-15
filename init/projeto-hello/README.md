# **Documentação**

Este é o primeiro programa criado utilizando React. Um simples exemplo de um código criado contendo o famigerado "Hello World".

## **Entendendo o que foi feito**

No diretório "projeto-hello" encontram-se alguns arquivos e subdiretórios. Iremos focar no que se encontra dentro do diretório "src". 

### **Components**

No diretório "components" encontram-se os componentes React que iremos utilizar no exemplo. Há apenas um único componente presente neste diretório, o componente "HelloWorld.jsx". Nele, encontra-se o seguinte código:

    import React from  'react'
	    function  HelloWorld(){
		    return(
			    <div>
				    <h1>Hello World...</h1>
			    </div>
		)
	}
    export  default HelloWorld;
O código acima nada mais é que uma função que retorna apenas um html simples contendo a mensagem de "Hello World...". Como há apenas uma única função, retornando apenas um único html, não há problema em utilizar o "export default" para exportar a função.

### **App.js**
No arquivo App.js encontra-se o seguinte código:

    import React from  'react'
    import  './App.css';
    import HelloWorld from  './components/HelloWorld'
    function  App()  {
	    return  (
		    <div  className="App">
		    {/* <h1>
		    Hello World...
		    </h1> */}
		    <HelloWorld  />
		    </div>
	    );
    }
    export  default App;

Para que o componente "Hello World" possa ser utilizado no arquivo "App.js" é necessário importá-lo. Isso é feito na seguinte na seguinte linha:

    import HelloWorld from  './components/HelloWorld'
 Assim, basta chamar o componente "HelloWorld" dentro de App. Para isso, é só escrever, dentro da tag "div", a seguinte linha:

     <HelloWorld  />
E pronto! O componente está sendo chamado e assim, temos executando, nosso primeiro programa utilizando React!

**Observação:** Os demais arquivos e diretórios presentes não são importantes para a compreensão do código, eles são arquivos e diretórios gerados automaticamente ao se criar um novo projeto React.