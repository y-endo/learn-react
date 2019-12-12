import React from 'react';

export default class StateTest extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Endo'
    };
  }

  render() {
    setTimeout(() => {
      // ↓ 直接stateを変更しても変わらない
      // this.state.name = 'Yuki';

      this.setState({ name: 'Yuki' });
    }, 1000);
    return <div>{this.state.name}</div>;
  }
}
