import React from 'react';
import { Todo } from '@common/types/types';
import Card from '@material-ui/core/Card';
import { useStyles } from '@styles/material';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: any;
    deleteTodo: any;
    index: number;
}

export const TodoItem = ({todo, toggleTodo, deleteTodo, index} : TodoItemProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.todoItem}>
        <div style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>
          {index + 1}) {todo.title}
        </div>
        <div>
          <Checkbox
            checked={ todo.isComplete }
            onChange={() => toggleTodo(todo)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <IconButton 
            aria-label="delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </div>
    </Card>
  );
}

