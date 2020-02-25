import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home-page';

function MainRouter(): React.ReactElement {
  return (
    <Switch>
      <Route path="/" render={HomePage} />
    </Switch>
  );
}

export default MainRouter;
