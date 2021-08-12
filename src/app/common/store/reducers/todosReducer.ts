import { Todo } from "@common/types/types";
import { initialState } from "@store/initialState";
import { ADD_TODO_SUCCESS, ADD_TODO_STARTED, ADD_TODO_FAILURE, 
  LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE, LOAD_TODOS_STARTED, 
  DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,DELETE_TODO_STARTED,
  TOGGLE_TODO_SUCCESS, TOGGLE_TODO_STARTED,
  TOGGLE_TODO_FAILURE} from "@store/actions/actionTodoTypes";

export const todosReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case ADD_TODO_STARTED:
        return state;
      case ADD_TODO_FAILURE:
        return state;
      case ADD_TODO_SUCCESS:
        return {
          ...state,
         todos: [...state.todos, {
            id: action.todo.id,
            title: action.todo.title,
            isComplete: false
          }]
        }
      case TOGGLE_TODO_SUCCESS:
        return {
          ...state,
          todos: state.todos.map((todo: any) => {
            if (todo.id === action.id) { return { ...todo, isComplete: !todo.isComplete }}
            return todo;
        })
      }
      case TOGGLE_TODO_FAILURE:
        return state;
      case TOGGLE_TODO_STARTED:
      return state;
      case DELETE_TODO_SUCCESS:
        return {...state, todos: state.todos.filter((t:Todo) => t.id !== action.id)}
      case DELETE_TODO_FAILURE:
          return state;
      case DELETE_TODO_STARTED:
        return state;
      case LOAD_TODOS_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, ...action.todos.map((todo: any) => ({ ...todo }))]
        }
      case LOAD_TODOS_FAILURE:
        return state;
      case LOAD_TODOS_STARTED:
        return state;
      default:
        return state;
    }
  }