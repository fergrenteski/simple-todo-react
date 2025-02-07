import { useState } from "react";
import PropTypes from "prop-types";

// Componente de formulário para adicionar novas tarefas
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim() || !category) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        addTodo(value, category);
        setValue("");
        setCategory("");
    };

    return (
        <div>
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text"
                        placeholder="Digite um Título"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}/>
                </label>
                <label>
                    Categoria:
                    <select value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Pessoal">Pessoal</option>
                    </select>
                </label>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
