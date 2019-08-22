import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

// import components
import AddStore from './create_store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path={'/'} component={AddStore}/>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
