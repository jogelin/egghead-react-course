import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {formUpdate, saveTodo} from "./redux/todo.actions";

class TodoForm extends Component {

  handleInputChange = (evt) => {
    const val = evt.target.value;
    this.props.formUpdate(val);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={this.handleInputChange}
               value={this.props.currentTodo}/>
        <button>Submit</button>
      </form>
    );
  }
}

/*

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
*/

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}),
  {formUpdate, saveTodo}
)(TodoForm);