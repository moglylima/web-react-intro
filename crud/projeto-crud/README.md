# **Documentação** 

## **Sobre o que foi feito**

Neste diretório, encontra-se um projeto com frontend e backend que utiliza o serviço de armazenamento de dados do FireBase do Google. No Console do FireBase, criamos um projeto do FireBase, dentro do projeto, foi criada uma aplicação WEB, onde utilizamos o serviço do FireStorage Database para ser a base de dados deste projeto. 

Para se comunicar com o serviço de FireStorage Database, iniciamos uma nova base de dados no Console do FireBase. Ao iniciá-la, podemos acessar as informações de autenticação nas configurações do app criado dentro do FireBase. Dentre outras informações, temos as informações de como trabalhar com o FireStorage Database importando suas funções para as utilizarmos no nosso projeto React. 

Dito isso, seguindo os passos encontrados no próprio console do FireBase, se estivermos utilizando o NPM (que é o nosso caso) basta rodarmos o seguinte comando no diretório do projeto:

    npm install firebase

Continuando, o passo seguinte é adicionar as informações de autenticação com o serviço do FireStore para que possamos, através da nossa aplicação, nos comunicar com a base de dados no FireBase. Dentre as informações de configuração presentes nas configurações do seu aplicativo no console do FireBase, encontra-se uma variável "const" chamada "firebaseConfig" que segue o seguinte formato:

    const firebaseConfig = {
        apiKey: "ExampleApiKey",
        authDomain: "example.firebaseapp.com",
        projectId: "example",
        storageBucket: "example.appspot.com",
        messagingSenderId: "000000000000",
        appId: "0:aaa:0000:bbb"
    };

Em "src", crie um diretório chamado "keys", em seguida, dentro de "keys", crie um arquivo chamado "FirebaseKey.js". Nesse arquivo, jogue apenas as informações presentes na variável apresentada acima, da forma como elas estão lá. Ainda nesse arquivo, ao final dele, fora das chaves da variável "firebaseConfig", adicione a seguinte linha:

    export {firebaseConfig};

É preciso adicionar dessa forma, para que, ao clonar este repositório e tentar replicar essa aplicação, ela funcione corretamente. Os demais arquivos, como estão, já estão prontos e funcionando corretamente.

Este projeto cria uma aplicação WEB, que possui interação com o banco de dados do serviço FireStorage DataBase do FireBase. O FireBase utiliza o conceito de coleções, e, neste caso, temos duas coleções, a coleção "student" e a coleção "teacher". 

O código desenvolvido é capaz de criar e adicionar, editar e excluir objetos dentro de cada coleção. Portanto, aqui criamos "estudantes" e "professores", e somos capazes de editar as entradas e excluir as entradas diretamente no frontend, adicionando as funções do FireStorage no projeto e as implementando como ações nos botões dos formulários.

Sinta-se à vontade para clonar este repositório e replicar essa aplicação!
## **Observação Importante**


Temos que nos atentar para algumas informações de suma importância. Como é possível notar, neste projeto não foi adicionado o diretório "keys" que contém o arquivo "FirebaseKey.js". Isso aconteceu porque esse diretório possui arquivos com informações sensíveis, onde qualquer pessoa portando essas informações seria capaz de interagir com o serviço do FireStorage que utilizamos aqui, portanto, se você quiser subir esse projeto no seu repositório GitHub, no arquivo ".gitignore", adicione a seguinte linha, abaixo do comentário "#dependencies":

    /src/keys

Feito isso, o diretório que contém seus arquivos de autenticação no FireStorage não serão adicionados ao seu repositório do GitHub ao enviar o projeto.

## **Observações adicionais**

Caso você queira entender melhor sobre como utilizar o serviço do FireBase para intregrá-lo com seus projetos, sugerimos consultar a documentação, que pode ser consultada através do seguinte link:

    https://firebase.google.com/docs?authuser=0&hl=pt

Você pode acessar o serviço do FireBase através do seu e-mail do Gmail.

Além do FireBase, outros recursos que precisam ser instalados no diretório desse projeto são o BootStrap e React Router Dom.

O BootStrap, necessário para o uso de estilos CSS prontos, pode ser instalado com o seguinte comando:

    npm install bootstrap

O React Router Dom, necessário para a utilização de rotas, pode ser instalado com:

    npm install react-router-dom