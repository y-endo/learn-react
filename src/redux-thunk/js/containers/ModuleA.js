import { connect } from 'react-redux';
import { increment, decrement, asyncIncrement, asyncIncrementWithThunk } from '../modules/ModuleA';
import ModuleA from '../components/ModuleA';

const mapStateToProps = state => {
  return {
    state: state.moduleA
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    asyncIncrement: () => dispatch(asyncIncrement()),
    asyncIncrementWithThunk: () => dispatch(asyncIncrementWithThunk()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModuleA);
