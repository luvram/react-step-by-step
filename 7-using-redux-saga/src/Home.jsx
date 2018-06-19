import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_COUNT, REQUEST_CURRENT_TIME } from './action';

class Home extends Component {
  render() {
    const { count, currentTime, addCount, requestTime } = this.props;
    return (
      <div>
        <div>
          <span>{count}</span>
          <button onClick={addCount}>+</button>
        </div>
        <div>
          currentTime: {currentTime} <button onClick={requestTime}>Get Current Time</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    currentTime: state.currentTime
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCount: () => {
      dispatch({ type: ADD_COUNT, count: 1 });
    },
    requestTime: () => {
      dispatch({ type: REQUEST_CURRENT_TIME });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);