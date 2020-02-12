import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import ModuleA from './containers/ModuleA';

ReactDOM.render(
  <Provider store={store}>
    <ModuleA />
  </Provider>,
  document.querySelector('#app')
);
