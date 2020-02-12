import Dispatcher from '@/flux/js/dispatcher';
import ActionTypes from './types';

const Actions = {
  /**
   * Todoの追加
   * @param {String} text Todoテキスト
   */
  addTodo(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      payload: { text }
    });
  }
};

export default Actions;
