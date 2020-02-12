import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';

const Example = () => {
  const [show, setShow] = useState(true);
  const spring = useSpring({
    opacity: show ? 1 : 0
  });

  return (
    <div>
      <animated.div style={spring}>Example</animated.div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        On / Off
      </button>
    </div>
  );
};

ReactDOM.render(<Example />, document.querySelector('#app'));
