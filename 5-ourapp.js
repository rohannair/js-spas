// Hooking up Redux to react
import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// ----- REDUX STUFF
const ourActionCreator = newVal => {
  return {
    type: 'SET_HELLO_VALUE',
    val: newVal
  };
};

const initialState = {
  val: 'Lighthouse'
};

const ourReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_HELLO_VALUE':
    return action.val;

  default:
    return state;
  }
};

const store = createStore(ourReducer);

// ----- REACT STUFF
class App extends Component {
  render() {
    const { val } = this.props;

    return (
      <div>
        <h1>{ `Hello ${ val }` }</h1>
        <textarea type="text" onChange={ this._updateVal } value={ val } />
      </div>
    );
  };

  _updateVal = (e) => {
    const { dispatch } = this.props;
    dispatch(ourActionCreator({ val: e.target.value }));
  };
};

// State to props
const mapStateToProps = state => {
  return {
    val: state.val
  };
};

const AppContainer = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
