import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <h2>Criar Tarefa</h2>
        <form>
            <input type="text" placeholder='Digite um Título'/>
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm