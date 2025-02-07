# Todo List React

Este projeto é uma aplicação de lista de tarefas (Todo List) construída com React e Vite. A aplicação permite adicionar, remover, completar e filtrar tarefas.

## Funcionalidades

- Adicionar uma nova tarefa com título e categoria.
- Remover uma tarefa existente.
- Marcar uma tarefa como completa ou incompleta.
- Filtrar tarefas por status (todas, completas, incompletas).
- Ordenar tarefas em ordem alfabética (ascendente ou descendente).
- Pesquisar tarefas por título.

## Estrutura do Projeto

- `src/App.jsx`: Componente principal da aplicação que gerencia o estado das tarefas e renderiza os componentes filhos.
- `src/components/Todo.jsx`: Componente para exibir uma tarefa individual.
- `src/components/TodoForm.jsx`: Componente para criar uma nova tarefa.
- `src/components/Filter.jsx`: Componente para filtrar e ordenar tarefas.
- `src/components/Search.jsx`: Componente para pesquisar tarefas.
- `src/App.css`: Estilos da aplicação.

## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd todo-list-react
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

2. Abra o navegador e acesse `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão de produção da aplicação.
- `npm run lint`: Executa o ESLint para verificar problemas no código.
- `npm run preview`: Visualiza a versão de produção da aplicação.

## Configuração do ESLint

O projeto utiliza ESLint com as seguintes configurações:

- `@eslint/js`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

As regras de linting estão definidas no arquivo .

## Estrutura de Arquivos

```plaintext
todo-list-react/
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Filter.jsx
│   │   ├── Search.jsx
│   │   ├── Todo.jsx
│   │   └── TodoForm.jsx
└── eslint.config.js