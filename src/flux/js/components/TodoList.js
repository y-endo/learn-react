import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const items = this.props.todo.listData.map((data, index) => {
      return <TodoItem key={index} todoData={data} />;
    });

    return <ul className="todo-list">{items}</ul>;
  }
}

TodoList.propTypes = {
  todo: PropTypes.object
};
