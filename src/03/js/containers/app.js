import React from 'react';
import { Container } from 'flux/utils';

import TodoStore from '@/03/js/stores/todo';

import App from '@/03/js/components/App';

class AppContainer extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return {
      todo: TodoStore.getState()
    };
  }

  render() {
    // return <App todo={this.state.todo} />;
    return <App {...this.state} />;
  }
}

export default Container.create(AppContainer);
