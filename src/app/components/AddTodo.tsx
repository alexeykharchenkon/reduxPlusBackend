import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface AddTodoProps {
    addTodo: any;
    deleteAllTodos: any;
}

export const AddTodo = ({addTodo, deleteAllTodos} : AddTodoProps) => {
  const [title, setTitle] = useState<string>("");

  return (
    <div className="addTodoMain">
       <Typography variant="h5">
          Todo Actions
        </Typography>
      <div className="form">
        <TextField 
            value={title}
            name="title" 
            label="Enter Todo" 
            onChange={e => setTitle(e.target.value)}
        />
        <Button 
            onClick={() => {
              addTodo(title);
              setTitle("");
            }}
            variant="contained" color="primary"
            style={{marginLeft: '10px'}}
        >
            Add
        </Button>
      </div>
    </div>
  );
}