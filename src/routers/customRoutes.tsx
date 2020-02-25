import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export function ProtectedRoute({ component, ...rest }: RouteProps): React.ReactElement {
  const isAuthenticated = localStorage.getItem('AUTH_TOKEN');

  return (
    <Route
      {...rest}
      render={props =>
        !!isAuthenticated && component ? React.createElement(component, props) : <Redirect to="/signin" />
      }
    />
  );
}

export function AuthRoute({ component, ...rest }: RouteProps): React.ReactElement {
  const isAuthenticated = localStorage.getItem('AUTH_TOKEN');
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && component ? React.createElement(component, props) : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
}
