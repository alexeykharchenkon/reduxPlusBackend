import axios from 'axios';
import { Todo } from "@common/types/types";
import { ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS, 
  DELETE_TODO_FAILURE, DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, 
  LOAD_TODOS_FAILURE, LOAD_TODOS_STARTED, LOAD_TODOS_SUCCESS, 
  TOGGLE_TODO_FAILURE,TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS } 
from "@store/actions/actionTodoTypes";

export const addTodo = (title: string) => {
    return (dispatch : any) => {
     dispatch(addTodoStarted());

      axios.post(`https://localhost:44351/api/TodoItems`, {
        title: title,
        isComplete: false
      })
      .then(res => {dispatch(addTodoSuccess(res.data))})
      .catch(err => {dispatch(addTodoFailure(err.message))});
    }
}
const addTodoSuccess = (todo: Todo) => ({type: ADD_TODO_SUCCESS, todo});
const addTodoStarted = () => ({type: ADD_TODO_STARTED});
const addTodoFailure = (error: any) => ({type: ADD_TODO_FAILURE, error});

export const deleteTodo = (id: any) => {
  return (dispatch : any) => {
   dispatch(deleteTodoStarted());

    axios.delete(`https://localhost:44351/api/TodoItems/${id}`)
    .then(res => {dispatch(deleteTodoSuccess(id))})
    .catch(err => {dispatch(deleteTodoFailure(err.message))});
  }
}
const deleteTodoSuccess = (id: string) => ({ type: DELETE_TODO_SUCCESS, id });
const deleteTodoStarted = () => ({ type: DELETE_TODO_STARTED });
const deleteTodoFailure = (error: any) => ({ type: DELETE_TODO_FAILURE, error });

export const loadTodos = () => {
    return (dispatch : any) => {
      dispatch(loadTodosStarted());

      axios.get('https://localhost:44351/api/TodoItems')
      .then(res => { dispatch(loadTodosSuccess(res.data)) })
      .catch(err => { dispatch(loadTodosFailure(err.message)) });
    }
}
const loadTodosSuccess = (todos: Todo[]) => ({type: LOAD_TODOS_SUCCESS, todos});
const loadTodosStarted = () => ({type: LOAD_TODOS_STARTED});
const loadTodosFailure = (error: any) => ({type: LOAD_TODOS_FAILURE, error});

export const toggleTodo = (todo: Todo) => {
  return (dispatch : any) => {
    dispatch(toggleTodoStarted());

    axios.put(`https://localhost:44351/api/TodoItems/${todo.id}`, {
      id: +todo.id,
      title: todo.title,
      isComplete: !todo.isComplete
    })
    .then(res => {dispatch(toggleTodoSuccess(todo.id))})
    .catch(err => {dispatch(toggleTodoFailure(err.message))});
  }
}
const toggleTodoSuccess = (id: string) => ({ type: TOGGLE_TODO_SUCCESS, id });
const toggleTodoStarted = () => ({ type: TOGGLE_TODO_STARTED });
const toggleTodoFailure = (error: any) => ({ type: TOGGLE_TODO_FAILURE, error });
