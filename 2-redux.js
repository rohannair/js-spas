// What Redux looks like:

// Dependencies
import { merge } from 'lodash';

// Our action
const ourAction = {
  type: 'ACTION_ONE',
  newVal: { value: 1 } // Isn't hardcoding so nice?
};

// Let's dispatch the function
// We would usually use a function to do this, called an action creator
dispatch(ourAction);












// The reducer
const ourReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ACTION_ONE':
    if (typeof action.newVal !== 'object') {
      return state;
    }

    let values = [].concat(action.newVal);
    return merge (
      state,
      values
    );

  default:
    return state;
  }
};

// State before: {}
// State after: { values: [ { value: 1 } ] }
