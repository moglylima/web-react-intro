# Aula 03 - Revisando

Visando uma melhor compreensão do conteúdo abordado em sala, segue um breve tutorial resumindo os conteúdo apresentados. Como nas aulas anteriores tivemos noções básicas de JavaScript, React e Components JSX, com o intuito de revisar aqui teremos exemplos simples exemplificando o que foi abordado.

### _Roteiro_

- Dica;
- Criação de projeto:
  - O que realmente importa;
  - Estrutura Base;
- Criando Componentes;
- Passando parâmetros via props;
  - Exemplo Calculadora;
  - Calculo IMC;
- Trabalhando com múltiplas funções em um componente.
  - Calculo do IMC retornando situação.

# Dica

Antes de se iniciar é preciso se ter o NodeJS instalado. Uma dica pra quem tiver com dificuldades em realizar a instalação é usar o [NVM](https://github.com/nvm-sh/nvm) uma ferramenta voltada ao gerenciamento de versões Node, atualmente ela se encontra disponível para diversas plataformas(unix, macOS, and [windows WSL](https://github.com/nvm-sh/nvm#important-notes))

# Criando Projeto

Para se criar o projeto será usado a linha de comando a seguir:

    npx create-react-app projeto-nome

### O que realmente importa?

Após a conclusão da criação do projeto será exibido diversas informações no terminal algumas orientações, as que nos interessam são as ultimas, onde teremos duas dicas:

- 1ª - Indicando para navegar até o diretória criado(projeto criado);

```
cd projeto-nome
```

- 2ª - Indicando como executar o projeto.

```
npm start
```

Antes de iniciar o projeto é interessante iniciar o editor de texto, no nosso caso usaremos o VSCode,

    code projeto-nome

### Estrutura Base

```
projeto-01
├── node_modules
|── public
|── src
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
|── .gitignore
|── package-lock.json
|── package.json
```
