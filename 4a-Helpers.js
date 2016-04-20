// React-Redux stuff
import { connect } from 'react-redux';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

// State to props
mapstateToProps = state => {
  return {
    val: state.val
  };
};

// Connect
const AppContainer = connect(mapstateToProps)(App);

// Rewrite App
class App extends Component {
  render() {
    const { val } = this.props;

    return (
      <div>
        <h1>{ `Hello ${ val }` }</h1>
        <input type="text" onChange={ this._updateVal } value={ val }/>
      </div>
    );
  };

  _updateVal = (e) => {
    const { dispatch } = this.props;
    dispatch(ourActionCreator({ val: e.target.value }));
  };
};
