import React from 'react';

import Actions from '@/flux/js/actions/index';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    const value = this.input.current.value;

    if (value === '') return;
    Actions.addTodo(value);
    this.input.current.value = null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="add-todo">
        <input type="text" ref={this.input} className="add-todo__input" />
        <button className="add-todo__button">追加</button>
      </form>
    );
  }
}
