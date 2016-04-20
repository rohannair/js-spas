// Hooking up Redux to react
import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// ----- REACT STUFF
// ----- Let's create a React component
class App extends Component {
  state = {
    val: 'Lighthouse'
  };

  render() {
    const { val } = this.state;

    return (
      <div>
        <h1>{ `Hello ${ val }` }</h1>
        <input type="text" onChange={ this._updateVal } value={ val }/>
      </div>
    );
  };

  _updateVal = (e) => this.setState({ val: e.target.value });
};

render(<App />, document.getElementById('app'));


// ----- REDUX STUFF
// ----- Let's create an action
const ourActionCreator = newVal => {
  return {
    type: 'SET_HELLO_VALUE',
    val: newVal
  };
};

// Let's bring back our reducer
const ourReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_HELLO_VALUE':
    return {
      ...state,
      val: action.val
    };

  default:
    return state;
  }
};

// Let's create a Redux store
createStore(ourReducer);
