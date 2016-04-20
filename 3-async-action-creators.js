// An action
const ourFirstAction = {
  type: 'ACTION_ONE',
  newVal: { value: 1 } // <-- hardcoded values? :(
};

// Let's make this into a factory
const ourFirstActionCreator = (newVal) => ({
  type: 'ACTION_ONE',
  newVal: { value: newVal }
});















// Async functions
import fetch from 'isomorphic-fetch';

const ourAsyncActionCreator = token => {
  return dispatch => fetch(`${API_URL}/getValue`, { method: 'GET' })
  .then(response => response.json())
  .then(response => dispatch(ourFirstActionCreator(response)));
};
