import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  render() {
    return <li className="todo-list__item">{this.props.todoData.text}</li>;
  }
}

TodoItem.propTypes = {
  todoData: PropTypes.object
};
