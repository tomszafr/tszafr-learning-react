import React from "react";
import ReactDOM from "react-dom";
import { hashHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import todoApp from './reducers'
import TextSaveHome from './components/TextSaveHome.jsx'

let store = createStore(todoApp)

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
});
var Stuff = React.createClass({
  render: function() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
});

let App = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={TextSaveHome} />
        <Route path="/stuff" component={Stuff} />
        <Route path="/contact" component={Contact} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#container")
);
