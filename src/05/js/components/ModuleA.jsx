/* eslint-disable react/prop-types */
import React from 'react';

const ModuleA = props => {
  const { increment, asyncIncrement, asyncIncrementWithThunk, decrement, state } = props;
  return (
    <div className="moduleA">
      <h1>ModuleA</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>INCREMENT</button>
      <br />
      <button onClick={asyncIncrement}>asyncIncrement</button>（ActionCreatorで単純にsetTimeoutしてるので動かない）
      <br />
      <button onClick={asyncIncrementWithThunk}>asyncIncrementWithThunk</button>
      <br />
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};

export default ModuleA;
