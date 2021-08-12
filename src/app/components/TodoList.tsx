import React from 'react';
import { Todo } from '@common/types/types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: any;
    deleteTodo: any;
}

export const TodoList = ({todos, toggleTodo, deleteTodo} : TodoListProps) => {
  return (
    <ul className="list">
        {todos?.map((todo, index) => (
            <li key={todo.id}>
                <TodoItem 
                  index={index}
                  todo={todo} 
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
            </li>
        ))}
    </ul>
  );
}