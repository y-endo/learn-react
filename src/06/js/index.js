import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

const style = {
  entering: {
    transition: 'opacity 0.5s ease',
    opacity: 1
  },
  entered: {
    transition: '',
    opacity: 1
  },
  exiting: {
    transition: 'opacity 0.5s ease',
    opacity: 0
  },
  exited: {
    transition: '',
    opacity: 0
  }
};
const ExampleTransition = () => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Transition in={show} timeout={500}>
        {state => <p style={style[state]}>ExampleTransition</p>}
      </Transition>
      <button onClick={onClick}>On / Off</button>
    </div>
  );
};

const ExampleCSSTransition = () => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <CSSTransition in={show} classNames={'fade'} timeout={500}>
        <p>ExampleCSSTransition</p>
      </CSSTransition>
      <button onClick={onClick}>On / Off</button>
    </div>
  );
};

const ExampleTransitionGroup = () => {
  const [items, setItems] = useState([]);

  const add = () => {
    setItems([...items, 'ExampleTransitionGroupItem']);
  };

  const remove = () => {
    const newValue = [...items];
    newValue.pop();
    setItems(newValue);
  };

  return (
    <div>
      <p>ExampleTransitionGroup</p>
      <button onClick={add}>アイテム追加</button>
      <button onClick={remove}>アイテム削除</button>
      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={item + index} classNames={'fade'} timeout={500}>
            <p>{item}</p>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ReactDOM.render(
  <React.Fragment>
    <ExampleTransition />
    <ExampleCSSTransition />
    <ExampleTransitionGroup />
  </React.Fragment>,
  document.querySelector('#app')
);
