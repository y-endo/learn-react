const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

// 1秒後にインクリメントしたいけど、これは動かない
export function asyncIncrement() {
  setTimeout(() => {
    return {
      type: INCREMENT
    };
  }, 1000);
}

// 1秒後にインクリメント（redux-thunk）で動かす
export function asyncIncrementWithThunk() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: INCREMENT });
    }, 1000);
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
