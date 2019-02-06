import React from 'react';

import TodolistItem from '../todo-list-item';
import './todo-list.css';

const Todolist = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
            <TodolistItem { ...itemProps} 
            onDeleted={() => onDeleted(id)} 
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
            />
            </li>
        );
    });
   
    return (
    <ul className="list-group todo-list">  
        { elements }

    </ul>
    );
};

export default Todolist;