import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('yuki');

  function changeName(newName) {
    setName(newName);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>私の名前 {name}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
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
    <UseEffectExample />
  </React.Fragment>,
  document.querySelector('#app')
);
