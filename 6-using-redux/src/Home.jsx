import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_COUNT } from './action';

class Home extends Component {
  render() {
    const { count, addCount } = this.props;
    return (
      <div>
        <span>{count}</span>
        <button onClick={addCount}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCount: () => {
      dispatch({ type: ADD_COUNT, count: 1 });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);