import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
    minHeight: 25,
    padding: '0 15px',
    fontSize: '16px',
  },
  todoList: {
    border: '1px solid #aaa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '600px',
    padding: '10px',
    backgroundColor: '#b2fef7',
  },
  addTodo: {
    border: '1px solid #aaa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '300px',
    padding: '10px',
    backgroundColor: '#b2fef7',
    marginLeft: '10px',
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px',
    margin: '5px',
  }
});