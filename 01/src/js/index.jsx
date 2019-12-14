import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import StateTest from './components/StateTest';

class App extends React.Component {
  constructor() {
    super();
    this.age = 26;
  }

  render() {
    const name = 'yuki';
    return (
      <div>
        <p>Hello React!</p>
        <p>{name}</p>
        <p>{1 + 1}</p>
        <p>{this.getFullName()}</p>
        <p>{this.age}</p>
        <Layout />
        <StateTest />
      </div>
    );
  }

  getFullName() {
    return 'endo, yuki';
  }
}

const app = document.querySelector('#app');
ReactDOM.render(<App />, app);
