import React from 'react';

export default class InputTest extends React.Component {
  handleChange(event) {
    this.props.changeName(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
