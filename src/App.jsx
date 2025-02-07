import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import Search from "./components/Search";
import "./App.css";

function App() {
    // Estado inicial das tarefas
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir pra academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        },
    ]);

    // Função para adicionar uma nova tarefa
    const addTodo = (text, category) => {
        if(!text || !category) { return alert('Preencha todos os campos') }
        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
            },
        ];
        setTodos(newTodos);
    };

    // Função para remover uma tarefa
    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) =>
            todo.id !== id ? todo : null
        );
        setTodos(filteredTodos);
    };

    // Função para marcar uma tarefa como completa/incompleta
    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
        });
        setTodos(newTodos);
    };

    // Estado para a busca de tarefas
    const [search, setSearch] = useState("");

    // Estado para o filtro de tarefas
    const [filter, setFilter] = useState("All");
    // Estado para a ordenação das tarefas
    const [sort, setSort] = useState("Asc");

    return (
        <div className="app">
            <h1>Lista de Tarefas</h1>
            {/* Componente de busca */}
            <Search search={search} setSearch={setSearch} />
            {/* Componente de filtro */}
            <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
            <div className="todo-list">
                {todos
                    // Filtra as tarefas com base na busca
                    .filter((todo) =>
                        todo.text.toLowerCase().includes(search.toLowerCase())
                    )
                    // Filtra as tarefas com base no filtro selecionado
                    .filter((todo) => {
                        if (filter === "All") return true;
                        if (filter === "Completed") return todo.isCompleted;
                        return !todo.isCompleted;
                    })
                    // Ordena as tarefas com base na ordem selecionada
                    .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
                    // Mapeia as tarefas para o componente Todo
                    .map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            completeTodo={completeTodo}
                        />
                    ))}
            </div>
            {/* Componente de formulário para adicionar novas tarefas */}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;
