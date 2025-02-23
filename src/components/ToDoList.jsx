import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function ToDoList() {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchFilter = 
                (filter === 'COMPLETED' && todo.completed) || 
                (filter === 'INCOMPLETED' && !todo.completed) || 
                (filter === 'ALL');
            
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);
            
            return matchFilter && matchSearch;
        });
    });

    console.log('FilteredTodos', filteredTodos);
    return (
        <ul>
            <li className="my-2 text-sm italic"> 
                All Your Notes Here...
            </li> 
            {filteredTodos.map((todo, index) => (
               <TodoItem key={index} todo={todo} index={index}/>
            ))}
        </ul>
    );
}

export default ToDoList;