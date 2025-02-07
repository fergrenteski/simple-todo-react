import { PropTypes } from "prop-types";

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div key={todo.id} className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="categoria">({todo.category})</p>
            </div>
            <div className="actions">
                <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,  
    completeTodo: PropTypes.func.isRequired,
};

export default Todo;
