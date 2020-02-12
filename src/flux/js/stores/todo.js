import { ReduceStore } from 'flux/utils';
import ActionTypes from '@/flux/js/actions/types';
import Dispatcher from '@/flux/js/dispatcher';

class TodoStore extends ReduceStore {
  /**
   * stateの初期値を定義
   */
  getInitialState() {
    return {
      listData: []
    };
  }

  /**
   * 新たなstateを作成する
   */
  reduce(state, action) {
    console.log(state, action);
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        // stateにオブジェクトをマージする、新しいオブジェクトのlistDataもstateのlistDataとマージする。めっちゃ可読性悪い…
        return { ...state, ...{ listData: [...[action.payload], ...state.listData] } };
      default:
        return state;
    }
  }
}

export default new TodoStore(Dispatcher);
