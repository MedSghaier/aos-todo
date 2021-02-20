import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';

import LoginPage from './pages/login/login.page';
import Wrapper from './Wrapper/Wrapper';
// Styles
import './App.scss';

function App({isAuthenticated}) {
  return (
    <div className="page-wrap">
      <Router>
          <Switch>
              {/* Redirect to /app for authenticated users */}
              <Route exact path="/" render={() => <Redirect to="/app/home" />} />
              
              {/* Login Page */}
              <PublicRoute path="/login" component={LoginPage} />

              {/* Private Routes */}
              <PrivateRoute path="/app" component={Wrapper} />
          </Switch>
      </Router>
    </div>
  );

function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(App);
