import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import PropTypes from 'prop-types';
import Message from "./components/message/Message";
import {Footer} from "./components/todo/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {

  static contextTypes = {
    route: PropTypes.string
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Todo</h2>
        </div>
        <Router>
          <div className="Todo-App">
            <Message/>
            <TodoForm/>
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter}/>
            )}/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
