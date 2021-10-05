import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useCounter } from './custom';

function Example() {
  const { count, increment } = useCounter();
  const [name, setName] = useState('yuki');

  function changeName(newName) {
    setName(newName);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>私の名前 {name}</p>
      <button onClick={() => increment()}>Count Up</button>
      <button onClick={() => changeName('endo')}>名前変更</button>
    </div>
  );
}

function Example2() {
  const { count, increment } = useCounter();
  const [name, setName] = useState('yuki');

  function changeName(newName) {
    setName(newName);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>私の名前 {name}</p>
      <button onClick={() => increment()}>Count Up</button>
      <button onClick={() => changeName('endo')}>名前変更</button>
    </div>
  );
}

function UseEffectExample() {
  const [count] = useState(0);
  const [hoge, setHoge] = useState({ hoge: 'hoge' });

  useEffect(() => {
    console.log('useEffect', hoge, count);
  }, [hoge, count]);

  return (
    <div>
      <p>useEffect {hoge.hoge}</p>
      <button onClick={() => setHoge({ hoge: 'fuga' })}>setHoge</button>
    </div>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Example />
    <Example2 />
    <UseEffectExample />
  </React.Fragment>,
  document.querySelector('#app')
);
