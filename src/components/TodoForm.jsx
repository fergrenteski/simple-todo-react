import { useState } from 'react'
import { PropTypes } from "prop-types";

const TodoForm = ( { addTodo }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        setCategory('');
    };

  return (
    <div>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder='Digite um Título' 
                value = {value}
                onChange={(e) => setValue(e.target.value)}/>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit" onClick={() => addTodo(value, category)}>Criar Tarefa</button>
        </form>
    </div>
  )
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default TodoForm