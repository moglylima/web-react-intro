# **Documentação** 

## **Sobre o que foi feito**

Neste diretório, encontra-se o código de um programa que recebe apresenta três cidades na tela, os botões azuis, de acordo com o nome, definem os votos para cada cidade. O botão vermelho encerra a votação e apresenta um "alert!" na tela para mostrar o vencedor.

Em components, no diretório VotaCidades, temos o componente "VotaCidades.jsx" onde encontra-se o código do programa de votação de cidades. No arquivo encontram-se as variáveis referentes às cidades, as funções de votar em cada cidade, e o retorno de um formulário com os botões de votar em cada cidade e de encerrar a votação.

No código, foram adicionados estilos CSS prontos utilizando o BootStrap. Para maiores informações sobra como utlizar a biblioteca do BootStrap, aconselhamos ler a documentação. Abaixo, segue o link da documentação da versão mais atual do BootStrap, no momento.

    https://getbootstrap.com/docs/5.2/getting-started/introduction/

Para utilizar a biblioteca do BootStrap no seu projeto React, basta instalar utilizando o seguinte comando (via terminal, powershell):

    npm install bootstrap

O comando acima instalará a versão mais recente do BootStrap. Vale lembrar que você deve rodar o comando no diretório do seu projeto. Para importar os estilos prontos do BootStrap em um arquivo de código, basta utilizar o seguinte import:

    import "bootstrap/dist/css/bootstrap.min.css"

Copie e cole o código e teste esse programa de votação de cidades! Definimos as cidades "padrão" como Cratéus, Quixadá e Limoeiro, mas sinta-se livre para alterar os nomes das cidades para realizar votações com outras cidades! Você também pode adaptar o código para ser uma votação de sabores ou tipos de carros, por exemplo, basta alterar os nomes nas variáveis e nos formulários.
## **Observações**

Neste projeto, adicionamos estilos CSS prontos com o BootStrap. Utilizamos esses estilos de forma simples, apenas para adicionarmos cores aos botões e ajustarmos seu posicionamento.