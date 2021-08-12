import { bindActionCreators } from 'redux';
import * as todosActions from '@store/actionCreators/todosActions';
import * as filterActions from '@store/actionCreators/filterActions';
import { Todo } from '@common/types/types';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '@store/actions/actionFilterTypes';


export const getVisibleTodos = (todos: Todo[], filter: any) => {
    switch (filter) {
      case SHOW_ALL: return todos
      case SHOW_COMPLETED: return todos.filter(t => t.isComplete)
      case SHOW_ACTIVE: return todos.filter(t => !t.isComplete)
      default: throw new Error('Unknown filter: ' + filter)
    }
}
  
export const mapStateToProps = (state: any) => ({
      todos: getVisibleTodos(state.todosState.todos, state.filterState),
      filter: state.filterState
});

 export const mapDispatchToProps = (dispatch: any) => ({
      todosActions: bindActionCreators(todosActions, dispatch),
      filterActions: bindActionCreators(filterActions, dispatch)
});