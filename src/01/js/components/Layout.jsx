import React from 'react';

import Header from './Header';
import Footer from './Footer';
import InputTest from './InputTest';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Layout'
    };
  }

  changeName(name) {
    this.setState({ name });
  }

  render() {
    const subTitle = 'サブタイトル';

    return (
      <div>
        <Header title={'Reactの勉強'} subTitle={subTitle} />
        <p>{this.state.name}</p>
        <InputTest changeName={this.changeName.bind(this)} name={this.state.name} />
        <Footer />
      </div>
    );
  }
}
