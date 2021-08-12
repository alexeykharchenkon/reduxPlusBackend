import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import { Todo } from '@common/types/types';
import { AddTodo } from '@components/AddTodo';
import { TodoList } from '@components/TodoList';
import { useStyles } from '@styles/material';
import Typography from '@material-ui/core/Typography';
import { TodosFilter } from '@components/TodosFilter';
import { mapStateToProps, mapDispatchToProps } from '@services/initAppProps';
import '@styles/main.css';


interface AppProps {
    todos: Todo[];
    filter: any;
    todosActions: any;
    filterActions: any;
}

const App = ({todos, todosActions, filterActions, filter} : AppProps) => {
  const classes = useStyles();
  const { addTodo, toggleTodo, deleteTodo, loadTodos, deleteAllTodos } = todosActions;
  const { setFilter } = filterActions;

  useEffect(() => {loadTodos()}, [loadTodos]);

  return (
    <div className="main">
      <Card className={classes.todoList}>
        <Typography variant="h4">Todo List</Typography>
        <TodosFilter setFilter={setFilter} filter={filter} />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
      </Card>
      <Card className={classes.addTodo}>
          <AddTodo 
            addTodo={addTodo} 
            deleteAllTodos={deleteAllTodos}
          />
      </Card>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)