import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Example = () => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <CSSTransition in={show} classNames={'fade'} timeout={500}>
        <p>Example</p>
      </CSSTransition>
      <button onClick={onClick}>On / Off</button>
    </div>
  );
};

ReactDOM.render(
  <React.Fragment>
    <Example />
  </React.Fragment>,
  document.querySelector('#app')
);
