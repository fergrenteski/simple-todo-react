import { useState, useCallback, useMemo } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import Search from "./components/Search";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Criar funcionalidade X no sistema", category: "Trabalho", isCompleted: false },
        { id: 2, text: "Ir para a academia", category: "Pessoal", isCompleted: false },
        { id: 3, text: "Estudar React", category: "Estudos", isCompleted: false },
    ]);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");
    const [category, setCategory] = useState("All");

    // Função otimizada para adicionar uma nova tarefa
    const addTodo = useCallback((text, category) => {
        if (!text || !category) return alert("Preencha todos os campos");

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), text, category, isCompleted: false }
        ]);
    }, []);

    // Função otimizada para remover uma tarefa
    const removeTodo = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }, []);

    // Função otimizada para alternar o estado de conclusão de uma tarefa
    const completeTodo = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.map(todo => 
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }, []);

    // Filtragem e ordenação otimizadas usando useMemo
    const filteredTodos = useMemo(() => {
        return todos
            .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
            .filter(todo => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
            .filter(todo => category === "All" || todo.category === category)
            .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text));
    }, [todos, search, filter, category, sort]);

    return (
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <Search search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} setSort={setSort} category={category} setCategory={setCategory} />
            <div className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;
