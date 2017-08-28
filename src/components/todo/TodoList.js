import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {loadTodos, removeTodo, toggleTodo} from "./redux/todo.actions";
import {getFilteredTodos} from "./redux/todo.queries";

const TodoListItem = ({id, name, isComplete, toggleTodo, removeTodo}) => {
  return (
    <li>
      <span className="delete-item">
        <button href="#" onClick={() => removeTodo(id)}>x</button>
      </span>
      <input type="checkbox"
             onChange={() => toggleTodo(id)}
             checked={isComplete}/>{name}
    </li>
  );
};

class TodoList extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo =>
            <TodoListItem key={todo.id}
                          toggleTodo={this.props.toggleTodo}
                          removeTodo={this.props.removeTodo}
                          {...todo}/>)}
        </ul>
      </div>
    );
  }
}

/*TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};*/

export default connect(
  (state, ownProps) => ({todos: getFilteredTodos(state.todo.todos, ownProps.filter)}),
  {loadTodos, toggleTodo, removeTodo}
)(TodoList);