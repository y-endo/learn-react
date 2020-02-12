import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class App extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="container">
          <header className="header">
            <h1 className="title">TODO</h1>
            <AddTodo />
          </header>
          <TodoList todo={this.props.todo} />
        </section>
      </main>
    );
  }
}

App.propTypes = {
  todo: PropTypes.object
};
